const dayz = [0,1,2,3,4,5,6];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay =0;
const day = new Date();





const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=030378f61a43abab68b5af20fad45320';


fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing

        const list = jsonObject.list;

        var control = 0;




        for(let i=0; i < list.length; i++){
            


            if(list[i].dt_txt.includes("12:00:00") && (control == 0)) {

                

                let icon0 = document.getElementById('icon0');
                let icon = document.createElement('img');
                icon.setAttribute('src', 'http://openweathermap.org/img/w/' + list[i].weather[0].icon + '.png');
                icon0.appendChild(icon);

                let idescription0 = document.getElementById('idescription0');
                idescription0.textContent = (list[i].weather[0].main);

                let itemp0 = document.getElementById('itemp0');
                itemp0.textContent =  ('Temp: ' +list[i].main.temp.toFixed(0) + ' F°' );

            

            }

                if(list[i].dt_txt.includes("12:00:00") && (control == 1)) {

                    let icon1 =document.getElementById('icon1');
                    let icon =  document.createElement('img');
                    icon.setAttribute('src', 'http://openweathermap.org/img/w/' + list[i].weather[0].icon + '.png');
                    icon1.appendChild(icon);
             
                    
                    let idescription1 = document.getElementById('idescription1');
                    idescription1.textContent = (list[i].weather[0].main);

                    let itemp1 = document.getElementById('itemp1');
                    itemp1.textContent =  ('Temp: ' +list[i].main.temp.toFixed(0) + ' F°' );

                          

                }


                if(list[i].dt_txt.includes("12:00:00") && (control == 2)) {

                    let icon2 =document.getElementById('icon2');
                    let icon =  document.createElement('img');
                    icon.setAttribute('src', 'http://openweathermap.org/img/w/' + list[i].weather[0].icon + '.png');
                    icon2.appendChild(icon);
                   
   
                    
                    
                    let idescription2 = document.getElementById('idescription2');
                    idescription2.textContent = (list[i].weather[0].main);

                    let itemp2 = document.getElementById('itemp2');
                    itemp2.textContent =  ('Temp: ' + list[i].main.temp.toFixed(0) + ' F°' );

        
                }


                if(list[i].dt_txt.includes("12:00:00") && (control == 3)) {

                    let icon3 =document.getElementById('icon3');
                    let icon =  document.createElement('img');
                    icon.setAttribute('src', 'http://openweathermap.org/img/w/' + list[i].weather[0].icon + '.png');
                    icon3.appendChild(icon);
                    

                    let idescription3 = document.getElementById('idescription3');
                    idescription3.textContent = (list[i].weather[0].main);

                    let itemp3 = document.getElementById('itemp3');
                    itemp3.textContent =  ('Temp: ' +list[i].main.temp.toFixed(0) + ' F°' );
                    
                    
        
                }

                if(list[i].dt_txt.includes("12:00:00") && (control == 4)) {

                    let icon4 = document.getElementById('icon4');
                    let icon =  document.createElement('img');
                    icon.setAttribute('src', 'http://openweathermap.org/img/w/' + list[i].weather[0].icon + '.png');
                    icon4.appendChild(icon);
                    
                    let idescription4 = document.getElementById('idescription4');
                    idescription4.textContent = (list[i].weather[0].main);

                    let itemp4 = document.getElementById('itemp4');
                    itemp4.textContent =  ('Temp: ' +list[i].main.temp.toFixed(0) + ' F°' );

            

        
                }

                if (list[i].dt_txt.includes("12:00:00")){

                    control = control + 1;


                }
                else {
                    control = control + 0;
                }
                
        

            
        }




    });




    
    let iday = document.getElementById('iday0');
    currentDay = dayz[day.getDay()];
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

























function toggleMenu(){
    document.getElementsByClassName("Ham-Menu")[0].classList.toggle("hidden");
}

function subscribe(){
    let username = document.getElementById("name").value;
    let usermail = document.getElementById("email").value;

    alert("Thank you for subscribing " + username+ ". Please check your email at "+ usermail+ ".");

}


let a = "https://patrizio-programs.github.io/Scoots/images/PCX.jpg";
let b = "https://patrizio-programs.github.io/Scoots/images/metroScooter.jpg";
let c = "https://patrizio-programs.github.io/Scoots/images/DioScooter.jpg";

let images= [a,b,c];
