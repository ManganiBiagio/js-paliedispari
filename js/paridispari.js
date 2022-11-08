

const btnPariDispariEl=document.querySelector(".paridispari-section button");


btnPariDispariEl.addEventListener("click",function(){
    const numSceltoEl=document.querySelector("[name=num-scelto]");
    const selectPariDispariEl=document.querySelector("[name=paridispari]");
    const outPariDispariEl=document.querySelector(".out-paridispari");
    
    const numScelto=parseInt(numSceltoEl.value);

    if(isNaN(numScelto)){
        alert("inserisci un numero valido")
        return
        
    }
    if(numScelto>5 || numScelto <1){
        alert("inserisci un numero tra 1 e 5");
        return
    }
    const pcNum=myRandom(1,5);
    const risultato=pcNum+numScelto; 
    if(isPari(risultato)){
        if(selectPariDispariEl.value==="pari"){
            outPariDispariEl.innerHTML="hai vinto";  
        }
        else{
            outPariDispariEl.innerHTML="hai perso"
        }


    }
    else{
        if(selectPariDispariEl.value==="dispari"){
            outPariDispariEl.innerHTML="hai vinto";  
        }
        else{
            outPariDispariEl.innerHTML="hai perso"
        }

    }
    console.log(`
    numero giocatore:${numScelto}
    numero pc:${pcNum}
    somma:${pcNum+numScelto}
    `)

})


/**
 * ritorna un intero tra min e max inclusi
 * 
 * @param {number} min
 * @param {number} max
 * @returns number
 */
function myRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


/**
 * ritorna un valore booleano true se il numero passato è pari altrimenti
 * ritorna un valore booleano false se il numero passato è dispari
 * @param {number} num 
 * @returns bolean
 */
function isPari(num){
    if(num%2===0){
        return true;
    }
    else{
        return false
    }
}
