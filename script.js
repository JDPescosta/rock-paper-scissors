function computerPlay() {

    let answer;
    let x = Math.floor(Math.random() * 3)
    
    if (x == 0){
        answer = 'rock'
    }
    else if (x == 1){
        answer = 'paper'
    }
    else {
        answer = 'scissors'
    }
    return answer;
}

