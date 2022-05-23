
        let weather = {

            apiKey: "7b1cd7bdccf75232d10eeda34a6931c6",
            
            fetchWeather: function (city) {
            
                fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" +this.apiKey)
                .then((response) => response.json())
                .then((data) => this.displayWeather(data));
            },
            
            displayWeather: function (data) {
            
                const {name} = data;
                const { icon, description} = data.weather[0];
                const { temp, humidity} = data.main;
                const {speed} = data.wind;
            
                document.querySelector(".city").innerText = "Weather in "+ name;
                document.querySelector(".temp").innerText = temp +"°C";
                document.querySelector(".description").innerText = description;
                document.querySelector(".humidity").innerText = "Humidity: " +humidity + "%";
                document.querySelector(".wind").innerText = "Wind Speed: " +speed + "km/h";
                document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon+ ".png";
            
               
            
            },
            search: function () {
          this.fetchWeather(document.querySelector(".searchBar").value);
        },
            };
            
      
           
            
      
            document.querySelector(".search button").addEventListener("click", function () {
            weather.search();
      });
         
      
      
      
            
       
            document
            .querySelector(".searchBar")
            .addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
              weather.search();
            };
            });
       
            
            weather.fetchWeather("Kingston");

