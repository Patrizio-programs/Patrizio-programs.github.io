const m = new Date();
const day = new Date();
const d = new Date();
const y = new Date();


    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("month").innerHTML = months[m.getMonth()];
    document.getElementById("day").innerHTML = days[day.getDay()];
    document.getElementById("date").innerHTML = d.getDate();
   
    document.getElementById("demo").innerHTML = y.getFullYear();

   


    function showBanner() {

        let key = days[day.getDay()];
            if(key =="Friday") {

                document.getElementById("banner").style.display = "block";
            }
          else{
            document.getElementById("banner").style.display = "none";


          }



    }

    showBanner();


    







    

function toggleMenu(){
    document.getElementsByClassName("Ham-Menu")[0].classList.toggle("hidden");
}




    
