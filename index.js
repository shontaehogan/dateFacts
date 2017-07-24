const chalk = require("chalk");
const moment = require("moment");

console.log(chalk.red("This should be red"));



// current time
let now = moment().format("dddd, MMMM Do YYYY, HH:mm:ss a")

// day of the year
let dayOfYear = moment().format("DDDD")

// seconds into the day
let secOfDay = moment().format("SSSS")
let current = moment()
let endOfDay = moment().startOf("day")

// daylight savings time
let dst = moment().isDST()

// leap year
let leapYear = moment().isLeapYear()


console.log(`It is the ${chalk.blue.bold(now)}`);
console.log(`It is the ${chalk.rgb(172, 116, 156).bold(dayOfYear) + chalk.rgb(172, 116, 156).bold('th')} day of the year.`);
console.log(`It is ${chalk.rgb(114, 181, 170).bold(parseInt((current - endOfDay) / 1000))} seconds into the day`);


if (dst === true) {
    console.log(`It ${chalk.rgb(142, 168, 99).bold('is')} during Daylight Savings Time`);
} else {
    console.log(`It ${chalk.rgb(174, 63, 68).bold('is not')} during Daylight Savings Time`);
}
if (leapYear === true) {
    console.log(`It ${chalk.rgb(142, 168, 99).bold('is')} a leap year.`);
} else {
    console.log(`It ${chalk.rgb(174, 63, 68).bold('is not')} a leap year.`);
}
