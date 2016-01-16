var height = 10;

function createTriangle(height) {
  var ret = 'x';
  for (var i=0; i < height; i++) {
    if (i === 0) {
      console.log(ret);
    } else {
      ret = ret.concat('x');
      console.log(ret);
    }
  }
  return ret;
}

createTriangle(height);

