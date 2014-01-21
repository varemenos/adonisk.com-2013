document.addEventListener("DOMContentLoaded", function () {
	var editor = ace.edit("edit");
	var output = ace.edit("output");

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
});