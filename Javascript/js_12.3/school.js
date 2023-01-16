"use strict";

const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson: function (type, id) {
    return this[type].filter((element) => {
      return element.id === id;
    });
  },
  assignStudent: function (id, subject) {
    const availableTeacher = this.teachers.find((teacher) => {
      return teacher.subjects.includes(subject) && teacher.capacityLeft > 0;
    });
    if (availableTeacher) {
      availableTeacher.students.push(id);
      availableTeacher.capacityLeft--;
    } else {
      console.log("Sorry, no available teachers left");
    }
  },
  assignTeachersSubject: function (id, subject) {
    const teacher = this.teachers.find((teacher) => {
      return teacher.id === id;
    });
    if (teacher && !teacher.subjects.includes(subject)) {
      teacher.subjects.push(subject);
    }
  },
  printSchool: function () {
    console.table(this.teachers);
    console.table(this.students);
  },
};

console.log(school.findPerson("students", 10));
console.log(school.assignStudent(13, "history"));
console.log(school.assignTeachersSubject(2, "Hebrew"));
school.printSchool();
