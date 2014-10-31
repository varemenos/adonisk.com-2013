document.addEventListener('DOMContentLoaded', function () {
	var editor = ace.edit('edit');
	var output = ace.edit('output');

	editor.setOptions({
		mode: 'ace/mode/css',
		theme: 'ace/theme/tomorrow_night_eighties',
		tabSize: 2,
		showPrintMargin: false,
		wrap: true,
		useWorker: false,
		fontSize: 12,
		showInvisibles: false,
		behavioursEnabled: true,
		useSoftTabs: true,
		highlightActiveLine: false,
		showGutter: true,
		showFoldWidgets: true,
		readOnly: false
	});

	output.setOptions({
		mode: 'ace/mode/css',
		theme: 'ace/theme/tomorrow_night_eighties',
		tabSize: 2,
		showPrintMargin: false,
		wrap: true,
		useWorker: false,
		fontSize: 12,
		showInvisibles: false,
		behavioursEnabled: true,
		useSoftTabs: true,
		highlightActiveLine: false,
		showGutter: true,
		showFoldWidgets: true,
		readOnly: false
	});

	var settingsBtn = document.querySelector('#action-settings');
	var spacesBtn = document.querySelector('#action-spaces');
	var prefixBtn = document.querySelector('#action-prefix');
	// var settings = document.querySelector('#settings');
	var tabsSel = document.querySelector('select[name=tabs]');

	// settingsBtn.addEventListener('click', function () {
	// 	if (settings.classList.contains('active')) {
	// 		settings.classList.remove('active');
	// 	} else {
	// 		settings.classList.add('active');
	// 	}
	// });

	spacesBtn.addEventListener('click', function () {
		editor.setOption('useSoftTabs', spacesBtn.checked);
		output.setOption('useSoftTabs', spacesBtn.checked);
	});

	tabsSel.addEventListener('change', function () {
		editor.setOption('tabSize', tabsSel.value);
		output.setOption('tabSize', tabsSel.value);
	});

	prefixBtn.addEventListener('click', function () {
		var css = editor.getValue();
		var prefixed;
		try {
			prefixed = autoprefixer().process(css).css;
		} catch (e) {
			prefixed = e.reason + ' at line ' + e.line;
		}

		output.setValue(prefixed, 1);
	});
});
