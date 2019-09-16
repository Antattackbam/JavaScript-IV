// CODE here for your Lambda Classes
class Person{
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(attrs){
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject){
        return `${student} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listSubjects(){
        return `My favorite subjects are ${this.favSubjects[0]} and ${this.favSubjects[1]}!`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

const Student1 = new Student({
    name: "Jason",
    age: 24,
    location: "Texas",
    previousBackground: "none",
    className: "Full Stack Web Development",
    favSubjects: ["Javascript", "React"]

})

const Student2 = new Student({
    name: "Billy Bob",
    age: 60,
    location: "Oklahoma",
    previousBackground: "Computer Science",
    className: "Javascript",
    favSubjects: ["CSS", "HTML"]

})

const Ins1 = new Instructor({
    name : "Robert",
    age : 45,
    location: "Hawaii",
    specialty: "Arrays",
    favLanguage: "Javascript",
    catchPhrase: "Boom Baby"
});

const Ins2 = new Instructor({
    name : "Delilah",
    age : 27,
    location: "Nebraska",
    specialty: "Objects",
    favLanguage: "React",
    catchPhrase: "Mind blown!"
});

const PM1 = new ProjectManager({
    name : "Jessica",
    age : 47,
    location: "Mars",
    specialty: "debugging",
    favLanguage: "C+",
    catchPhrase: "Let's get it!",
    gradClassName: "WEB6",
    favInstructor: "Billy Bean"
});

const PM2 = new ProjectManager({
    name : "Randy Baby",
    age : 31,
    location: "Venus",
    specialty: "Not sure",
    favLanguage: "Python",
    catchPhrase: "Another one!",
    gradClassName: "CS4",
    favInstructor: "Marsha Marsha Marsha"
})

console.log(Ins1.age);
console.log(Ins1.demo("JS arrays!"));
console.log(Ins2.name);
console.log(Ins2.grade(Student1.name, "Objects!"));
console.log(Student1.listSubjects());
console.log(Student1.PRAssignment("react"));
console.log(Student2.listSubjects());
console.log(Student2.PRAssignment("Javascript II"));
console.log(PM1.standUp("Web 7"));
console.log(PM1.debugsCode(Student2.name, "Javascript"));
console.log(PM2.standUp("CS 8"));
console.log(PM2.debugsCode(Student1.name, "React"));