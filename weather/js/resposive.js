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

    function windchill(){

        var tempC = document.getElementById("tempC").innerHTML;
        var speed = document.getElementById("speed").innerHTML;
        var result;
        var tempF;
        tempC = parseFloat(tempC);
        speed = parseFloat(speed);

        tempF = tempC * 1.8 + 32;

        result = 35.74 + 0.6215 * tempF - 35.75 * speed **0.16 + 0.4275 * tempF * speed **0.16;
        document.getElementById('windchill').innerHTML = result.toFixed(2) + " °F";
    

    }
    windchill();



function toggleMenu(){
    document.getElementsByClassName("Ham-Menu")[0].classList.toggle("hidden");
}
