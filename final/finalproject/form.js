document.getElementById("checkform").addEventListener("submit", function (event){
    event.preventDefault();
    const FirstName = document.getElementById("fname").value;
    const LastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if(!FirstName || !LastName)
    {
        alert("Please enter your first and last name.");
        return;
    }
    if(!email)
    {
        alert("Please enter your email address.");
        return;
    }
    if(!subject)
    {
        alert("Please enter a subject.");
        return;
    }
    if(!message)
    {
        alert("Please enter a message.");
        return;
    }

    const formdata = {
        FirstName: FirstName,
        LastName: LastName,
        email: email,
        subject: subject,
        message: message
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "form.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            document.getElementById("success-message").innerHTML = response.message;
            document.getElementById("form-caption").innerHTML = "";
            document.getElementById("form-container").innerHTML = "";
        }else if (xhr.readyState === 4){
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formdata));
    console.log(formdata);
});