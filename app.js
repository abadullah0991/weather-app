// const container = document.querySelector('.container');
// const search = document.querySelector('.search-box button');
// const weatherBox = document.querySelector('.weather-box');
// const weatherDetails = document.querySelector('.weather-details');

// search.addEventListener('click', () => { 

//     const APIKey = '71ebad4d73b6c7bbaba0a8e75671ce01';
//     const city = document.querySelector('.search-box input').Value; 

//     if (city == '')
//     return;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
//     .then(response => response.json())
//     .then(json => {   
//     //       if(json.cod =='404'){
//     //     container.style.height
//     // }
    
//     const image = document.querySelector('.weather-box img');
//     const temperature = document.querySelector('.weather-box .temperature');
//     const discription = document.querySelector('.weather-box discription');
//     const humidity = document.querySelector ('.weather-details .humadity span');
//     const wind = document.querySelector('.weather-details .wind span');

//     // var weatherCondition = json.weather[0].main.toLowerCase();
//     switch (json.weather[0].main) {
//         case 'Clear': 
//             image.src = 'sun.png';
//             break;
//         case 'Rain':
//             image.src = 'rain.png';
//             break;
//         case 'Snow':
//             image.src = 'snow.png';
//             break;
//         case 'Clouds':
//             image.src = 'cloud.png';
//             break;
//         case 'Mist':
//             image.src = 'mist-.png';
//             break;
//         case 'haze':
//             image.src = 'mist-.png';
//             break;
//         default:
//             image.src="defult.png"
           
//     }
    

//     temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
//     discription.innerHTML = `${json.weather[0].description}`;
//     humidity.innerHTML = `${json.main.humidity}%`;
//     wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
// }) 



// });
const search = document.querySelector('.search-box button');

search.addEventListener('click', () => { 
    const APIKey = '71ebad4d73b6c7bbaba0a8e75671ce01';
    const city = document.querySelector('.search-box input').value;

    if (city === '') {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {   
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear': 
                    image.src = 'sun.png';
                    break;
                case 'Rain':
                    image.src = 'rain.png';
                    break;
                case 'Snow':
                    image.src = 'snow.png';
                    break;
                case 'Clouds':
                    image.src = 'cloud.png';
                    break;
                case 'Mist':
                case 'Haze': // Handle 'Haze' condition
                    image.src = 'mist.png';
                    break;
                default:
                    image.src = 'default.png';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = json.weather[0].description;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)} km/h`;
        }) 
        // .catch(error => {
        //     console.error('Error fetching weather data:', error);
        });

