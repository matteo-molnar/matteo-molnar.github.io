//
// this is just a stub for a function you need to implement
//
function parse(txt) {
    // will only split for spaces and periods, need to include everything that is not alphanumeric
    var strFinal = [];
    var str = txt.split(" ");
    console.log(str);
    for (var i = 0; i < str.length; i++) {
        var x = str[i].split(".");

        for (var y = 0; y < x.length; y++) {
            strFinal.push(x[y]);
        }
    }
    console.log(strFinal);
    return strFinal;
}

function getChars(txt) {
    return {

    };
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
    return {

    };
}

function getNonEmptyLines(txt) {
    return {

    };
}

function getAverageWordLength(txt) {
    return {

    };
}

function getMaxLineLength(txt) {
    return {

    };
}

function getPalindromes(txt) {
    return {

    };
}

function getLongestWords(txt) {
    return {

    };
}

function getMostFrequentWords(txt) {
    return {

    };
}

function getStats(txt) {
    var final = parse(txt);
    getWords(final);
    return {
        nChars: 123,
        nWords: 22,
        nLines: 10,
        nNonEmptyLines: 22,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

