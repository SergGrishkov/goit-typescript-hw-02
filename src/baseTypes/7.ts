/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfWeek {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}

function isWeekend(day: DaysOfWeek): boolean {
 return day === DaysOfWeek.Sunday || day === DaysOfWeek.Saturday ? true : false;
}

console.log(isWeekend(DaysOfWeek.Friday));
