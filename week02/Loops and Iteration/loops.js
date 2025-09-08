const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

studentReport.forEach((item) => {
    if (item < LIMIT) {
        console.log(item);
    }
});

for(let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

const Days = 6;
const today = new Date();
for (let i = 0; i < Days; i++) {
    today.setDate(today.getDate() + 1);
    let todaystring = new Intl.DateTimeFormat('en-US', {weekday: "long"}).format(today);
    console.log(todaystring);
}