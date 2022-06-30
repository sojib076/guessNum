function guessNum(pin) {
    const handel = document.getElementById("sojib").value
    const random = Math.floor(Math.random() * 100)+1
   const result=document.getElementById("result2").innerHTML =  `your random number is ` + random
    if (handel == random) {
        const result = document.getElementById("result").innerHTML = "You Win"
    } else {
        const result = document.getElementById("result").innerHTML = "You Lose"
    }
  
}

