{
	appDir: '../www',
	mainConfigFile: '../www/js/config.js',
	dir: '../www-built',
	modules: [
		{
			name: '../config',
			include: ['jquery']
		},
		{
			name: 'app/page1',
			exclude: ['../config']
		},
	]
}