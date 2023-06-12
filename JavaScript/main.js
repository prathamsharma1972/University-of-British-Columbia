window.onload = (event) => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page);
    let getuser = sessionStorage.getItem("loginDetails");
    if (getuser != null) {
        document.getElementById("LRbtn").innerHTML = "Logout";
        let data = JSON.parse(getuser);
        document.getElementById("username").innerHTML = data.value[0].Name;
    } else { 
        ULbtn.style.display = "none";
    }
}
//logout
function logout(){
    sessionStorage.clear();
    location.reload()
    }



// Blog Page Local Storage
function blog() {
    let blog_nameval = document.getElementById("blog_name");
    let blog_emailval = document.getElementById("blog_email");
    let blog_commentval = document.getElementById("blog_comment");
    let blog_btn = document.getElementById("blog_btn");

    blog_nameval = blog_name.value;
    blog_emailval = blog_email.value;
    blog_commentval = blog_comment.value;
    if (blog_nameval.trim() != 0 && blog_emailval.trim() != 0 && blog_commentval.trim() != 0) {
        let webtask = localStorage.getItem("user_Details");
        if (webtask == null) {
            taskObj = [];
        }
        else {
            taskObj = JSON.parse(webtask);
        }
        taskObj.push({ 'Name': blog_nameval, 'Email': blog_emailval, 'Comment': blog_commentval });
        console.log(taskObj);
        localStorage.setItem("user_Details", JSON.stringify(taskObj));
        blog_name.value = '';
        blog_email.value = '';
        blog_comment.value = '';
    }
    alert("Thank You For Your Response");
}

// Contact Page Local Storage
function contact() {
    let contact_nameval = document.getElementById("contact_name");
    let contact_emailval = document.getElementById("contact_email");
    let contact_subjectval = document.getElementById("contact_subject");
    let contact_messageval = document.getElementById("contact_message");
    let contact_btn = document.getElementById("contact_btn");

    contact_nameval = contact_name.value;
    contact_emailval = contact_email.value;
    contact_subjectval = contact_subject.value;
    contact_messageval = contact_message.value;
    if (contact_nameval.trim() != 0 && contact_emailval.trim() != 0 && contact_subjectval.trim() != 0 && contact_messageval.trim() != 0) {
        let webtask = localStorage.getItem("user_Informations");
        if (webtask == null) {
            taskObj = [];
        }
        else {
            taskObj = JSON.parse(webtask);
        }
        taskObj.push({ 'Name': contact_nameval, 'Email': contact_emailval, 'Subject': contact_subjectval, 'Message': contact_messageval });

        localStorage.setItem("user_Informations", JSON.stringify(taskObj));
        contact_name.value = '';
        contact_email.value = '';
        contact_subject.value = '';
        contact_message.value = '';
    }
    alert("Thank You For Your Response");
}

//Login Page Local Storage
function signup() {
    let signup_nameval = document.getElementById("signup_name");
    let signup_emailval = document.getElementById("signup_email");
    let signup_passwordval = document.getElementById("signup_password");
    let signup_phoneval = document.getElementById("signup_phone");
    let signup_dobval = document.getElementById("signup_dob");
    let signinBtnval = document.getElementById("signinBtn");

    signup_nameval = signup_name.value;
    signup_emailval = signup_email.value;
    signup_passwordval = signup_password.value;
    signup_phoneval = signup_phone.value;
    signup_dobval = signup_dob.value;
    if (signup_nameval.trim() != 0 && signup_emailval.trim() != 0 && signup_passwordval.trim() != 0 && signup_phoneval.trim() != 0 && signup_dobval.trim() != 0) {
        let webtask = localStorage.getItem("signUpDetails");
        if (webtask == null) {
            taskObj = [];
        }
        else {
            taskObj = JSON.parse(webtask);
        }
        taskObj.push({ 'Name': signup_nameval, 'Email': signup_emailval, 'Password': signup_passwordval, 'Phone_Number': signup_phoneval, 'Date_Of_Birth': signup_dobval });

        localStorage.setItem("signUpDetails", JSON.stringify(taskObj));
        signup_name.value = '';
        signup_email.value = '';
        signup_password.value = '';
        signup_phone.value = '';
        signup_dob.value = '';
    }
    alert("Registration Completed");
}

//Login 



function login() {
    let email = document.getElementById("signup_email").value;
    let pass = document.getElementById("signup_password").value;
    let webtask = localStorage.getItem("signUpDetails");
    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
    }

    let loginStatus = false;
    var loginDetail = taskObj.filter(function(ele){
        return ele.Email == email && ele.Password == pass;
    })
    if(loginDetail.length !=0){
        const item ={
            value:loginDetail,
            expiry:new Date().getTime() + 5000,
        }
        sessionStorage.setItem("loginDetails", JSON.stringify(item));
        loginStatus = true;
    }

    notification(loginStatus);
}







function notification(statusFlag) {

    if (statusFlag) {
        alert("Login Success");
        window.location.assign("index.html")
    } else {
        alert("Invalid User.");
    }
}



let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let numberField = document.getElementById("numberField");
let dobField = document.getElementById("dobField");
let title = document.getElementById("title");

function signin() {
    nameField.style.maxHeight = "0";
    dobField.style.maxHeight = "0";
    numberField.style.maxHeight = "0"
    title.innerHTML = "Log In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

function signout() {
    nameField.style.maxHeight = "60px";
    dobField.style.maxHeight = "60px"
    numberField.style.maxHeight = "60px"
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

