// check if this tool is currently used as a CLI or as a server, defaults to "cli"
var usageType = 'cli';

if (usageType === 'cli') {
	var cli = require('./cli');
}
