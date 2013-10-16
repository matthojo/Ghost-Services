$(document).ready(function(){
    var dataSource = 'services.json';
    var source   = "{{#each sites}}<tr><td>{{title}}</td><td><a href='{{URL}}'>{{URL}}</a></td><td><i title='Support level' class='support-level-{{support-level}}'></i></td><td class='center'>{{#if setup}}<a href='{{setup}}'>YES</a>{{/if}}</td><td>{{#if verified}}<i title='Verified by Ghost' class='verified'></i>{{/if}}</td></tr>{{/each}}";
	var template = Handlebars.compile(source);
    $.getJSON(dataSource, function (data) {
		var html    = template(data);
		$(".sites tbody").html(html);
    });
 });