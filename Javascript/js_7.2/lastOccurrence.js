const string = "The more you know, the more you know that you don't know";

// get the index of the last occurrence of the word
// “you”. It should give you 42.
let indices=[]
let i=string.indexOf("you")
while (i!==-1){
    indices.push(i)
    i=string.indexOf("you",i+1)
}
console.log(Math.max.apply(Math, indices))