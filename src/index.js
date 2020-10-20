
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let mat = [];


  if(matrix){
    for(let i = 0; matrix[i];  i++){
      if(i % 2 !== 0 ){
        mat.push(...matrix[i].reverse());
      } if(i % 2 == 0 ) {
        mat.push(...matrix[i]);
      }
    }
  }
    return mat;
}
