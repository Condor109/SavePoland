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

var g=0;
var j=0;
var imgs=["./img/soldier.png","./img/cavalry.png","./img/tank.png"]
id_p=["p_1","p_2","p_3"];
messages=["THE DESTINY OF POLAND IS IN YOUR HANDS","1 SEPTEMBER 1939",
"Germany has started the invasion of Poland. As the major of its ground forces,you will have to take the right (and random) decisions to defend the Polish Fatherland."
]
letter_move(id_p[j],messages[j])