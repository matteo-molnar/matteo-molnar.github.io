function parse(txt) {
    // will only split for spaces and periods, need to include everything that is not alphanumeric
    //var strFinal = [];
    //var str = txt.match(/[a-z]+|\d+/ig);
    var str = txt.match(/[a-z]+\d+|[a-z]+|\d+/ig);
    // console.log(str);
    // for (var i = 0; i < str.length; i++) {
    //     var x = str[i].split(".");
    //
    //     for (var y = 0; y < x.length; y++) {
    //         strFinal.push(x[y]);
    //     }
    // }
    // console.log(strFinal);
    //return strFinal;
    console.log(str);
    return str;
}

function getChars(txt) {
    var count = 0;
    for (var i = 0; i < txt.length; i++) {
        var z = txt[i].split("");
        z.forEach(function(){
            count++;
        });
    }
    console.log("Character count: " + count);
    return count;
}

function getWords(txt) {
    var count = 0;
    while (count < txt.length) {
        count++;
    }
    console.log("Word count: " + count);
    return count;
}

function getLines(txt) {
    return txt.split(/\r\n|\r|\n/).length;
}

function getNonEmptyLines(txt) {
    var count = 0;
    var str = txt.split(/\r\n|\r|\n/);
    for (var i = 0; i < str.length; i++) {
        if (str[i] != "") {
            count++;
        }
    }
    return count;
}

function getAverageWordLength(txt) {
    return;
}

function getMaxLineLength(txt) {
    return;
}

function getPalindromes(txt) {
    return;
}

function getLongestWords(txt) {
    return;
}

function getMostFrequentWords(txt) {
    return;
}

function getStats(txt) {
    var parsedTxt = parse(txt);
    return {
        nChars: getChars(parsedTxt),
        nWords: getWords(parsedTxt),
        nLines: getLines(txt),
        nNonEmptyLines: getNonEmptyLines(txt),
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

