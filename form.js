let students = [] //Array multiple item ko save kar skty hn ;
// console.log(students);
// students.push("Wasim");
// students.push("zunaira");
// students.push("samreen");
// students.push("amina");
// students.push("noor");
//document.getElementById("update").style.display = 'none';
let currentIndex;
console.log(students);
console.log("length",students.length)
console.log("last index",students.length - 1);
let obj = {
    username:"wasim",
    password:"123",
    email:"",
    isMale:true,
    age:23,
    hobbies:["criket","hockey"],
    resultReport:{year:2020,total:300,obtained:233,status:"Pass"}

}; // key:value ka pair ata h 
function submitForm() {
    // Get the form element
    var form = document.getElementById("myForm");
    console.log( document.getElementById("username"))
    // Get the values of input fields
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let userclass = document.getElementById("class").value;
    let email = document.getElementById("email").value;
    let chckBox = document.getElementById("chckBox").checked;
    const newLocal = {
        username: username,
        password: password,
        userclass: userclass,
        email: email,
        checked: chckBox
    };
    let userObj = newLocal;
    console.log(userObj);
    students.push(userObj);
    console.log(students);

    // Log values to the console
    // console.log("Username:", username);
    // console.log("Password:", password);
    // console.log("userclass:", userclass);
    // console.log("email:", email);
    // console.log("chckBox:", chckBox);


    const tableBody = document.getElementById('userTableBody');

    const row = document.createElement('tr');

    const nameCell = document.createElement("td");
    nameCell.textContent = username;
    row.appendChild(nameCell);
  
    const classCell = document.createElement("td");
    classCell.textContent = userclass;
    row.appendChild(classCell);


    const emailCell = document.createElement("td");
    emailCell.textContent = email;
    row.appendChild(emailCell);

    

    const passwordCell = document.createElement("td");
    passwordCell.textContent = password;
    row.appendChild(passwordCell);
    
    const actionCell = document.createElement("td");
    actionCell.innerHTML = `<button class="btn btn-primary" onclick="testBtn(${students.length - 1})">Update</button> <button class="btn btn-primary" onclick="deleteRow(this)">Delete</button>`
    row.appendChild(actionCell)
    row.setAttribute('class','table-info')

    tableBody.appendChild(row);
    form.reset();

}

function createTable(){
    const tableBody = document.getElementById('userTableBody');

    const row = document.createElement('tr');

    const nameCell = document.createElement("td");
    nameCell.textContent = username;
    row.appendChild(nameCell);
  
    const classCell = document.createElement("td");
    classCell.textContent = userclass;
    row.appendChild(classCell);


    const emailCell = document.createElement("td");
    emailCell.textContent = email;
    row.appendChild(emailCell);

    

    const passwordCell = document.createElement("td");
    passwordCell.textContent = password;
    row.appendChild(passwordCell);
    
    const actionCell = document.createElement("td");
    actionCell.innerHTML = `<button class="btn btn-primary" onclick="testBtn(${students.length - 1})">Update</button> <button class="btn btn-primary" onclick="deleteRow(this)">Delete</button>`
    row.appendChild(actionCell)
    row.setAttribute('class','table-info')

    tableBody.appendChild(row);
}

function testBtn(index){
    currentIndex = index;
    console.log("Yes button is working.......",index)
    let formData = students[index];
    console.log(formData);

    // Populate the form fields with the retrieved data
    document.getElementById("username").value = formData.username;
    document.getElementById("password").value = formData.password;
    document.getElementById("class").value = formData.userclass;
    document.getElementById("email").value = formData.email;
    document.getElementById("chckBox").checked = formData.chckBox;
    document.getElementById("update").style.display = 'block'
    document.getElementById("submit").style.display = 'none'

}
function deleteRow(button){
    var row = button.parentNode.parentNode;
    // Remove the row from the table
    row.parentNode.removeChild(row);
}
function updateForm(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let userclass = document.getElementById("class").value;
    let email = document.getElementById("email").value;
    let chckBox = document.getElementById("chckBox").checked;
    const newLocal = {
        username: username,
        password: password,
        userclass: userclass,
        email: email,
        checked: chckBox
    };
    students[currentIndex] =  newLocal;
    console.log(students)
}
//for html ref
//onclick="testBtn()"


//control structure

let num = 9 ;

let num3 = 8 ;
console.log(num > num3);
if(5 == '5'){
    console.log("Condition is true")
}else{
    console.log("Condition is false")
}

let requiredMarks = 780;
let obtainedMarks = 768;

if(!7 > 6){
    console.log("2nd Condition is true")
}else{
    console.log("2nd condition is false")
}

if(obtainedMarks >= requiredMarks){
    console.log("Scholorship is 70per")
}else if(obtainedMarks >=700 && obtainedMarks < requiredMarks){   
    console.log("Scholorship is 60per")

}else{
    console.log("Scholorship is 20per")
}

let num4 = 4;

if(num4){
    console.log("yes num4 is initialized")
}else{
    console.log("Num4 is undefined")
}

let arr = ["areeba","samreen","noor","sidra"];// string , numbers, boolean ,objects 
let ar1 = [{name:"arreba"},{name:"sidra"},{name:"noor"}]
console.log(arr[6]);

if(arr[6]){
    console.log("ITEM ON INDEX IS ",arr[6])
}else{
    console.log("Sorry index not found")
}

for(let a of arr){
    console.log(a);
}
for(let a of ar1){
    console.log("item of array",a);
}
for(let i = 0 ; i < 5 ; i++){
    console.log("Value of i is ==> ",i)
    if(i == 4){
        console.log("Yes now value is 4")
        for(let j = 0 ; j < i;j++){
            console.log("value of j is ==>",j)
        }
    }
}

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}