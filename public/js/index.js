var coll = document.getElementsByClassName("collapsible");
document.getElementById('conteudo-compartilhe-suas-ideias').style.display='block';
document.getElementById('form-envio').style.display='none';
document.getElementById('quadrado-laranja01').style.display='none';
document.getElementById('quadrado-laranja02').style.display='none';
document.getElementById('quadrado-laranja03').style.display='none';
document.getElementById('quadrado-laranja04').style.display='none';
document.getElementById('quadrado-laranja05').style.display='none';
document.getElementById('quadrado-laranja06').style.display='none';




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


function mostrar(){
  document.getElementById('form-envio').style.display='block';
  document.getElementById('conteudo-compartilhe-suas-ideias').style.display='none';
}

function retornar(){
  document.getElementById('form-envio').style.display='none';
  document.getElementById('conteudo-compartilhe-suas-ideias').style.display='block';
}




function clickapresentacao()
{
  document.getElementById("label-Apresentação").style.backgroundColor="#FDF1EB";
  document.getElementById("label-Comitês").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Autores").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Eixos-tematicos").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Trabalhos").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Contato").style.backgroundColor="#FFFFFF00";



  document.getElementById('quadrado-laranja01').style.display='block';
  document.getElementById('quadrado-laranja02').style.display='none';
  document.getElementById('quadrado-laranja03').style.display='none';
  document.getElementById('quadrado-laranja04').style.display='none';
  document.getElementById('quadrado-laranja05').style.display='none';
  document.getElementById('quadrado-laranja06').style.display='none';
}
function clickcomites()
{
  document.getElementById("label-Apresentação").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Comitês").style.backgroundColor="#FDF1EB";
  document.getElementById("label-Autores").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Eixos-tematicos").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Trabalhos").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Contato").style.backgroundColor="#FFFFFF00";

  document.getElementById('quadrado-laranja01').style.display='none';
  document.getElementById('quadrado-laranja02').style.display='block';
  document.getElementById('quadrado-laranja03').style.display='none';
  document.getElementById('quadrado-laranja04').style.display='none';
  document.getElementById('quadrado-laranja05').style.display='none';
  document.getElementById('quadrado-laranja06').style.display='none';
}
function clickautores()
{
  document.getElementById("label-Apresentação").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Comitês").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Autores").style.backgroundColor="#FDF1EB";
  document.getElementById("label-Eixos-tematicos").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Trabalhos").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Contato").style.backgroundColor="#FFFFFF00";

  document.getElementById('quadrado-laranja01').style.display='none';
  document.getElementById('quadrado-laranja02').style.display='none';
  document.getElementById('quadrado-laranja03').style.display='block';
  document.getElementById('quadrado-laranja04').style.display='none';
  document.getElementById('quadrado-laranja05').style.display='none';
  document.getElementById('quadrado-laranja06').style.display='none';
}
function clicktematicos()
{
  document.getElementById("label-Apresentação").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Comitês").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Autores").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Eixos-tematicos").style.backgroundColor="#FDF1EB";
  document.getElementById("label-Trabalhos").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Contato").style.backgroundColor="#FFFFFF00";

  document.getElementById('quadrado-laranja01').style.display='none';
  document.getElementById('quadrado-laranja02').style.display='none';
  document.getElementById('quadrado-laranja03').style.display='none';
  document.getElementById('quadrado-laranja04').style.display='block';
  document.getElementById('quadrado-laranja05').style.display='none';
  document.getElementById('quadrado-laranja06').style.display='none';
}
function clicktrabalhos()
{
  document.getElementById("label-Apresentação").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Comitês").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Autores").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Eixos-tematicos").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Trabalhos").style.backgroundColor="#FDF1EB";
  document.getElementById("label-Contato").style.backgroundColor="#FFFFFF00";

  document.getElementById('quadrado-laranja01').style.display='none';
  document.getElementById('quadrado-laranja02').style.display='none';
  document.getElementById('quadrado-laranja03').style.display='none';
  document.getElementById('quadrado-laranja04').style.display='none';
  document.getElementById('quadrado-laranja05').style.display='block';
  document.getElementById('quadrado-laranja06').style.display='none';
}
function clickcontato()
{
  document.getElementById("label-Apresentação").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Comitês").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Autores").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Eixos-tematicos").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Trabalhos").style.backgroundColor="#FFFFFF00";
  document.getElementById("label-Contato").style.backgroundColor="#FDF1EB";
  
  document.getElementById('quadrado-laranja01').style.display='none';
  document.getElementById('quadrado-laranja02').style.display='none';
  document.getElementById('quadrado-laranja03').style.display='none';
  document.getElementById('quadrado-laranja04').style.display='none';
  document.getElementById('quadrado-laranja05').style.display='none';
  document.getElementById('quadrado-laranja06').style.display='block';
}

