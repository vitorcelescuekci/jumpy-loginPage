const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const cpf = document.getElementById("cpf")
const password = document.getElementById("password")
const register = document.getElementById("register")

function addError(element,message){
    const container = element.parentElement
    const errorDisplay = container.querySelector('small')
    errorDisplay.innerText = message
    errorDisplay.classList.add('textAlert')
    element.classList.add('error')
    element.classList.remove('success')
}

function removeError(element){
    const container = element.parentElement
    const errorDisplay = container.querySelector('small')
    errorDisplay.innerText = ''
    errorDisplay.classList.remove('textAlert')
    element.classList.add('success')
    element.classList.remove('error')
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

register.addEventListener('click', () => {
    if(fullName.value === ""){
        addError(fullName, 'Campo obrigatório')
    } else{
        removeError(fullName)
    }
    if(email.value === ""){
        addError(email, 'Campo obrigatório')
    } else if(!isEmail(email.value)){
        addError(email, 'Email não válido')
    } else{
        removeError(email)
    }
    if(phone.value === ""){
        addError(phone, 'Campo obrigatório')
    } else{
        removeError(phone)
    }
    if(cpf.value === ""){
        addError(cpf, 'Campo obrigatório')
    } else{
        removeError(cpf)
    }
    if(password.value === ""){
        addError(password, 'Campo obrigatório')
    } else{
        removeError(password)
    }
    if(fullName.value === "" || email.value === "" || phone.value === "" || cpf.value === "" || password.value === ""){
        const lastContainer = register.parentElement
        const lastError = lastContainer.querySelector('small')
        lastError.innerText = 'Todos os campos são obrigatórios'
        lastError.style.color = '#E73550'
    } else {
        const lastContainer = register.parentElement
        const lastError = lastContainer.querySelector('small')
        lastError.innerText = ''
        lastError.innerText = 'Sucesso!'
        lastError.style.color = 'rgb(0, 206, 34)'
    }
})

// CPF ADJUSTMENT

cpf.addEventListener('keypress', () => {
    let cpfLength = cpf.value.length
    if (cpfLength === 3 || cpfLength === 7) {
        cpf.value = cpf.value + '.'
    } else if(cpfLength === 11) {
        cpf.value = cpf.value + '-'
    }
})


