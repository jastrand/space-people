
const container = document.getElementById("main");
const flightCountHeader = document.getElementById("flightCount");
const apiUrl = 'https://api.spacexdata.com/v3/launches/past';

fetch(apiUrl)
  .then((response) => {
    return response.json();
  })

  .then((launchArray) => {
    const numLaunches = launchArray.length
    console.log(numLaunches)
  })
