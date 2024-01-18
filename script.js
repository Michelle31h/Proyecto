const btnsignin = document.getElementById("sign-in"),
            btnsignup = document.getElementById("sign-up"),
            formregister = document.querySelector(".register"),
            formlogin = document.querySelector(".login");

        btnsignin.addEventListener("click", e => {
            formregister.classList.add("hide");
            formlogin.classList.remove("hide");
        });

        btnsignup.addEventListener("click", e => {
            formlogin.classList.add("hide");
            formregister.classList.remove("hide");
        });
