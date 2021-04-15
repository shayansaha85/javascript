var marksOfStudents = {
    student1 : {   
        math: 89,
        english: 79,
        science: 84
    },
    student2 : {
        math: 78,
        english: 88,
        science: 56
    }, 
    student3 : {
        math: 97,
        english: 72,
        science: 86
    },
};


// calling specific value

// for example if I want marks of science of student2
var marksOfScience_ofStudent2 = marksOfStudents["student2"]["science"];
console.log("Student2 got " + marksOfScience_ofStudent2 + " in Science");