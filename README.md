
# customized-random-string-generator

  

This package makes easy the process of generating random string with given limitations

  

## Installing

Run below command to install this package

  

> npm i customized-random-string-generator

  
  

## How To Use

```

var randomeGenerator = require('customized-random-string-generato');

randomeGenerator.generateRandomString({length:64})

  

```

## Options

| Option      | Type        |
|--|--|
| length | number (default : 32) |
| includeSpecialChar| boolean (default : true) |
| includeNumber    |  boolean (default : true) | 
| includeCapitalAlpha|  boolean (default : true) |
| ignoreList   | Array of characters (max length 100) |
| customCharInput| string (min length 5) |

## Example

    random.generateRandomString(
	    {ignoreList:[1,2,3,'A'],
	    })
*expected output :*
*i$7h!@tixkqu4t4!h%@@j77??547x&*
## Custom Char List 

    random.generateRandomString({customCharInput:"cUStomInpPut123"})
*expected output :*
*ImP1PUmnuUuuPI1UPmnmmU2UP3*

 -  When ever `customCharInput` is given other parameters like `includeNumber` will not  be applied except `length`
