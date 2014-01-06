# tools.adonisk.com

## Description

This is the source for the AdonisK.com tools

## CLI

### Usage

```js
node cli -option option-parameter
```

options:

* `-e` or `--encoding`, base64 encoding
* `-d` or `--decoding`, base64 decoding

### examples

encode a string:

```js
node cli -e "hello world"
```

=>

	aGVsbG8gd29ybGQ=

decode a string:

```js
node cli -d aGVsbG8gd29ybGQ=
```

=>

	hello world

## Credits

	TODO

## License MIT
