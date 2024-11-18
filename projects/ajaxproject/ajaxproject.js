document.getElementById("checkform").addEventListener("submit", function(event) {
    event.preventDefault();
    const FirstName = document.getElementById("fname").value;
    const LastName = document.getElementById("lname").value;
    const Age = document.getElementById("age").value;
    const pass = document.getElementById("pw").value;
    const cpass = document.getElementById("cpw").value;
    const terms = document.getElementById("terms");
    const address = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("State").value;

   

    if (!FirstName || !LastName)
    {
        alert("Please enter your first and last name.");
        return;
    }
    if (!Age || Age < 18)
    {
        alert('You must be at least 18 years old to sign-up.');
        return;
    }

    if (!pass)
        {
            alert('Please enter a password.');
            return;
        }

    if (!cpass)
        {
            alert('Please confirm your password.');
            return;
        } else if (cpass != pass)
            {
                alert('Your passwords do not match.')
                return;
            }
    
    if (!terms.checked)
        {
            alert('Please agree to the terms and conditions.');
            return;
        }

    if (!address)
        {
            alert('Please enter your street address.');
            return;
        }

    if (!city)
        {
             alert('Please enter your city.');
            return;
        }

    if (state == "" )
        {
            alert('Please enter your state.');
            return;
        }

    const formData = {
        FirstNameirstName: FirstName,
        LastName: LastName,
        Age : Age,
        Password: pass,
        CPassword : cpass,
        Address : address,
        City : city,
        State : state
    }
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "ajax.json", true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            document.getElementById("banner").innerHTML = response.message;
            document.getElementById("checkform").innerHTML = "";
            document.getElementById("checkout").innerHTML = "";
        } else if (xhr.readyState === 4){
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
    
    
});