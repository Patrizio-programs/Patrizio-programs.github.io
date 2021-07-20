function toggleMenu(){
    document.getElementsByClassName("Ham-Menu")[0].classList.toggle("hidden");
}

function subscribe(){
    let username = document.getElementById("name").value;
    let usermail = document.getElementById("email").value;

    alert("Thank you for subscribing " + username+ ". Please check your email at "+ usermail+ ".");

}
