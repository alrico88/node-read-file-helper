# node-read-file-helper

Helper functions to read files as text, JSON, and additional formats.

## Installation

`npm i node-read-file-helper`

## Usage

```javascript
const { readFileAsTextSync } = require('node-read-file-helper');
const path = require('path');

const asString = readFileAsTextSync(path.resolve('./myFile.txt'));
```

## Table of contents

### Functions

- [readFileAsJSON](#readfileasjson)
- [readFileAsJSONSync](#readfileasjsonsync)
- [readFileAsText](#readfileastext)
- [readFileAsTextSync](#readfileastextsync)

## Functions

### readFileAsJSON

▸ **readFileAsJSON**<`T`\>(`path`): `Promise`<`T`\>

Reads the file as JSON content asynchronously

**`export`**

#### Type parameters

| Name | Description                      |
| :--- | :------------------------------- |
| `T`  | The JSON structure after parsing |

#### Parameters

| Name   | Type     | Description                  |
| :----- | :------- | :--------------------------- |
| `path` | `string` | The path to the file to read |

#### Returns

`Promise`<`T`\>

Promise that will resolve to the parsed JSON

#### Defined in

index.ts:61

---

### readFileAsJSONSync

▸ **readFileAsJSONSync**<`T`\>(`path`): `T`

Reads the file as JSON content

**`export`**

#### Type parameters

| Name | Description                      |
| :--- | :------------------------------- |
| `T`  | The JSON structure after parsing |

#### Parameters

| Name   | Type     | Description                  |
| :----- | :------- | :--------------------------- |
| `path` | `string` | The path to the file to read |

#### Returns

`T`

The parsed JSON

#### Defined in

index.ts:49

---

### readFileAsText

▸ **readFileAsText**(`path`): `Promise`<`string`\>

Reads file as text asynchronously

**`export`**

#### Parameters

| Name   | Type     | Description                  |
| :----- | :------- | :--------------------------- |
| `path` | `string` | The path to the file to read |

#### Returns

`Promise`<`string`\>

The file contents

#### Defined in

index.ts:23

---

### readFileAsTextSync

▸ **readFileAsTextSync**(`path`): `string`

Reads a file as text

**`export`**

#### Parameters

| Name   | Type     | Description                  |
| :----- | :------- | :--------------------------- |
| `path` | `string` | The path to the file to read |

#### Returns

`string`

The file contents as text

#### Defined in

index.ts:10
