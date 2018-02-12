function parse(txt) {
    return txt.match(/[a-z]+\d+|[a-z]+|\d+/ig);
}

function getChars(txt) {
    var count = 0;

    for (var i = 0; i < txt.length; i++) {
        var z = txt[i].split("");
        z.forEach(function() {
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
        if (str[i].trim() != "")
            count++;
    }

    return count;
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

        if (count > maxCount)
            maxCount = count
        count = 0;
    }

    return maxCount;
}

function getAverageWordLength(charCount, wordCount) {
    return charCount/wordCount;
}

function getPalindromes(txt) {
    var palindromes = [];

    for (var i = 0; i < txt.length; i++) {
        var word = txt[i].toLowerCase();
        var strArray = word.split("");
        strArray = strArray.reverse();
        var str = strArray.join("");

        if (word.length > 2 && word == str)
            palindromes.push(word);
    }

    return palindromes;
}

// https://stackoverflow.com/questions/1960473/get-all-unique-values-in-an-array-remove-duplicates
function uniqueArray(givenArray) {
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    var unique = givenArray.filter( onlyUnique );

    return unique;
}

function getLongestWords(txt) {
    var words = txt;

    // https://stackoverflow.com/questions/10630766/sort-an-array-based-on-the-length-of-each-element
    words.sort(function(a, b){
        return b.length - a.length || a.localeCompare(b);
    });
    var uniqueWords = uniqueArray(words);
    var longestWords = [];

    for (var i = 0; i < 10; i++) {
        if (uniqueWords[i] != null)
            longestWords.push(uniqueWords[i].toLowerCase());
    }

    return longestWords;
}

function getMostFrequentWords(txt) {
    var dictionary = {};

    for (var i = 0; i < txt.length; i++) {
        if (dictionary[txt[i]] == null)
            dictionary[txt[i]] = 1;

        else if (dictionary[txt[i]] != null)
            dictionary[txt[i]]++;
    }

    var sortedDictionary = [];
    for (key in dictionary) {
        sortedDictionary.push([key, dictionary[key]]);
    }

    sortedDictionary.sort(function(a, b) {
        var nameA = a[0].toUpperCase();
        var nameB = b[0].toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });
    sortedDictionary.sort(function(a, b) {
        return b[1] - a[1];
    });

    var formattedDictionary = [];
    for (var x = 0; x < sortedDictionary.length; x++) {
        var name = sortedDictionary[x][0] + "(" + sortedDictionary[x][1] + ")";
        formattedDictionary.push(name);
    }

    var frequentWords = [];
    for (var y = 0; y < 10; y++) {
        if (formattedDictionary[y] != null)
            frequentWords.push(formattedDictionary[y].toLowerCase());
    }
    
    return frequentWords;
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
        palindromes: getPalindromes(parsedTxt),
        longestWords: getLongestWords(parsedTxt),
        mostFrequentWords: getMostFrequentWords(parsedTxt)
    };
}

