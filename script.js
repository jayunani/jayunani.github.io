console.log("HI! Want to hear a joke?");
console.log("Invoke 'yes' or 'no'");

function yes(){
    console.log("What do you call a programmer from Finland?");
    wait();
};

function no() {
    console.log("Aw bummer. :(")
}

function wait() {
    setTimeout(waiting, 3000);
};

function waiting(){
    console.log("...?");
    giveup();
}

function giveup() {
    setTimeout(givingup, 3000);
}

function givingup(){
    console.log("Give up?");
    punchline();
}

function punchline(){
    setTimeout(nerdic, 3000);
}

function nerdic(){
    console.log("NERDIC!!!");
}

