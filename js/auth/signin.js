const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSingin = document.getElementById("btnSignin");

btnSingin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // basé actuellement sur des informations factices
    // il faudra appelé un API pour vérification des informations de connexion

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        // il faudra récupérer le vrai token
        const token="sznsgmldjfhmlsejrhsdfjhsmdfjh";
        setToken(token);
        // placer ce token en cookie pour le récupérer sur les autres pages        

        setCookie(RoleCookieName, "client", 7);
        window.location.replace("/");
    }
    else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}