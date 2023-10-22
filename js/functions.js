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

