    let arrayPendu = ["B","O","N","J","O","U","R"];
    let youWin = ['_','_','_','_','_','_','_' ];
    let youLose = [];




function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
    }


continuer = true
function guessLetter(){
    while(continuer){
        let test = prompt("Entrez une lettre ? ");
        if(test.length > 1){
            alert("Pas plus d'une lettre tricheur !")
        }
        for(letter in arrayPendu){
            if(test === arrayPendu[letter]){
                youWin.splice(letter, 1, test)
                console.log(youWin)
            }else if (!youWin.includes("_")) {
                return alert("Tu as gagné");
              }
        }
    } 
}

/*function guessLetter(){
    let sub = prompt("Entrez une lettre ? ");
    arrayPendu.forEach(function(i){
        if( sub === arrayPendu[i]){
            youWin[i] = sub
            console.log(youWin)
            
        }else {
            console.log("break");
        }

    })

}*/

(() => {
   
    

    document.getElementById("testi").addEventListener('click', ()=>{
        guessLetter();
    })
    

})();
