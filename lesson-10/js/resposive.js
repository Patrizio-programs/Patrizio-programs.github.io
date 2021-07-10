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


    today= document.getElementById('wday');
    today.innerHTML= days[day.getDay()];

   


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


const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=030378f61a43abab68b5af20fad45320';


fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing

        const list = jsonObject['list'];


        let cTemp = document.getElementById('tempF');
        cTemp.textContent = list[0].main.temp.toFixed(0);
        let Desc = document.getElementById('description');
        Desc.textContent = ('Currently: ' + list[0].weather[0].main);
        let HuM = document.getElementById('hum');
        HuM.textContent = (' ' + list[0].main.humidity);
        let wspeed = document.getElementById('speed');
        wspeed.textContent = list[0].wind.speed;   
        
        var tempF = document.getElementById("tempF").innerHTML;
        var speed = document.getElementById("speed").innerHTML;
        var result;

        tempF = parseFloat(tempF);
        speed = parseFloat(speed);

        result = 35.74 + 0.6215 * tempF - 35.75 * speed **0.16 + 0.4275 * tempF * speed **0.16;
        document.getElementById('windchill').innerHTML = result.toFixed(2) + " °F";
    
      })


