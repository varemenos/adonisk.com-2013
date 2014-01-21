document.addEventListener("DOMContentLoaded", function () {
	var editor = ace.edit("edit");
	var output = ace.edit("output");

	editor.setOptions({
		mode: 'ace/mode/html',
		theme: 'ace/theme/tomorrow_night',
		tabSize: 4,
		showPrintMargin: false,
		wrap: true,
		useWorker: true,
		fontSize: 12,
		showInvisibles: false,
		behavioursEnabled: true,
		useSoftTabs: false,
		highlightActiveLine: false,
		showGutter: true,
		showFoldWidgets: true,
		readOnly: false
	});

	output.setOptions({
		mode: 'ace/mode/html',
		theme: 'ace/theme/tomorrow_night',
		tabSize: 4,
		showPrintMargin: false,
		wrap: true,
		useWorker: true,
		fontSize: 12,
		showInvisibles: false,
		behavioursEnabled: true,
		useSoftTabs: false,
		highlightActiveLine: false,
		showGutter: true,
		showFoldWidgets: true,
		readOnly: true
	});
});