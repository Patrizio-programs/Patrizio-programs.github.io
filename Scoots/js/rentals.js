const URL= " https://patrizio-programs.github.io/Scoots/js/scootsData.json";


fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing

        const Scoots = jsonObject.Scoots;


        let Cname= document.getElementById('Cname');
        Cname.textContent = Scoots[0].name;
        let Price = document.getElementById("Price");
        Price.textContent = "Reservation Price-Full Day: " +Scoots[0].resFull;


        let Cname1= document.getElementById('Cname1');
        Cname1.textContent = Scoots[1].name;
        let Price1 = document.getElementById("Price1");
        Price1.textContent = "Reservation Price-Full Day: " +Scoots[1].resFull;


        let Cname2= document.getElementById('Cname2');
        Cname2.textContent = Scoots[2].name;
        let Price2 = document.getElementById("Price2");
        Price2.textContent = "Reservation Price-Full Day: " +Scoots[2].resFull;



        let Cname3= document.getElementById('Cname3');
        Cname3.textContent = Scoots[3].name;
        let Price3 = document.getElementById("Price3");
        Price3.textContent = "Reservation Price-Full Day: " +Scoots[3].resFull;


        let Cname4= document.getElementById('Cname4');
        Cname4.textContent = Scoots[4].name;
        let Price4 = document.getElementById("Price");
        Price4.textContent = "Reservation Price-Full Day: " +Scoots[4].resFull;


        let Cname5 = document.getElementById('Cname5');
        Cname5.textContent = Scoots[5].name;
        let Price5 = document.getElementById("Price5");
        Price5.textContent = "Reservation Price-Full Day: " +Scoots[5].resFull;





      })


      
function toggleMenu(){
    document.getElementsByClassName("Ham-Menu")[0].classList.toggle("hidden");
}

function subscribe(){
    let username = document.getElementById("name").value;
    let usermail = document.getElementById("email").value;

    alert("Thank you for subscribing " + username+ ". Please check your email at "+ usermail+ ".");

}
