function NPCchoice(){
  let y=Math.round(Math.random()*3)
  switch (y){
    case 0: return 0
    case 1: return 1
    case 2: return 2
  }
}
function getChoice(){
  let y=prompt("INFANTRY CAVALRY ARMORED");
  y=y.toUpperCase();

  console.log(y);
  return y
}

function Compare(n,y){
  if (y[n[1]]==n[0]){
    console.log("IT IS A TIE")
  }
  else if(n[0]==y[n[1]-1] ){
    console.log("YOU WIN")
  }
  else{
    console.log("YOU LOSE")
  }
}

var n=[getChoice(),NPCchoice()];
Compare(n,["INFANTRY","CAVALRY","ARMORED"])
