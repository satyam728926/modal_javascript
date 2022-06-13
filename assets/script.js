
let mod=document.getElementById("myModal")
let modalImg=document.getElementById("Modalimg")
let modaltext=document.getElementById("modaltext")
  function openmodal(src){
 mod.style.display="block";
 modalImg.src=src;

}
var cls=document.getElementById("clsbutton")

 cls.onclick=function(){
     mod.style.display="none"
 }
