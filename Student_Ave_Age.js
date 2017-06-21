var classrooms = [{
    teacher: {
      name: "John Keating",
      subject: "Literature",
      age: 57
    },
    students: [{
      name: "John",
      age: 32
    },
    {
      name: "Suzy",
      age: 29
    },
    {
      name: "Jill",
      age: 44
    },
    {
      name: "Joe",
      age: 20
    }]
  },{
    teacher: {
      name: "Lillian Beauregard",
      subject: "Math",
      age: 74
    },
    students: [{
      name: "Johnny",
      age: 14
    },
    {
      name: "Suzie",
      age: 18
    },
    {
      name: "Jo",
      age: 22
    }]
  },{
    teacher: {
      name: "Mr. Schmidt",
      subject: "Literature",
      age: 50
    },
    students: [{
      name: "Bob",
      age: 32
    },
    {
      name: "George",
      age: 46
    }]
  }]

function studentAveAge(myObject){
var arrAges = [];
var numberAve = 0;
var average = 0;

 for (var i=0; i<myObject.length; i++){
     for (var key in myObject[i]["students"]){
        arrAges.push(myObject[i]["students"][key]["age"]);
     }
 }
    for (var i=0; i<arrAges.length; i++){
      numberAve += arrAges[i];
    }
    average = numberAve/arrAges.length;
    return(Math.round(average));
 }

  studentAveAge(classrooms); 
