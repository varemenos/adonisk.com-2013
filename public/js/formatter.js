document.addEventListener('DOMContentLoaded', function () {
	var editor = ace.edit('edit');
	var output = ace.edit('output');

	editor.setOptions({
		mode: 'ace/mode/html',
		theme: 'ace/theme/tomorrow_night_eighties',
		tabSize: 2,
		showPrintMargin: false,
		wrap: true,
		useWorker: true,
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
		mode: 'ace/mode/html',
		theme: 'ace/theme/tomorrow_night_eighties',
		tabSize: 2,
		showPrintMargin: false,
		wrap: true,
		useWorker: true,
		fontSize: 12,
		showInvisibles: true,
		behavioursEnabled: true,
		useSoftTabs: true,
		highlightActiveLine: false,
		showGutter: true,
		showFoldWidgets: true,
		readOnly: false
	});

	var settingsBtn = document.querySelector('#action-settings');
	var spacesBtn = document.querySelector('#action-spaces');
	var settings = document.querySelector('#settings');
	var langSel = document.querySelector('select[name=lang]');
	var tabsSel = document.querySelector('select[name=tabs]');

	settingsBtn.addEventListener('click', function () {
		if (settings.classList.contains('active')) {
			settings.classList.remove('active');
		} else {
			settings.classList.add('active');
		}
	});

	spacesBtn.addEventListener('click', function () {
		editor.setOption('useSoftTabs', spacesBtn.checked);
		output.setOption('useSoftTabs', spacesBtn.checked);
	});

	langSel.addEventListener('change', function () {
		editor.setOption('mode', 'ace/mode/' + langSel.value);
		output.setOption('mode', 'ace/mode/' + langSel.value);
	});

	tabsSel.addEventListener('change', function () {
		editor.setOption('tabSize', tabsSel.value);
		output.setOption('tabSize', tabsSel.value);
	});
});
