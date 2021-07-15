
const day = new Date();
const d = new Date();
const y = new Date();
const m = new Date();
    let today;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayz = [0,1,2,3,4,5,6];

    document.getElementById("month").innerHTML = months[m.getMonth()];
    document.getElementById("day").innerHTML = days[day.getDay()];
    document.getElementById("date").innerHTML = d.getDate();
    let currentDay =0;
   
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
toggleMenu();


const URL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=030378f61a43abab68b5af20fad45320';


fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing

        const list = jsonObject.list;


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

        var control = 0;
        

        for(let i=0; i < list.length; i++){
            


            if(list[i].dt_txt.includes("18:00:00") && (control == 0)) {

                

                let icon0 = document.getElementById('icon0');
                let icon = document.createElement('img');
                icon.setAttribute('src', 'http://openweathermap.org/img/w/' + list[i].weather[0].icon + '.png');
                icon0.appendChild(icon);

                let idescription0 = document.getElementById('idescription0');
                idescription0.textContent = (list[i].weather[0].main);

                let itemp0 = document.getElementById('itemp0');
                itemp0.textContent =  ('Temp: ' +list[i].main.temp.toFixed(0) + ' F°' );

            

            }

                if(list[i].dt_txt.includes("18:00:00") && (control == 1)) {

                    let icon1 =document.getElementById('icon1');
                    let icon =  document.createElement('img');
                    icon.setAttribute('src', 'http://openweathermap.org/img/w/' + list[i].weather[0].icon + '.png');
                    icon1.appendChild(icon);
             
                    
                    let idescription1 = document.getElementById('idescription1');
                    idescription1.textContent = (list[i].weather[0].main);

                    let itemp1 = document.getElementById('itemp1');
                    itemp1.textContent =  ('Temp: ' +list[i].main.temp.toFixed(0) + ' F°' );

                          

                }


                if(list[i].dt_txt.includes("18:00:00") && (control == 2)) {

                    let icon2 =document.getElementById('icon2');
                    let icon =  document.createElement('img');
                    icon.setAttribute('src', 'http://openweathermap.org/img/w/' + list[i].weather[0].icon + '.png');
                    icon2.appendChild(icon);
                   
   
                    
                    
                    let idescription2 = document.getElementById('idescription2');
                    idescription2.textContent = (list[i].weather[0].main);

                    let itemp2 = document.getElementById('itemp2');
                    itemp2.textContent =  ('Temp: ' + list[i].main.temp.toFixed(0) + ' F°' );

        
                }


                if(list[i].dt_txt.includes("18:00:00") && (control == 3)) {

                    let icon3 =document.getElementById('icon3');
                    let icon =  document.createElement('img');
                    icon.setAttribute('src', 'http://openweathermap.org/img/w/' + list[i].weather[0].icon + '.png');
                    icon3.appendChild(icon);
                    

                    let idescription3 = document.getElementById('idescription3');
                    idescription3.textContent = (list[i].weather[0].main);

                    let itemp3 = document.getElementById('itemp3');
                    itemp3.textContent =  ('Temp: ' +list[i].main.temp.toFixed(0) + ' F°' );
                    
                    
        
                }

                if(list[i].dt_txt.includes("18:00:00") && (control == 4)) {

                    let icon4 = document.getElementById('icon4');
                    let icon =  document.createElement('img');
                    icon.setAttribute('src', 'http://openweathermap.org/img/w/' + list[i].weather[0].icon + '.png');
                    icon4.appendChild(icon);
                    
                    let idescription4 = document.getElementById('idescription4');
                    idescription4.textContent = (list[i].weather[0].main);

                    let itemp4 = document.getElementById('itemp4');
                    itemp4.textContent =  ('Temp: ' +list[i].main.temp.toFixed(0) + ' F°' );

            

        
                }

                if (list[i].dt_txt.includes("18:00:00")){

                    control = control + 1;


                }
                else {
                    control = control + 0;
                }
                
        

            
        }

        let iday = document.getElementById('iday0');
        let currentDay = dayz[day.getDay()];
        if (currentDay == 6) {
            currentDay = currentDay-6;

        }
        else{
            currentDay = currentDay+1;

        }
        
        
        iday.innerHTML = days[currentDay];



        iday = document.getElementById('iday1');
    
        if (currentDay == 6) {
            currentDay = currentDay-6;

        }
        else{
            currentDay = currentDay+1;

        }
        
        iday.innerHTML = days[currentDay];



        iday = document.getElementById('iday2');
        
        if (currentDay == 6) {
            currentDay = currentDay-6;

        }
        else{
            currentDay = currentDay+1;

        }
        
      
        iday.innerHTML = days[currentDay];

        

        iday = document.getElementById('iday3');
       
        if (currentDay == 6) {
            currentDay = currentDay-6;

        }
        else{
            currentDay = currentDay+1;

        }
    
        iday.innerHTML = days[currentDay];


        iday = document.getElementById('iday4');
        
        if (currentDay == 6) {
            currentDay = currentDay-6;

        }
        else{
            currentDay = currentDay+1;

        }
        

        iday.innerHTML = days[currentDay];

    
      });



      const link = 'https://patrizio-programs.github.io/weather/js/towndata.json';

      fetch(link)
            .then(function (response) {
              return response.json();
            })
            .then(function (jsonObject) {
              console.table(jsonObject);  // temporary checking for valid response and data parsing
      
              const towns = jsonObject['towns'];

                let container = document.getElementById('event-box');
                let eventHead = document.createElement('h3');
                eventHead.textContent = 'Preston Town Events'
                container.appendChild(eventHead);
                let eventList = document.createElement('p');
                eventList.textContent = towns[6].events[0];
                container.appendChild(eventList);
                let eventList1 = document.createElement('p');
                eventList1.textContent = towns[6].events[1];
                container.appendChild(eventList1);
                let eventList2 = document.createElement('p');
                eventList2.textContent = towns[3].events[2];
                container.appendChild(eventList2);

            })


