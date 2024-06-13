
// 1) Create a School class and create a student , faculty and peon method and student name email contact print same as faculty and peon using class & object.

let s1name = document.getElementById('student-details');
let f1name = document.getElementById('faculty-details');
let p1name = document.getElementById('peon-details');

class School {
    constructor(name,email,contact){
        this.name = name;
        this.email = email;
        this.contact = contact;
    }
    printDetails() {
        return `Name : ${this.name} </br> Email: ${this.email} </br> Contact: ${this.contact}`;
    }
    printDetailsToHTML(elementId) {
        document.getElementById(elementId).innerHTML = this.printDetails();
    }
}

class Student extends School {
    constructor(name, email, contact) {
        super(name, email, contact);
    }
}
class Faculty extends School {
    constructor(name, email, contact) {
        super(name, email, contact);
    }
}

let student = new Student("priya", "piya87@gmail.com", "8849094711");
student.printDetailsToHTML('student-details');


// 2. Create a Person class and with argument create a Father and Child method father age of 60 and child age of 20 print with argument.
let fname =document.getElementById('f_name');
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    father(){
        console.log("Father Name : " , this.name);
        console.log("Father Age : " , this.age);
        fname.innerHTML += (`Father Name : ${this.name} </br> Father Age : ${this.age} </br>`);
    }
    child(){
        console.log("Child Name : " , this.name);
        console.log("Child Age : " , this.age);
        fname.innerHTML += (`Child Name : ${this.name} </br> Child Age : ${this.age} </br>`);
    }
}

let p_1 = new Person("harshit",60);
p_1.father();
let p_2 = new Person("krunal",20);
p_2.child();

// 3) Employee class create a constructor called print a simple message.

let emp_name = document.getElementById('emp_name');
class Employee {
    constructor(name){
        this.name = name;
    }

    print(){
        console.log("Employee Name : " , this.name);
        emp_name.innerHTML += (`Employee Name : ${this.name} </br>`);
    }
}

let e1 = new Employee("harshit");
e1.print();
// Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle area (width*height) using with argument

let circle_area = document.getElementById('circle_area');
let rectangle_area = document.getElementById('rectangle_area');
class Shape {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    circle(){
        console.log("Circle Area : " , 3.14*this.width*this.height);
        circle_area.innerHTML += (`Circle Area : ${3.14*this.width*this.height} </br>`);
    }

    rectangle(){
        console.log("Rectangle Area : " , this.width*this.height);
        rectangle_area.innerHTML += (`Rectangle Area : ${this.width*this.height} </br>`);
    }
}

let shape = new Shape(10,20);
shape.circle();
shape.rectangle();
