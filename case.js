
// string is immutable and its case sensitive.
const subject = "Chemistry";
const book = "chemistry";

if(subject.toLocaleLowerCase() === book.toLocaleLowerCase()){
    console.log("aj boi pore akdom fatay felbo")
}else{
    console.log("jah ajke r porbo na akdom ghumay ghumay sopno dekhbo")
}

const pani = "  water" ;
const jol = "water    " ;

if(pani.trim() === jol.trim()){
    console.log("agulo sob fresh pani")
}else{
    console.log("Fresh pani pai na ")
}