let students = [] //Array multiple item ko save kar skty hn ;
// console.log(students);
// students.push("Wasim");
// students.push("zunaira");
// students.push("samreen");
// students.push("amina");
// students.push("noor");

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
    students.puhs(userObj);
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
    console.log("Yes button is working.......",index)
    let formData = students[index];
    console.log(formData);

    // Populate the form fields with the retrieved data
    document.getElementById("username").value = formData.username;
    document.getElementById("password").value = formData.password;
    document.getElementById("class").value = formData.userclass;
    document.getElementById("email").value = formData.email;
    document.getElementById("chckBox").checked = formData.chckBox;
}
function deleteRow(button){
    var row = button.parentNode.parentNode;
    // Remove the row from the table
    row.parentNode.removeChild(row);
}
//for html ref
//onclick="testBtn()"


