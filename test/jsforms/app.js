//JavaScript form validation example
// eslint-disable-next-line no-unused-vars
function validateForm() {
    const name = document.myform.name.value
    const password = document.myform.password.value

    if (!name) {
        alert("Name can't be blank")
        return false
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.")
        return false
    }
}

//JavaScript Retype Password Validation
// eslint-disable-next-line no-unused-vars
function matchPass() {
    const firstPass = document.f1.password1.value
    const secondPass = document.f1.password2.value

    if (firstPass === secondPass && firstPass && secondPass) return true

    alert("password must be same!")
    return false
}

//JavaScript Number Validation
// eslint-disable-next-line no-unused-vars
function validateNumber() {
    let num = document.myform.num.value

    if (!isNaN(num) && num) return true

    document.getElementById("numloc").innerHTML = "Enter Numeric value only"
    return false
}

//JavaScript validation with image
// eslint-disable-next-line no-unused-vars
function validateImage() {
    let name = document.f1.name.value
    let password = document.f1.password.value

    if (name.length < 1) {
        document.getElementById("nameloc").innerHTML = " <img src='unchecked.png'/> Please enter your name"
        return false
    }
    document.getElementById("nameloc").innerHTML = " <img src='checked.png'/>"

    if (password.length < 6) {
        document.getElementById("passwordloc").innerHTML = " <img src='unchecked.png'/> Password must be at least 6 char long"
        return false
    }
    document.getElementById("passwordloc").innerHTML = " <img src='checked.png'/>"

    return true
}

//JavaScript email validation
// eslint-disable-next-line no-unused-vars
function validateEmail() {
    let x = document.myform.email.value;
    let atposition = x.indexOf("@");
    let dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
        return false;
    }
}  