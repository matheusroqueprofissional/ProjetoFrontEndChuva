var coll = document.getElementsByClassName("collapsible");
document.getElementById('conteudo-compartilhe-suas-ideias').style.display='none';
document.getElementsById("form-envio").style.display="block";
var i;

for (i = 0; i < coll.length; i++) {
  document.getElementById('link').style.display='block';
  coll[i].addEventListener("click", function() {
    document.getElementById('link').style.display='block';
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      document.getElementById('link').style.display='none';
    } 
  });
}

var coll2 = document.getElementsByName("button-criar-topico");

var i;

for (i = 0; i < coll.length; i++) {
  document.getElementById('link').style.display='block';
  coll2[i].addEventListener("click", function() {
    document.getElementById('link').style.display='block';
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      document.getElementById('conteudo-compartilhe-suas-ideias').style.display='none';
    } 
  });
}


