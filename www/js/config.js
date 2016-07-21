requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		app: '../app',
		style: '../../css',
		jquery: 'jquery-2.1.4'
	},
	map: {
		'*': {
			'css': '../../require-css/css'
		},
	}
});