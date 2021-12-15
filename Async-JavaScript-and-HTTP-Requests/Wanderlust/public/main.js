// Foursquare API Info
const clientId = 'LZK1QSG5Q3W5AONRV10TG1GAQH3BSAHNOQTO55A3V1VLYHR2';
const clientSecret = 'JQCLEQ1BPGCA3WZK2LHXNO415BF223RSX0GL4XLXIR3XVCDF';
const url = 'https://api.foursquare.com/v2/venues/explore?';
const apiKey ='fsq3cOaKSU2IPQkVxxYTWKk0dPv0HJnwCr4I6QgmXTj9QAU='
// OpenWeather Info
const openWeatherKey = '40d15a68c82361d57fa3dff99bb22396';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
  const options = {method: 'GET',apiKey:apiKey, headers: {Accept: 'application/json'}};

   const city = 'near='+$input.val();
   const urlToFetch = `${url}client_id=${clientId}&client_secret=${clientSecret}&v=20211213&${city}&limit=10`;

   //&v=20180101
   try{
         const response = await fetch(urlToFetch,options);
         if(response.ok){
           conole.log(response)
           const jsonResponse = await response.json();
           const venues = jsonResponse.response.group[0].items.map(item=>item.venue);
           console.log(venues)
           return venues;
         }
         throw new Error('Request failed!')
   }catch(error){
     console.log(error)
   }
}

const getForecast = async () => {

  const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;
  try{
      const response = await fetch(urlToFetch);
      if(response.ok){
        const jsonResponse = await response.json();
        return jsonResponse;
      }
   throw new Error('Request failed!')

  }catch(error){
    console.log(error)
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = createVenueHTML(venue.name,venue.location,venueImgSrc);
//   `<h2>VENUE_NAME_PROPERTY</h2>
// <img class="venueimage" src="${venueIcon}"/>
// <h3>Address:</h3>
// <p>VENUE_LOCATION_ADDRESS</p>
// <p>VENUE_LOCATION_CITY</p>
// <p>VENUE_LOCATION_COUNTRY</p`;
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues=>{
      return renderVenues(venues); 
  })
  getForecast().then(forecast=>{
    return renderForecast(forecast);
  })
  return false;
}

$submit.click(executeSearch)
