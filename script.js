function shakeMagic8Ball() {
    const question = prompt('Ask the Zoltar a question:');
    
    if (question === null){
        document.getElementById('response-text').innerText = 'YOU WERE SUPPOSED TO ASK A QUESTION!!!! ZOLTAR WANTS TO SPEAK!'
        document.getElementById('response-text').classList = 'text-danger text-bg-dark' //changes HTML classes
        document.getElementById('response-image').src = '#BAD/BROKENIMG'
    } else {
        document.getElementById('response-text').innerText = 'Zoltar speaks:'
    }

    if (!question.trim()){
        alert('Please enter a valid question! Zoltar would like to speak!')
        return
    } //.trim cuts off any spaces after the last physical character and leaves you with an empty string which is a falsy
    
    const randomNumber = Math.floor(Math.random() * 8);

    let answer, image, color;

    switch(randomNumber){
        case 0:
            answer = "Should result in a yes";
            image = "Images/check.png" //change
            color = "text-success text-bg-dark"
            break;
        case 1:
            answer = "It is decidedly so";
            image = "Images/check.png" //change
            color = "text-success text-bg-dark"
            break; 
        case 2:
            answer = "Reply hazy try again";
            image = "Images/questionmark.png" //change
            color = "text-secondary text-bg-light"
            break; 
        case 3:
            answer = "Cannot predict now";
            image = "Images/questionmark.png" //change
            color = "text-secondary text-bg-light"
            break; 
        case 4:
            answer = "Do not count on it";
            image = "Images/x.png" //change
            color = "text-danger text-bg-dark"
            break; 
        case 5:
            answer = "My sources say no";
            image = "Images/x.png" //change
            color = "text-danger text-bg-dark"   
            break; 
        case 6:
            answer = "Outlook not so good";
            image = "Images/x.png" //change
            color = "text-danger text-bg-dark"
            break; 
        case 7:
            answer = "Positive result will occur";
            image = "Images/check.png" //change
            color = "text-success text-bg-light"
            break; 
    }

    console.log(answer);    

    const responseText = document.getElementById('response-text')
    responseText.innerText = answer
    responseText.classList = `display-4 ${color}`
    document.getElementById('response-image').src = image
}