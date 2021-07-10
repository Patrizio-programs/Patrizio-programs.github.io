const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=030378f61a43abab68b5af20fad45320';


fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing

        const list = jsonObject['list'];


        let cTemp = document.getElementById('current-temp');
        cTemp.textContent = list[0].main.temp;
        let iconBox = document.getElementById('imagesrc');
        icon = document.createElement('img');
        icon.setAttribute('src', 'http://openweathermap.org/img/w/' + list[0].weather[0].icon + '.png');
        iconBox.appendChild(icon);

      })