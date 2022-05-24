function showLeague() {
    fetch(
        "https://livescore6.p.rapidapi.com/matches/v2/list-by-league?Category=hockey&Ccd=nhl&Scd=stanley-cup-play-off",
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
                document.getElementById("hockey_table").innerHTML +=
                    data.Stages.map((stages) =>
                        stages.Events.map((team) =>
                            `<tr class="stable_row" id="row" table-row>
                            <td>${team.T1[0].Nm}</td>
                            <td>${team.Tr1}</td>
                            <td>${team.Tr2}</td>
                            <td>${team.T2[0].Nm}</td>                    
                            </tr>`
                        ))

            })
                .catch((err) => {
                    console.error(err);
                });
        }).catch((err) => {
            console.log(err)
        })
}


showLeague();

document.addEventListener("DOMContentLoaded", function (event) {
    showHockey();
});

function showHockey() {
    const x = document.getElementById("hockey_table");
    if (x.style.display === "none") {
        x.style.display = "flex";
        x.style.flexDirection = "column";

    } else {
        x.style.display = "none";
    }
}
