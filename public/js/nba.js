function showLeague() {
  fetch(
    "https://livescore6.p.rapidapi.com/matches/v2/list-by-league?Category=basketball&Ccd=nba&Scd=regular-season",
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
        document.getElementById("nba_table").innerHTML +=
          data.Stages.map((stages) =>
            stages.LeagueTable.L.map((L) =>
              L.Tables[0].team.map(
                (team) =>
                `<tr class="stable_row" id="row" table-row>
                <td>${team.rnk}</td>
                <td>${team.Tnm}</td>
                <td>${team.win}</td>
                <td>${team.lst}</td>
                <td>${team.per}</td>
              </tr>`

              )
            )
          ).join("");
      })
    })
    .catch((err) => {
      console.error(err);
    });
}

showLeague();

document.addEventListener("DOMContentLoaded", function (event) {
    showNBA();
  });
  
  function showNBA() {
    const x = document.getElementById("nba_table");
    if (x.style.display === "none") {
      x.style.display = "flex";
      x.style.flexDirection = "column";
  
    } else {
      x.style.display = "none";
    }
  }
  