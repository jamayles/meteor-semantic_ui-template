Router.route(
	'/',
	{
		name: 'HomePage',
		title: 'Jumbotron',
		metaNames:
		{
			viewport: 'width=device-width, initial-scale=1',
			description: ''
		},
		layoutTemplate: 'MainLayout',
		template: 'HomePage'
	}
);