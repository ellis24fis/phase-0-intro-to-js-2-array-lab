const cats = ["Milo", "Otis", "Garfield"];
const copyOfCatsUsingSlice = cats.slice();
const copyOfCatsUsingSpread = [...cats];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name){
    const copy = [...cats];
       copy.push(name);
       return copy;
}
function prependCat(name){
    const copy = [...cats];
       copy.unshift(name);
       return copy;
}
function removeLastCat(){
    const copy = [...cats];
       copy.pop();
       return copy;
}
function removeFirstCat(name){
    const copy = [...cats];
       copy.shift();
       return copy;
}