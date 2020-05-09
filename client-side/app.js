// Personal API Key for OpenWeatherMap API
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=16b70ef6dd00c15037f9e40e9917d330&units=imperial';

// DOM elements
const entryDate = document.getElementById('date');
const entryTemp = document.getElementById('temp');
const entryDesc = document.getElementById('desc');
const entryContent = document.getElementById('content');
const entryHolder = document.getElementById('entryHolder');

const generateButton = document.getElementById('generate');

// Get the current date
let today = new Date();
let date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

// Event listener to add function to existing HTML DOM element
generateButton.addEventListener('click', generateEntryUI);

/* Function called by event listener */
function generateEntryUI(event) {
  // select the values from input for POST
  const zipInputValue = document.getElementById('zip').value;
  const feelingsInputValue = document.getElementById('feelings').value;

  // get the weather from API
  getDataFromAPI(baseURL, zipInputValue, apiKey)
    // chain a promise to only POST after the weather is received
    .then(function (data) {
      postData('/', { date: date, temp: data.main.temp, desc: data.weather[0].description, feelings: feelingsInputValue });
    })
    // chain a promise to only update the UI after GET all
    .then(
      getProjectDataAndUpdateUI()
    )
}

/* Function to GET Web API Data*/
const getDataFromAPI = async (baseURL, zip, key) => {
  const response = await fetch(baseURL + zip + key)

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error', error);
    updateUIWithError(error);
  }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log('error', error);
  }
}

/* Function to GET Project Data */
const getProjectDataAndUpdateUI = async () => {
  const request = await fetch('/all');

  try {
    const allData = await request.json();
    entryDate.innerHTML = allData.data[0].date;
    entryTemp.innerHTML = `<span>Temperature:</span> ${allData.data[0].temp}`;
    entryDesc.innerHTML = `<span>Weather:</span> ${allData.data[0].desc}`;
    entryContent.innerHTML = `<span>You were feeling:</span> ${allData.data[0].feelings}`;
    entryHolder.style.backgroundColor = 'var(--pink)';
  } catch (error) {
    console.log('error', error);
    updateUIWithError(error);
  }
}

const updateUIWithError = (error) => {
  entryHolder.innerHTML = `Something went wrong - ${error}`;
  entryHolder.style.backgroundColor = '#da1414';
  entryHolder.style.color = '#fff';
}
