"use strict";
/*function addNumbers(x:number, y:number) {
    return x + y;
  }
  console.log(addNumbers(1, 6));
  */
// let x:number;
// let y = 1;
// let z;
let isMale = true;
let user_weight = 77;
let user_name = "CY";
var CurrentStatus;
(function (CurrentStatus) {
    CurrentStatus[CurrentStatus["Working"] = 0] = "Working";
    CurrentStatus[CurrentStatus["Playing"] = 1] = "Playing";
    CurrentStatus[CurrentStatus["Sleeping"] = 2] = "Sleeping";
    CurrentStatus[CurrentStatus["Eating"] = 3] = "Eating";
})(CurrentStatus || (CurrentStatus = {}));
let user_status = CurrentStatus.Playing;
console.log(CurrentStatus[user_status]);
console.log("2333333");
