// Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
//The user can specify an unlimited number of alarms using command line arguments

// they can input an array of numbers 
// order ther array from smallest numbet to largest 
// turn them into numbers 
// const spinner = [1,2,3,4];
// const spinner = [1,0,-1,-2,3,4];
// const spinner = [1,2,"3", "4"];
const alarmClock = (numArr) => {
  
  if (!numArr) {
    return null;
  }
  newNumArr = numArr.map((n) => n > 0 );
   for (const num of newNumArr) {
      numOnly = Number(num);
      let delay = numOnly * 1000;
      setTimeout(() => {
        process.stdout.write ('BEEP.. \n');
        // console.log(num) // more control and avoid automatically adding an extra "newline character" at the end each time.
      }, delay) // <= 1s delay to make it noticeable. Can dial it down later.  
    };
    return true;
};
// alarmClock(spinner);

module.exports = alarmClock;
