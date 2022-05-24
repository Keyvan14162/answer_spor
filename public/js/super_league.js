function showLeague() {
    // api aynı anda birden çok istek almasın 
    var start = new Date().getTime();
    while (new Date().getTime() < start + 2000.9);
  fetch(
    "https://livescore6.p.rapidapi.com/matches/v2/list-by-league?Category=soccer&Ccd=turkey&Scd=super-lig",
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
        document.getElementById("super_league_table").innerHTML +=
          data.Stages.map((stages) =>
            stages.LeagueTable.L.map((L) =>
              L.Tables[0].team.map(
                (team) =>
                  `<tr class="stable_row" id="row" table-row>
                <td>${team.rnk}</td>
                <td>${team.Tnm}</td>
                <td>${team.pld}</td>
                <td>${team.winn}</td>
                <td>${team.drwn}</td>
                <td>${team.lst}</td>
                <td>${team.pts}</td> 
              </tr>`
              )
            )
          ).join("");
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

showLeague();

document.addEventListener("DOMContentLoaded", function (event) {
  showSuperLeague();
});

function showSuperLeague() {
  const x = document.getElementById("super_league_table");
  if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.flexDirection = "column";

  } else {
    x.style.display = "none";
  }
}
