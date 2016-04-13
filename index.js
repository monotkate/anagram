exports.checkAnagram = function(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }

    var str1Array = string1.split('').sort();
    var str2Array = string2.split('').sort();

    for (var i = 0; i < str1Array.length; i++) {
        if (str1Array[i] !== str2Array[i]) {
            return false;
        }
    };

    return true;
}
