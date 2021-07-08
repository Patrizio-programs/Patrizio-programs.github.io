
const requestURL = 'https://patrizio-programs.github.io/weather/js/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++ )
        {

            let stat = document.createElement('section');
            let h3 = document.createElement('h3');
            h3.textContent = towns[i].name;
            stat.appendChild(h3);
            document.querySelector('div.stats').appendChild(stat);
            let m = document.createElement('p');
            m.textContent = towns[i].motto;
            stat.appendChild(m);
            let yf = document.createElement('p');
            yf.textContent = "Year Founded: " +towns[i].yearFounded;
            stat.appendChild(yf);
            let image= document.createElement('img')
            image.setAttribute('src', towns[i].photo);
            stat.appendChild(image)

        }

    });

