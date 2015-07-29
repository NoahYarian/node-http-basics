
module.exports = function(calURL) {
  var argArr = calURL.split('/');
  var argNum = argArr.length - 2;
  if (argNum === 0) {
    return "../node-cal/app.js";
  } else if (argNum === 1) {
    return "../node-cal/app.js " + argArr[2];
  } else if (argNum === 2) {
    if (argArr[2] > 0 &&
        argArr[2] < 13 &&
        argArr[2] % 1 === 0) {
      return "../node-cal/app.js " + argArr[2] + ' ' + argArr[3];
    } else if (argArr[3] > 0 &&
               argArr[3] < 13 &&
               argArr[3] % 1 === 0) {
      return "../node-cal/app.js " + argArr[3] + ' ' + argArr[2];
    }
  }
  return "../node-cal/app.js";
}
