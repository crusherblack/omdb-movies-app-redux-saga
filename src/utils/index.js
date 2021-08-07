//set pattern string size

export function anagramsChecker(words) {
  const STRING_SIZE = 256;

  function isAnagram(string1, string2) {
    let patternNumber = 0; //help to identified string group

    if (string1.length !== string2.length)
      return {
        result: false,
        patternNumber,
      };

    let pattern1 = [...Array(STRING_SIZE)].fill(0);
    let pattern2 = [...Array(STRING_SIZE)].fill(0);

    for (let i = 0; i < string1.length && string2.length; i++) {
      pattern1[string1[i].charCodeAt(0)]++;
      pattern2[string1[i].charCodeAt(0)]++;
    }

    for (let i = 0; i < STRING_SIZE; i++) {
      if (pattern1[i] != pattern2[i]) {
        return {
          result: false,
          patternNumber,
        };
      }
    }

    for (let i = 0; i < STRING_SIZE; i++) {
      patternNumber += pattern1[i] !== 0 ? i : 0;
    }

    return {
      result: true,
      patternNumber,
    };
  }

  //get array word with it anagram or itself
  const result = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      const anagramResult = isAnagram(words[i], words[j]);

      if (anagramResult.result) {
        result.push([words[i], anagramResult.patternNumber]);
      }
    }
  }

  //get uniqueTotal
  let patternNumbers = [];

  for (let i = 0; i < result.length; i++) {
    if (patternNumbers.indexOf(result[i][1]) === -1) {
      patternNumbers.push(result[i][1]);
    }
  }

  //list all array multi dimension
  const tempData = [...Array(patternNumbers.length)];

  for (let i = 0; i < tempData.length; i++) {
    tempData[i] = [];
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < patternNumbers.length; j++) {
      if (result[i][1] === patternNumbers[j]) {
        tempData[j].push(result[i][0]);
      }
    }
  }

  //remove duplicate
  const results = [];

  for (let i = 0; i < tempData.length; i++) {
    const temp = [];
    for (let j = 0; j < tempData[i].length; j++) {
      if (temp.indexOf(tempData[i][j]) === -1) {
        temp.push(tempData[i][j]);
      }
    }

    results.push(temp);
  }

  console.log(results);
  return results;
}
