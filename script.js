const elValue = document.querySelector(".value")
const elBtn = document.querySelector(".btn")
const elNotasCem = document.querySelector(".notasCem")
const elNotasCinquenta = document.querySelector(".notasCinquenta")
const elNotasDez = document.querySelector(".notasDez")


elBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    

    elNotasCem.textContent =""
    elNotasCinquenta.textContent =""
    elNotasDez.textContent =""

    const value = Number(elValue.value)

    if(value == ""|| isNaN(value)){
        alert("informe um numero!")
        return

    }

    if(value % 10 != 0){
        alert("Infelizmente não temos notas para este valor!")
        return
    }


    const notasCem = parseInt(value/100)
    let resto = value % 100
    const notasCinquenta = parseInt(resto/50)
    resto = resto % 50
    const notasDez = parseInt(resto/10)


    elNotasCem.classList.add("none")
    elNotasCinquenta.classList.add("none")
    elNotasDez.classList.add("none")


    if(notasCem > 0){
        elNotasCem.classList.remove("none")
        elNotasCem.textContent = "Notas de R$ 100,00 = " + notasCem
    }

    if(notasCinquenta > 0){
        elNotasCinquenta.classList.remove("none")
        elNotasCinquenta.textContent = "Notas de R$ 50,00 = " + notasCinquenta
    }

    if(notasDez > 0){
        elNotasDez.classList.remove("none")
        elNotasDez.textContent = "Notas de R$ 10,00 = " + notasDez
    }

})