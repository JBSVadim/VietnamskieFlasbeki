isAdult = function (numb) {
  if( numb >= 18){
    return 'adult';
  } else {
    return 'U to young, son';
  }
}

console.log(isAdult(17));

isMyltiplicate = function(numb, numb2) {
  if (numb % numb2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isMyltiplicate(25, 5))

isItTriangle = function (a, b, c) {
  if(a + b > c || b + c > a || c + a >b) {
    return true;
  } else {
    return false;
  }
}

console.log(isItTriangle(6, 6, 8))

rhombySquare = function (a, b) {
  if( b > 0 || a > 0) {
    return `Площадь ромба = ${a * b}`
  } else {
    return 'невалидное значение'
  }
}

console.log(rhombySquare(5,7));

celinderSquare = function (h, r) {
  if( h > 0 || r > 0) {
    return `Плозадь цилиндра =2п${r * (r + h)}`
  } else {
    return 'Невалидное значение'
  }
}

console.log(celinderSquare(5, 10));

triangleSquare = function (a, b, c) {
 if(a + b > c || b + c > a || c + a >b) {
  p = (a + b + c) / 2;
  const result = p * (p - a) * (p - b) * (p - c) ;
  return `площадь треугольника по теореме Герона = ${Math.sqrt(result)}`;
} else {
  return 'not valid';
}}

console.log(triangleSquare(6,6,7));

pryamougolnikSquare = function (a, b) {
if (a > 0 || b > 0) {
return `Площадь прямоугольника = ${a * b}`
} else {
return 'Невалидное значение'
}
}

console.log(pryamougolnikSquare(6,8))