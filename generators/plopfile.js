module.exports = function (plop) {
	plop.setGenerator('components', {
		description: 'create component',
		prompts: [
			{
				type: 'list',
				name: 'type',
				message: 'O que você quer gerar?',
				choices: ['components', 'pages'],
				default: 'components',
			},
			{
				type: 'input',
				name: 'name',
				message: 'Do que devemos chamá-lo?',
				validate: function (input) {
					var done = this.async();
					if (!input) {
						done('Ops, precisamos de um nome ;)');
						return;
					}
					done(null, true);
				},
			},
			{
				type: 'confirm',
				name: 'withTest',
				message: 'Você quer criar um teste?',
				default: 'Y',
			},
		],
		actions: function (data) {
			const actions = [
				{
					type: 'add',
					path: '../src/{{camelCase type}}/{{pascalCase name}}/index.js',
					templateFile: 'templates/component.hbs',
				},
				{
					type: 'add',
					path: '../src/{{camelCase type}}/{{pascalCase name}}/styles.js',
					templateFile: 'templates/styles.hbs',
				},
			];
			if (data.withTest) {
				actions.push({
					type: 'add',
					path:
						'../__tests__/unit/{{camelCase type}}/{{pascalCase name}}.test.js',
					templateFile: 'templates/test.hbs',
				});
			}
			return actions;
		},
	});
};
