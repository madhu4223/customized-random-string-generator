var defaultSettings = {
    length: 50,
    includeSpecialChar: true,
    includeNumber: true,
    ignoreList: [],
    includeCapitalAlpha: true,
    customCharInput: []
}
module.exports = {
    generateRandomString: function (options) {
        let finalSettings = {}
        if (options) {
            finalSettings.length = (options.length && typeof (options.length) == "number") ? options.length : defaultSettings.length
            finalSettings.includeSpecialChar = (options.includeSpecialChar != undefined && typeof (options.includeSpecialChar) == "boolean") ? options.includeSpecialChar : defaultSettings.includeSpecialChar
            finalSettings.includeNumber = (options.includeNumber != undefined && typeof (options.includeNumber) == "boolean") ? options.includeNumber : defaultSettings.includeNumber
            finalSettings.includeCapitalAlpha = (options.includeCapitalAlpha != undefined && typeof (options.includeCapitalAlpha) == "boolean") ? options.includeCapitalAlpha : defaultSettings.includeCapitalAlpha
            finalSettings.ignoreList = (options.ignoreList != undefined && options.ignoreList.length <= 100) ? options.ignoreList : defaultSettings.ignoreList;
            finalSettings.customCharInput = (options.customCharInput != undefined && options.customCharInput.length >= 5) ? options.customCharInput : defaultSettings.customCharInput;

           return  module.exports.createRandomString(finalSettings)
        } else {
           return module.exports.createRandomString(defaultSettings);
        }
    },
    createRandomString: function (inputOptions) {
        var result = '';
        let characters = '';
        if (inputOptions.customCharInput.length) {
            characters = inputOptions.customCharInput.toString()
        } else {
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?';
            characters = inputOptions.includeNumber ? characters : characters.replace('0123456789', '');
            characters = inputOptions.includeSpecialChar ? characters : characters.replace('!@#$%&*?', '');
            characters = inputOptions.includeCapitalAlpha ? characters : characters.replace('ABCDEFGHIJKLMNOPQRSTUVWXYZ', '');
            inputOptions.ignoreList.map((ignorableChar) => {
                characters = characters.replace(ignorableChar + '', '');
            })
        }
        let inputLength = inputOptions.length;
        var charactersLength = characters.length;
        for (var i = 0; i < inputLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}