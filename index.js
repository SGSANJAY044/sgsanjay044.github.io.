function hmc(){
  document.getElementById("sidebg").style.display="block";
 document.getElementById("sidenav").style.transform="translateX(0vh)";
}
function hmk(){
  document.getElementById("sidebg").style.display="none";
 document.getElementById("sidenav").style.transform="translateX(90vh)";
}
function OnLoad(){
    setTimeout(offt,5500)
    // const trans=document.querySelector('.tra')
    // trans.style.top='-200vh'; 
    // document.getElementById("About").scrollIntoView();
}
function Hscroll(){
   document.documentElement.scrollTop=0;
}
function Ascroll(){
    document.getElementById("About").scrollIntoView();
}
function Wscroll(){
    document.getElementById("WWD").scrollIntoView();
}
function Tscroll(){
    document.getElementById("Tech").scrollIntoView();
}
function Pscroll(){
    document.getElementById("Portfolio").scrollIntoView();
}
function Cscroll(){
    document.getElementById("footer").scrollIntoView();
}
function offt(){
    document.getElementById("tra").style.animation="home 1s";
    const trans=document.querySelector('.tra')
    trans.style.top='-200vh';
}
but=document.getElementById("Button")
pp=document.querySelectorAll('.px')
document.addEventListener("mousemove",(e)=>{
    pp.forEach(layer => {
        if(e.pageY<800){
        speed=layer.getAttribute('speed')
       const x =(window.innerWidth - e.pageX*speed)/100
       const y=(window.innerHeight - e.pageY*speed)/100
       layer.style.transform=`translateX(${x}px) translateY(${y}px)`}
    });
})
var sra=0
window.addEventListener('scroll',()=>{
  if(window.scrollY>450 && window.scrollY<550){
    document.getElementById("cap").style.animation="slyx 2s";
    setTimeout(()=>{
       document.getElementById("cap").style.animation="none";
      document.getElementById("cap").style.display="none"; 
    },1990)
    setTimeout(()=>{
      document.getElementById("cap").style.display="block";
    },5000)
  }
  if(window.scrollY>1300){
    document.getElementById("stnav").classList.add("stick")
  }
  else{
     document.getElementById("stnav").classList.remove("stick") 
  }
    if(sra==650)
    sra=0
    if(window.scrollY>2000){
        document.getElementById("row1").style.transform=`translateX(${++sra-550}px)`
         document.getElementById("row2").style.transform=`translateX(-${++sra}px)` 
    }
})
// window.addEventListener('scroll',() => {
//     if(window.scrollY>300)
//     {
//         but.innerText=""
//         but.style.position="fixed"
//         but.style.animation="key .5s"
//         setTimeout(()=>{
//             but.style.bottom="10px"
//             but.style.right="10px"
//             but.style.width="50px"
//             but.style.height="50px"     
//         },500)
//     }
    // if(window.screenY<500){
    //     but.style.animation="key2 .5s" 
    //      setTimeout(()=>{   
    //          but.style.position="static"
    //          but.style.height="8vh"
    //          but.style.width="30vh"
    //     },5000)
    // }
// })
var hsuma = 0;
$(document).ready(function(){
  $(".next").click(function(){
    hsuma += -100;
    if(hsuma>=-200)
    $(".h-items").animate({marginLeft:hsuma+"%"},"fast");
    else{
      hsuma = 0;
      $(".h-items").animate({marginLeft:hsuma+"%"},"fast");
    }
  });
  
  
  $(".prev").click(function(){
    if(hsuma==0){
      hsuma = -200;
      $(".h-items").animate({marginLeft:hsuma+"%"},"fast");
    }
    else{
      hsuma += 100;
      $(".h-items").animate({marginLeft:hsuma+"%"},"fast");
    }
  });
});