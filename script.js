//lets start programming


var score = 0;
var rand_color = false;
var rand_size = false;

//set randomly the target
document.getElementById("game_block").onclick = function() {

    //color style
    color_styling();

    //size style
    size_styling();



    //randomizer for positions
    var top = Math.floor(Math.random() * 81);
    var left = Math.floor(Math.random() * 93);

    //replace the target
    document.getElementById("game_block").style.top = `${top}%`;
    document.getElementById("game_block").style.left = `${left}%`;

    //score func
    score_update();
}

//activate/deactivate random colors
document.getElementById("r_color").onclick = function() {
    if (document.getElementById("r_color").checked) {
        rand_color = true;
        console.log(`Random color: ${rand_color}`);
    } else {
        rand_color = false;
        console.log(`Random color: ${rand_color}`);
    }
}

//activate/deactivate random sizes of targets
document.getElementById("r_size").onclick = function() {
    if (document.getElementById("r_size").checked) {
        rand_size = true;
        console.log(`Random size: ${rand_size}`);
    } else {
        rand_size = false;
        console.log(`Random size: ${rand_size}`);
    }
}



//########## Normal Functions ##################


//function for color styling:
function color_styling() {
    if (rand_color) {
        var rgb_1 = Math.floor(Math.random() * 256);
        var rgb_2 = Math.floor(Math.random() * 256);
        var rgb_3 = Math.floor(Math.random() * 256);
    
        console.log(rgb_1 + ", "+ rgb_2 + ", "+rgb_3);
    
        document.getElementById("game_block").style.backgroundColor = `rgb(${rgb_1}, ${rgb_2}, ${rgb_3})`;
    } else {
        document.getElementById("game_block").style.backgroundColor = "rgb(0,0,0)";
    }
}


//function for size styling:
function size_styling() {
    if (rand_size) {
        var size = Math.floor(Math.random() * (300 - 25 + 1) + 25);

        document.getElementById("game_block").style.width = `${size}px`;
        document.getElementById("game_block").style.height = `${size}px`;
    } else {
        document.getElementById("game_block").style.width = "100px";
        document.getElementById("game_block").style.height = "100px";
    }
}


//function for update the score
function score_update() {
    //collect the score
    score ++;

    //score update
    document.getElementById("score_text").innerHTML = `Your Score: ${score}`;
}




