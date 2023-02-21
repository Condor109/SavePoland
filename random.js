function letter_move(id,message){
  let doc=document.getElementById(id);
  let i=0;
  let int=setInterval(frame,100);
  function frame(){
    if (j==3){
      return;
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
function slide(id, id_p){
  let doc=document.getElementById(id);
  let doc_1=document.getElementById(id_p);
  let rect_1=doc_1.getBoundingClientRect();
  let rect=doc.getBoundingClientRect();
  let i=-250;
  let int=setInterval(frame,
    1);
  function frame(){
    if(rect.bottom<=rect_1.bottom){
      clearInterval(int);
    }
    else{
      rect=doc.getBoundingClientRect();
      doc.style.bottom=i+"px"
      i+=0.1;
    }
  }
}

var j=0;
id_p=["p_1","p_2","p_3"];
messages=["1 SEPTEMBER 1939",
"Germany has started the invasion of Poland. As the major of its ground forces,you will have to take the right (and random) decisions to defend the Polish Fatherland."
, "THE DESTINY OF POLAND IS IN YOUR HANDS"]
letter_move(id_p[j],messages[j]);
slide("d_1","p_3");
