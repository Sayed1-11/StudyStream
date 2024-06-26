const handleRegistration = (event)=>{
    event.preventDefault();
    const username = get_value("username");
    const first_name = get_value("first_name");
    const last_name = get_value("last_name");
    const email = get_value("email");
    const password = get_value("password");
    const confirm_password = get_value("confirm_password");
    const info = {username,first_name,last_name,email,password,confirm_password};
    if (password === confirm_password){
        document.getElementById("error").innerText = "";
        if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)){
            fetch("https://online-school-igar.onrender.com/register/",{method: "POST",
            headers : {"content-type":"application/json"},
            body :JSON.stringify(info)
        
        })
        .then(res=>res.json())
        .then((data)=> console.log(data))
        window.location.href = "login.html"; 
        }
        else{
            document.getElementById("error").innerText = "password contains minimum eight characters, at least one letter,one number and one special character";
        }
    }
    else{
        document.getElementById("error").innerText = "Password and confirm password do not match";
        alert("Password and confirm password do not match")
    }
}


const handleLogin = (event)=>{
    event.preventDefault();
    
    const username = get_value("login_username");
    const password = get_value("login_password");
    if((username,password)){
        fetch("https://online-school-igar.onrender.com/login/",{
            method: "POST",
            headers : {"content-type":"application/json"},
            body :JSON.stringify({username,password})
        })
        .then(res=>res.json())
        .then((data)=> {console.log(data);
            if(data.token && data.user_id){
                localStorage.setItem("token",data.token);
                localStorage.setItem("user_id",data.user_id);
                window.location.href = "index.html";

            }

       
    });
    }
   
   
}


const get_value = (id) => {
const value = document.getElementById(id).value;
return value;
}
