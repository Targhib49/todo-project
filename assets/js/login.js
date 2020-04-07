const userLogin = document.getElementById("userLogin");

let get = () => {
    if (localStorage.userData) {
        return JSON.parse(localStorage.userData);
    } else {
        localStorage.userData = "[]";
        return [];
    }
};

let loginUser = (event) => {
    event.preventDefault();
    const userData = get();
    let loginSuccess = false;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].email == email && userData[i].password == password) {
            let name = userData[i].name
            let userLogin = {
                name,
                email,
                password,
            };

            localStorage.setItem("isLogin", true);
            localStorage.setItem("userLogin", JSON.stringify(userLogin));
            loginSuccess = true;  
        } 
    }
    
    if (loginSuccess) {
        alert("Anda berhasil login");
        window.location.href = `${window.origin}/index.html`;
    } else {
        alert("email atau password salah");
    }
};

userLogin.addEventListener("submit", loginUser);