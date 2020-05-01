//total # of resets
let resets = document.querySelector("#reset-button");
let reset_counter = document.querySelector("#num-resets");

let teamone_total_shots = document.querySelector("#teamone-numshots"); 
let teamone_goals = document.querySelector("#teamone-numgoals");
let teamtwo_total_shots = document.querySelector("#teamtwo-numshots");
let teamtwo_goals = document.querySelector("#teamtwo-numgoals");

let teamone_Button = document.querySelector("#teamone-shoot-button");
let teamtwo_Button = document.querySelector("#teamtwo-shoot-button");

resets.addEventListener("click", function() {
    let newValue = Number(reset_counter.innerHTML) + 1;
    reset_counter.innerHTML = newValue;
    console.log(newValue);
    console.log("reset Code ran");

    //display winner

    if(teamtwo_goals.innerHTML > teamone_goals.innerHTML) {
        alert("team two wins!");
    } else if(teamtwo_goals.innerHTML < teamone_goals.innerHTML) {
        alert("team one wins!");
    } else if(teamtwo_goals.innerHTML == teamone_goals.innerHTML) {
        alert("It's a draw!");
    }

    console.log(teamone_goals.innerHTML);
    console.log(teamtwo_goals.innerHTML);

    //MAKE SURE TO COME BACK AND ADD ZEROS TO EVERYTHING!!!!!!!!

    teamone_total_shots.innerHTML = 0;
    teamtwo_total_shots.innerHTML = 0;
    teamone_goals.innerHTML = 0;
    teamtwo_goals.innerHTML = 0;
});

teamone_Button.addEventListener("click", function() {
    let newTotal = Number(teamone_total_shots.innerHTML) + 1;
    teamone_total_shots.innerHTML = newTotal;
    console.log("Team one button pushed!");

    let random = Math.floor(Math.random() * 20);
    console.log(random);
    if(random % 2 == 0) {
        console.log("Team one scored!");
        let new_Goal = Number(teamone_goals.innerHTML) + 1;
        teamone_goals.innerHTML = new_Goal;
    }
});

teamtwo_Button.addEventListener("click", function() {
    let newTotal = Number(teamtwo_total_shots.innerHTML) + 1;
    teamtwo_total_shots.innerHTML = newTotal;
    console.log("Team two button pushed!");

    let random = Math.floor(Math.random() * 20);
    console.log(random);
    if(random % 2 == 0) {
        console.log("Team two scored!");
        let new_Goal = Number(teamtwo_goals.innerHTML) + 1;
        teamtwo_goals.innerHTML = new_Goal;
    }
});



