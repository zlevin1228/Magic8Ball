function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    
    if (question === null){
        document.getElementById('response-text').innerText = 'YOU WERE SUPPOSED TO ASK A QUESTION!!!!'
        document.getElementById('response-text').classList = 'text-danger' //changes HTML classes
        document.getElementById('response-image').src = '#BAD/BROKENIMG'
    } else {
        document.getElementById('response-text').innerText = 'Magic 8-Ball says:'
    }

    if (!question.trim()){
        alert('Please enter a valid question! This must mean you did not drop it low!!')
        return
    } //.trim cuts off any spaces after the last physical character and leaves you with an empty string which is a falsy
}