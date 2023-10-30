function stringMoreThenLength (string, length) {
  return (string.length <= length) ? 'true' : 'false';
}

stringMoreThenLength("новая строка", 12);

function polindrom (word){
  const tempString = word
  .toLowerCase ()
  .replaceAll (' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
}

polindrom("а роза упала на лапу азора")

function findNumb (str){
  let string = str.toString();
  let count = '';
  for (let i = 0; i<string.length;i++){
    if(!Number.isNaN(parseInt(string[i], 10))){
      count == string[i];
    }
  }
  return parseInt(count, 10);
}

findNumb(1.5);
