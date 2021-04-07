//Paired Omar and Imtiaz

const transpose = function(matrix) {
    matrix = matrix[0].map((element, index) => matrix.map(row => row[index]));
    return matrix
  };
  
  let result = false;
  let flag = false;
  
  const wordSearch = (letters, word) => {
    if (letters.length === 0 || letters === undefined || word === '' || word === undefined || !Array.isArray(letters) || (typeof word) !== "string") {
        return "Incorrect input";
    } else {
  
      const horizontalJoin = letters.map(ls => ls.join(''))
      for (l of horizontalJoin) {
        if (l.includes(word)) {
          result = true;
        } else if (flag === false) {
          flag = true;
          wordSearch(transpose(letters), word);
        }
      }
      return result;
    }
  }

  module.exports = wordSearch;