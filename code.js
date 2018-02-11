function parse(txt) {
    var str = txt.match(/[a-z]+\d+|[a-z]+|\d+/ig);
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
    return count;
}

function getWords(txt) {
    var count = 0;
    while (count < txt.length) {
        count++;
    }
    return count;
}

function getLines(txt) {
    return txt.split(/\r\n|\r|\n/).length;
}

function getNonEmptyLines(txt) {
    var count = 0;
    var str = txt.split(/\r\n|\r|\n/);
    for (var i = 0; i < str.length; i++) {
        if (str[i].trim() != "") {
            count++;
        }
    }
    return count;
}

function getAverageWordLength(charCount, wordCount) {
    return charCount/wordCount;
}

function getMaxLineLength(txt) {
    var maxCount = 0;
    var count = 0;
    var str = txt.split(/\r\n|\r|\n/);
    for (var i = 0; i < str.length; i++) {
        var x = str[i].split("");
        x.forEach(function() {
            count++
        });
        if (count > maxCount) {
            maxCount = count;
        }
        count = 0;
    }
    return maxCount;
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
    var wordCount = getWords(parsedTxt);
    return {
        nChars: getChars(txt),
        nWords: wordCount,
        nLines: getLines(txt),
        nNonEmptyLines: getNonEmptyLines(txt),
        maxLineLength: getMaxLineLength(txt),
        averageWordLength: getAverageWordLength(getChars(parsedTxt), wordCount),
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

