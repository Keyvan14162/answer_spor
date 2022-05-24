function getGroups(group, table) {
  fetch(
   "https://livescore6.p.rapidapi.com/matches/v2/list-by-league?Category=soccer&Ccd=champions-league&Scd=group-" +
      group, 
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
        document.getElementById(table).innerHTML += data.Stages.map((stages) =>
          stages.LeagueTable.L.map((L) =>
            L.Tables[0].team.map(
              (team) =>
                `<tr class="stable_row" id="row" table-row>
                  <td>${team.rnk}</td>
                  <td >${team.Tnm}</td>
                  <td>${team.pld}</td>
                  <td>${team.winn}</td>
                  <td>${team.drwn}</td>
                  <td>${team.lst}</td>
                  <td>${team.pts}</td> 
                </tr>`,
            )
          )
        ).join("");
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

getGroups("a", "table1"); 
getGroups("b", "table2");
getGroups("c", "table3");
getGroups("d", "table4");



/* ilk basta null donuyo on yuzden bi kere bos cagirak*/ 
document.addEventListener("DOMContentLoaded", function(event) {
  showChampions();
});

function showChampions(){
  const x = document.getElementById("groups_id");
  
  if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.transitionns
  } else {
    x.style.display = "none";
  }
}
