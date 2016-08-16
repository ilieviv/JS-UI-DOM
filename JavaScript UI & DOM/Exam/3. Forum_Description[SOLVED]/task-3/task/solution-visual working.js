function solve() {
	return function() {
		var template = [

             ' <h1>{{title}}</h1>',
                '<ul>',
                    '<li>',
                    '{{#posts}}',
                        '<div class="post">',
                             '<p class="author">',
                                    '{{#if author}}',
                                    '<a class="user" href="/user/{{author}}">{{author}}</a>',
                                    '{{/if}}',
                                    '{{#unless author}}',
                                    '<a class="anonymous">Anonymous</a>',
                                    '{{/unless}}',
                             '</p>',
                             '<pre class="content">{{text}}</pre>',
                        '</div>',
                        '<ul>',
                            '{{#comments}}',
                            '<li>',
                                '{{#if deleted}}',
                                '{{/if}}',
                                '{{#unless deleted}}',
                                '<div class="comment">',
                                '<p class="author">',
                                '{{#if author}}',
                                '<a class="user" href="/user/{{author}}">{{author}}</a>',
                                '{{/if}}',
                                '{{#unless author}}',
                                '<a class="anonymous">Anonymous</a>',
                                '{{/unless}}',
                                '</p>',
                                '<pre class="content">{{text}}</pre>',
                                '</div>',
                                '{{/unless}}',
                            '</li>',
                            '{{/comments}}',
                        '</ul>',
                    '{{/posts}}',
                    '</li>',
                '</ul>'
		].join('\n');

		return template;
	}
}

// submit the above

if(typeof module !== 'undefined') {
	module.exports = solve;
}
