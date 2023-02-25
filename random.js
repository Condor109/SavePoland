function letter_move(id,message){
  let doc=document.getElementById(id);
  let i=0;
  let int=setInterval(frame,100);
  function frame(){
    if (j>=3){
      if(j==4){
        return
      }
      j++
      change("#p_2,#p_3",1,-0.1,"0")


    }
    else if (i==message.length){
      clearInterval(int);
      j++;
      letter_move(id_p[j],messages[j])
    }
    
    else{
      let text_node=document.createTextNode(message[i]);
      doc.appendChild(text_node);
      i++;
    }
  }
}


function change(ids,i,c,h){
  let doc=document.querySelectorAll(ids);

  let int=setInterval(frame,50);
  function frame(){
    if(i<0 || i>1){
      for (let z=0;z<doc.length;z++){
        doc[z].style.height=h;
      }
      clearInterval(int);
      g++;
      if(g==1){
        change("#d_1,#d_2",0,0.1,"auto") 
      }
      else if(g==2){
        const d_1=document.querySelector("#p_2")
        const d_2=document.querySelector("#p_3")
       
        d_1.innerHTML="REMEBER: INFANTRY-->CALAVRY-->ARMOR-->INFANTRY (-->=BEATS)"
        d_2.innerHTML=""
        d_1.style.opacity="0.7"
        d_2.style.opacity="1"
        d_1.style.height=h;
        d_2.style.height=h;
        d_1.style.fontSize="20px"
        const cont=document.querySelector("#d_1");
        const imgs=cont.querySelectorAll("img");
        
        imgs.forEach((img)=>{
          let att=img.getAttribute('alt');
          img.addEventListener('click', computer);
        })
      }
      
    }
    else{
      for (let z=0;z<doc.length;z++){
        doc[z].style.opacity=i.toString();
      }
      i+=c
    }
  }
  return
}

function computer(){
  const c_1=document.querySelector("#c_1")
  const c_2=document.querySelector("#c_2")
  const values=["INFANTRY","CAVALRY","ARMOR"]
  const att=this.getAttribute("alt")
  let i=Math.round(Math.random()*3)
  let doc=document.querySelector("#p_2")
  if(att==values[i]){
    swag(2)
    return
  }
  else if(att==values[i-1]){//win
    counter[0]++;
    c_1.innerHTML=counter[0]
    swag(0)
  }
  else{//defeat
    counter[1]++;
    c_2.innerHTML=counter[1]
    swag(1);  
  }
}

function swag(i){
  let doc=document.querySelector("#p_3");
  if(i==0){
    switch(counter[i]){
      case 1: doc.innerHTML="GOOD JOB"; break;
      case 2: doc.innerHTML="THEY ARE STRUGGLING"; break;
      case 3: doc.innerHTML="GERMANS HAVE FAILED IN THEIR ATTEMPT TO TAKE VARSOVIA"; break;
      case 4: doc.innerHTML="THEY ARE ALMOST OUT OF THE FATHERLAND"; break;
      case 5: doc.innerHTML="WE SAVED OUR FATHERLAND!"; finish(); break;
    }
  }
  else if(i==1){
    switch(counter[i]){
      case 1: doc.innerHTML="WE STILL HAVE TIME AND RESOURCES";break;
      case 2: doc.innerHTML="WE ARE STRUGGLING";break;
      case 3: doc.innerHTML="THEY HAVE DEFEATED US IN BZURA";break;
      case 4: doc.innerHTML="GERMANS ARE OUTSIDE VARSOVIA";break;
      case 5: doc.innerHTML="WELL, THEY CAN NOT BE THAT BAD, RIGHT?"; finish(); break;
    }
  }
  else{
    doc.innerHTML="IT IS A TIE. We are withdrawing..."
  }
}

function finish(){
  const but=document.querySelector("button");
  but.style.opacity="1"
  but.setAttribute('onclick','restart()')
  const cont=document.querySelector("#d_1");
  const imgs=cont.querySelectorAll("img");
  imgs.forEach((img)=>{
    img.removeEventListener('click',computer)
  })
  }
function restart(){
  const but=document.querySelector("button");
  const cont=document.querySelector("#d_1");
  const imgs=cont.querySelectorAll("img");
  const doc=document.querySelector("#p_3");
  doc.innerHTML=""
  but.style.opacity="0"
  but.onclick=null
  counter[0]=0;counter[1]=0;
  document.querySelector("#c_1").innerHTML=0
  document.querySelector("#c_2").innerHTML=0
  imgs.forEach((img)=>{
    let att=img.getAttribute('alt');
    img.addEventListener('click', computer);
  })

}
  


var g=0;
var j=0;
var counter=[0,0]
id_p=["p_1","p_2","p_3"];
messages=["THE DESTINY OF POLAND IS IN YOUR HANDS","1 SEPTEMBER 1939",
"Germany has started the invasion of Poland. As the major of its ground forces,you will have to take the right (and random) decisions to defend the Polish Fatherland."
]
letter_move(id_p[j],messages[j])

/*function add_img(id,new_id,n){
  let doc=document.getElementById(id);
  let dv=document.createElement("div");
  let img=null;
  let i=1;
  let int=setInterval(frame,50);
  function frame(){
    if(i<=0){
      clearInterval(int)
    }
    else{
      doc.style.opacity=i.toString();
      i-=0.1;
    }
  }
  for(let i=0;i<n;i++){
    let img=document.createElement("img");
    img.src=imgs[i];
    console.log(imgs[0])
    dv.appendChild(img);
  }
  dv.setAttribute('id','d_1')
  document.body.insertBefore(dv,document.getElementById("p_2"))
}*/
//add_img("p_1","d_1",3)