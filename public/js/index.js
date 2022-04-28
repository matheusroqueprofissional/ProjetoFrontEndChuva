var coll = document.getElementsByClassName("collapsible");
var textarea = document.getElementById("text-area");




document.getElementById('form-envio').style.display='none';
document.getElementById('conteudo-compartilhe-suas-ideias').style.display='block';

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


function mostrar(){
  document.getElementById('form-envio').style.display='block';
  document.getElementById('conteudo-compartilhe-suas-ideias').style.display='none';
}

function criartopico(){
  
  document.getElementById('form-envio-sucess').style.display='none';
  document.getElementById('form-envio').style.display='block';
  document.getElementById('conteudo-compartilhe-suas-ideias').style.display='none';
  
  
}

function criarnovotopico(){
  document.getElementById('form-envio-sucess').style.display='none';
  document.getElementById('form-envio').style.display='block';
  document.getElementById('conteudo-compartilhe-suas-ideias').style.display='none';
}


function buttonretornar(){
  document.getElementById('form-envio').style.display='none';
  document.getElementById('conteudo-compartilhe-suas-ideias').style.display='block';
}




function clickapresentacao()
{
  document.getElementById('form-envio').style.display='none';
  document.getElementById('conteudo-compartilhe-suas-ideias').style.display='block';

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

function enviar2()
{
  document.getElementById('contentDiscuções').style.height=1800+ 'px';
  document.getElementById('footer-image').style.display='none';
  document.getElementById('footer-image1').style.position='relative';
  document.getElementById('footer-image1').style.top=90+'px';
var textarea = document.getElementById("text-area");
var inputassunto=document.getElementById("input-assunto");
/*
if(inputassunto.value == "")
{
  alert("insira um valor na area de assunto");
  inputassunto.focus();
  return;
}

if(textarea.value == "")
{
  alert("insira um valor na area de texto");
  textarea.focus();
  return;
}
*/


  document.getElementById('form-envio').style.display='none';
  document.getElementById('form-envio-sucess').style.display='block';
  document.getElementById('conteudo-compartilhe-suas-ideias').style.display='none';
}


