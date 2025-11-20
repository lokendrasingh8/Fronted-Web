function getData() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("Email:", email, "Password:", password);
    // alert("Email: " + email + "\nPassword: " + password);


    let emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let passwordpattern = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,15}$/;
    if(email=="" || password==""){
        alert("Fields cannot be empty");
        
    }else if (!email.includes("@")){
        alert("Invalid email format");
        
    }
    else if(!email.match(emailpattern)){
        alert("Invalid email format");
        
    }
    else if(!password.match(passwordpattern)){
        alert("Password must be 7-15 characters long and include at least one numeric digit and a special character");
        
    }
    else{
        alert("Login successful");
        alert("Email:" +email + " Password:" +password);
    }
    function Login(email,password){
        const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = function () {
console.log("Response:", JSON.parse(xhr.responseText));
};
const body = {
title: "New Post",
body: "Hello",
userId: 1
};
xhr.send(JSON.stringify(body));
    }

}