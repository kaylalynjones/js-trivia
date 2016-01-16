var row = '',
    space = ' ',
    hash = '#',
    node = [],
    boardSize = 8,
    finalResult = '';


var createChessboard = function( size ) {
  row = createRow(size);

  for (var i = 0; i < size; i++) {
    if ( !isEven(i) ){
      var reverseRow = row.split(' ').reverse().join(' ');
      finalResult = finalResult.concat('\n' + reverseRow);
    } else {
      if (finalResult === '') {
        finalResult = finalResult.concat(row);
      }
      else {
        finalResult = finalResult.concat('\n' + row);
      }
    }
  }
  console.log(finalResult);
  return finalResult;
}


function createRow( size ) {
  for (var j = 0; j < size; j++) {
    if ( isEven(j) ) {
      node.push(space);
    } else {
      node.push(hash);
    }
  }

  var result = node.join('');
  return result;
}

function isEven( x ) {
  return ( x%2 ) === 0;
}

createChessboard(boardSize);
