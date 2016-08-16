
# pretty-object-stream

prints objects like:

```
    name   Tatyana Bode
   email   Silas_Gerlach@jett.info
      ip   237.157.2.103
 company   Stehr Group


    name   Roberta Marks PhD
   email   Eric_Labadie@kameron.name
      ip   106.237.50.68
 company   Kassulke, O'Keefe and Grady
```

\* flattens nested objects

### Installation

```
npm install --save pretty-object-stream
```

### Usage

```
var pstream = require('pretty-object-stream')

someStream
	.pipe(pstream)
	.pipe(process.stdout)
```

### Test

```
node test.js
```


