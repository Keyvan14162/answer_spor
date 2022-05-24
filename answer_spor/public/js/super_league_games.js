function getGames(){


  fetch(
    "https://livescore6.p.rapidapi.com/matches/v2/list-by-league?Category=soccer&Ccd=turkey",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "livescore6.p.rapidapi.com",
        "x-rapidapi-key": "51337d471fmsh5e9c04e580ad484p14b3e0jsn6785b933b109",
      },
    }
  )
    .then((response) => {
      response.json().then((data) => {
        document.getElementById("super_league_games_table").innerHTML +=
          data.Stages[0].Events.map((events) => {
            if (String(events.Tr1) == "undefined") {
              return `<tr class="stable_row">
                  <td>${events.T1[0].Nm}</td>
                  <td> - </td>
                  <td>${events.T2[0].Nm}</td>
                  <td>${String(events.Esd).slice(0, 4)}/${String(
                events.Esd
              ).slice(4, 6)}/${String(events.Esd).slice(6, 8)}</td>
                </tr>`;
            } else {
              return `<tr class="stable_row">
                  <td>${events.T1[0].Nm}</td>
                  <td>${events.Tr1} : ${events.Tr2}</td>
                  <td>${events.T2[0].Nm}</td>
                  <td>${String(events.Esd).slice(0, 4)}/${String(
                events.Esd
              ).slice(4, 6)}/${String(events.Esd).slice(6, 8)}</td>
                </tr>`;
            }
          });
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

getGames(); 

document.addEventListener("DOMContentLoaded", function (event) {
  showSuperLeagueGames();
});

function showSuperLeagueGames() {
  const x = document.getElementById("super_league_games_table");

  if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.flexDirection = "column";
  } else {
    x.style.display = "none";
  }
}
