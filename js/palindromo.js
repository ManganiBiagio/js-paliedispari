

const btnGeneraEl=document.querySelector(".palindroma button");

btnGeneraEl.addEventListener("click",function() {
    const textEl=document.querySelector("[name=palindroma-in]");
    const palindromaOutEl=document.querySelector("#palindroma-out");
    
     if(isPalindroma(textEl.value)){
        // se entro qua è paliondroma
        palindromaOutEl.innerHTML="la parola è palindroma";

     }else{
        // se entro qua non è palindroma 
        palindromaOutEl.innerHTML="la parola non è palindroma";
     }
});

/**
 * Accetta una stringa in entrata e controlla se è palindroma
 * restituendo un booleano
 * @param {string} txt 
 * @returns boolean
 */
function isPalindroma(txt){
    if(typeof txt != "string"){
        throw "Errore nel tipo di dato inserito"
    }
    else{
        let txtReverse=txt.split("").reverse().join("");
        if(txtReverse===txt){
            return true;
        }else{
            return false;
        }
        
        

    }

}