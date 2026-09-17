let name = "Oliver";
let age = 20;
let course = "BSCS";
let section = "3B";
let math = 88;
let science = 91;
let english = 85;
let attendance = 95;
let passing = 75;
let year = "2025-2026";

const school = "Nwssu";
const subject1 = "Oop";
const subject2 = "Ge1";
const subject3 = "Software";
const bonus = 2;
const subjectsCount = 3;
const hello = "Hello";
const type = "Regular Student";
const room = "Laboratory 1";
const highest = 100;

const getName = () => `${name} - ${course} ${section}`;
const getAverage = (a, b, c) => (a + b + c) / subjectsCount;
const addBonus = grade => grade + bonus;
const isPassing = grade => grade >= passing;
const sayHello = text => `${hello}, ${name}! ${text}`;

const subjects = [subject1, subject2, subject3];
const grades = [math, science, english];
const student = { name, age, course, section, adviser: { name: "Instructor Sir Yuri Ortiz" } };
const schoolInfo = { school, room, year };

const [firstSubject, secondSubject, thirdSubject] = subjects;
const [firstGrade, secondGrade, thirdGrade] = grades;
const [word1, word2, word3] = ["JavaScript", "is", "easy"];

const { name: studentName, age: studentAge } = student;
const { school: schoolName, room: roomName } = schoolInfo;
const { course: studentCourse, section: studentSection } = student;

const moreSubjects = ["Programming", "Database"];
const allSubjects = [...subjects, ...moreSubjects];
const moreGrades = [92, 89];
const allGrades = [...grades, ...moreGrades];

const contact = { email: "oliveralpez08@gmail.com", city: "Calbayog City" };
const fullStudent = { ...student, ...contact };
const newSchoolInfo = { ...schoolInfo, campus: "Main Campus" };

const newGrades = grades.map(addBonus);
const gradeWords = grades.map(grade => `Grade: ${grade}`);
const passed = grades.filter(isPassing);
const highGrades = allGrades.filter(grade => grade >= 90);

const adviserName = { adviser: student.adviser?.name || "No adviser" };
const studentCity = { city: fullStudent.address?.city || fullStudent.city || "No city" };
const average = getAverage(math, science, english);

console.log(getName());
console.log(sayHello(`Welcome to ${school}.`));
console.log(`Age: ${age}`);
console.log(`Type: ${type}`);
console.log(`Year: ${year}`);
console.log(`Subjects: ${firstSubject}, ${secondSubject}, ${thirdSubject}`);
console.log(`Words: ${word1} ${word2} ${word3}`);
console.log(`Student: ${studentName}, Age: ${studentAge}`);
console.log(`School: ${schoolName}, Room: ${roomName}`);
console.log(`Course: ${studentCourse} ${studentSection}`);
console.log(`Average: ${average}`);
console.log(`Highest grade: ${highest}`);
console.log(`Attendance: ${attendance}%`);
console.log(`Passing grade: ${passing}`);
console.log(`New grades: ${newGrades}`);
console.log(`Grade words: ${gradeWords}`);
console.log(`Passed: ${passed}`);
console.log(`High grades: ${highGrades}`);
console.log(`All subjects: ${allSubjects}`);
console.log(`All grades: ${allGrades}`);
console.log(`Adviser: ${adviserName.adviser}`);
console.log(`City: ${studentCity.city}`);

