document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const FirstName = document.getElementById("fname").value;
    const LastName = document.getElementById("lname").value;
    const Age = document.getElementById("age").value;
   
    if (!FirstName || !LastName)
    {
        alert("First name and last name required!");
        return;
    }
    if (!Age || Age < 18)
    {
        alert('You must be 18 years or older to submit this form.');
        return;
    }

    const formData = {
        firstName: FirstName,
        lastName: LastName,
        Age : Age,

    }
    const xhr = new XMLHttpsRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            document.getElementById("banner").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
            document.getElementById("engage").innerHTML = "";
            document.getElementById("questions").innerHTML = "";
        } else if (xhr.readyState === 4){
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
    
});