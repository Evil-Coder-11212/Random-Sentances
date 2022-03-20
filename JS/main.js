// Initializing Variables
const lengthEl = document.getElementById('words-input');
const generateBtn = document.getElementById("generate-words-btn")
const resultEl = document.getElementById('result');
let words =["The sky", "above", "the port","was", "the color of television", "tuned", "to", "a dead channel", "All", "this happened", "more or less" ,"I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story" ,"It", "was", "a pleasure", "to", "burn", 'your'];
console.log(words.length);

const ranomWords = () =>{
    let total = "";
    let error = false;
    let errorMessage = ""
    if(Number(lengthEl.value) != null && Number(lengthEl.value) != 0){
        for(let i = 0; i < Number(lengthEl.value); i++){
            total += `${words[randomNumber()]} `
        }
    }else{
        error = true;
        errorMessage = "Can't take 0 as length."
        resultEl.textContent = errorMessage;
    }
    resultEl.textContent = total;
}

const randomNumber = () =>{
    let total = 0;
    let error = false;
    let errorMessage = ""
    if(Number(lengthEl.value) != null && Number(lengthEl.value) != 0){
        total = Math.floor(Math.random() * Number(lengthEl.value));
    }else{
        error = true;
        errorMessage = "Can't take 0 as length."
        resultEl.textContent = errorMessage;
    }
    return total;
}

// Calling Function
generateBtn.addEventListener('click', ()=>{
    console.log(ranomWords());
})

// Problems
// The max about should be 15
// The vaildtion should comr
// Put the text inside local storage