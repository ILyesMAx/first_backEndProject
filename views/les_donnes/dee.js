var f=document.querySelector("#ggg");
var gg=document.querySelector(".dropdown-content");
var is=false;
f.addEventListener("click",function(){
    if(is){
        gg.style.display="none";
    }else{
        gg.style.display="block";
    }
    is=!is;
});
var int=document.querySelector("#int");
var html=document.querySelector("#html");
var css=document.querySelector("#css");
var php=document.querySelector("#php");
var js=document.querySelector("#js");
var quize=document.querySelector("#quize");
var change=document.querySelector("#change");
var ifra=document.querySelector("#iframmm");
var sele1=document.querySelector(".ipp1");
var sele2=document.querySelector(".ipp2");
var sele3=document.querySelector(".ipp3");
int.addEventListener("click",function(){  
    change.style.color="gold";
                     
                     });
html.addEventListener("click",function(){
    change.innerHTML="HyperText Markup Language (HTML) est un langage de balisage<br>inventé par Tim Berners-Lee, physicien au CERN en 1991.<br>HTML permet de représenter des pages web pouvant être affichéespar un agent utilisateur (navigateur).<br>Plusieurs versions successives de HTML ont vu le jour.";  
    change.style.color="green";
                     });
css.addEventListener("click",function(){
    change.innerHTML="Les Cascading Style Sheets(CSS) décrivent la manière<br>d’afficher un document HTML(polices de caractères, taille des<br>caractères, couleurs, position des éléments...).<br>Elles permettent de séparer le contenu d’un document HTMLde sa présentatio";    
    change.style.color="red";
                     });
php.addEventListener("click",function(){
    change.innerHTML="Qu’est-ce que PHP ?<br>Langage de script utilisé côté serveur Créé en 1994-1995 par Rasmus Lerdorf <br>Acronyme initial : Personal Home Page<br>Acronyme récursif : PHP: Hypertext Preprocessor Langage multi plate-forme (UNIX / Windows…)";    
    change.style.color="pinky";
                     });
js.addEventListener("click",function(){
    change.innerHTML="JavaScript est un langage de programmation de scriptsprincipalement utilisé dans les pages web interactives côté client.<br>C’est un langage orienté objet inspiré de nombreux langages dont Java mais il reste différent de celui-ci.Le langage est maintenant une implémentation de la normeECMA-262 (standard ECMAScript)."; 
    change.style.color="yellow";
                     });
sele1.addEventListener("click",function(){
    ifra.style.display="block";
});
sele2.addEventListener("click",function(){
    ifra.style.display="block";
});
sele3.addEventListener("click",function(){
    ifra.style.display="block";
});
