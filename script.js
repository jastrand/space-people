
const container = document.getElementById("main");
const launchCountHeader = document.getElementById("launchCount");
const apiUrl = 'https://api.spacexdata.com/v3/launches/past';


fetch(apiUrl)
  .then((response) => {
    return response.json();
  })

  .then((launchArray) => {
    const numLaunches = launchArray.length;
    launchCountHeader.innerHTML += `${numLaunches}`

    const flipThem = () => {
      launchArray.reverse();

    };
    flipThem();

    launchArray.forEach((launch) => {
      const launchDate = new Date(launch.launch_date_utc);

      const launchImage = `${launch.links.mission_patch_small}`

      const launchDateString = launchDate.toLocaleDateString('en-US');
      const launchTimeString = launchDate.toLocaleTimeString('en-US');

      let isSuccess = `${launch.launch_success}`;
      if (isSuccess === true) {
        return "Good day";
      }

      container.innerHTML += `
      <section class="card"><h2>${launch.flight_number}. ${launch.mission_name}</h2>
      <img src="${launchImage}">
      <p>📅 ${launchDateString} 🕒 ${launchTimeString}</p>
      <p>Launch succeeded: ${isSuccess}</p>
      <p><span class="bold">Mission details</span>: ${launch.details}</p></section>
      `
    })


  })
