userForm.addEventListener(`submit`,(event)=>{
    event.preventDefault()
    let heightInput = heightcm.value
    let weight = weightkg.value
    let heightIn = heightInput/100
    let height = heightIn**2
    let bmi = weight/height
    bmiNum.innerHTML = bmi.toFixed(2)  
    let final = document.getElementById("result");
    let button = document.getElementById("btnResult")
    let para = document.getElementById("paraResult")
    let text = document.getElementById("resultText")
    if(bmi<18.5){
        final.style.backgroundColor = "#DBEAFE"
        button.style.backgroundColor = "blue"
        para.innerHTML =   "You are below the healthy weight range."
        para.style.color = "blue"
        text.style.color = "blue"
    }else if(bmi>=18.5 && bmi<=24.9){
        final.style.backgroundColor = "#D1FAE5"
        button.style.backgroundColor = "green"
        para.innerHTML =   "You have a healthy body weight."
        button.innerHTML = "Normal"
        para.style.color = "green"
        text.style.color = "green"
    }else if(bmi>=25 && bmi<=29.9){
        final.style.backgroundColor = "#FEF3C7"
        button.style.backgroundColor = "yellow"
        para.innerHTML =   "You are above the healthy weight range."
        button.innerHTML = "Overweight"
        para.style.color = "yellow"
        text.style.color = "yellow"
    }else if(bmi>=30){
        final.style.backgroundColor = "#FEE2E2"
        button.style.backgroundColor = "red"
        para.innerHTML =   "Your BMI is in the obese range."
        button.innerHTML = "Obese"
        para.style.color = "red"
        text.style.color = "red"
    }else{
        alert("Please fill the values!!!")
    }
})