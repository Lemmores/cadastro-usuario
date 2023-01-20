//referenciar os elementos html
const form = document.getElementById("form-signin")
const nome = document.getElementById("inputNome")
const email = document.getElementById("inputEmail")
const cpf = document.getElementById("inputCPF")
const senha = document.getElementById("inputSenha")
const senharepetida = document.getElementById("inputSenhaRepetida")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    validarEntradas(nome, email, cpf, senha, senharepetida)
})

//nome: teste
//email: teste@teste.com
//senha: Wabcde123#

function validarEntradas(n, e, c, s, sr) {
    const nomeValue = String(n.value)
    const emailValue = String(e.value)
    const cpfValue = String (c.value)
    const senhaValue = String(s.value)
    const senharepetidaValue = String(sr.value)

    if (nomeValue === "" || nomeValue == null) {
        nome.className = "form-control is-invalid"
        console.log("Nome é um campo obrigatório")
    } else if (emailValue === "" || emailValue == null) {
        email.className = "form-control is-invalid"
        console.log("E-mail é um campo obrigatório")
    } else if (validarEmail(emailValue) === false) {
        email.className = "form-control is-invalid"
        console.log("Formato de email inválido")
    } else if (cpfValue === "" || cpfValue == null) {
        cpf.className = "form-control is-invalid"
        console.log("CPF é um campo obrigatório")
    } else if (validarCPF(cpfValue) === false){
        cpf.className = "form-control is-invalid"
        console.log("Formato de cpf inválido")
    } else if (senhaValue === "" || senhaValue == null) {
        senha.className = "form-control is-invalid"
        console.log("Senha é um campo obrigatório")
    } else if (senhaValue.length < 8) {
        senha.className = "form-control is-invalid"
        console.log("A senha deve ter no mínimo 6 caracteres.")
    } else if (senharepetidaValue === "" || senhaValue == null) {
        senharepetida.className = "form-control is-invalid"
        console.log("Repetir senha é um campo obrigatório")    
    } else if (senharepetidaValue != senhaValue){
        senharepetida.className = "form-control is-invalid"
        console.log("A senha repetida tem que ser igual a senha digitada anteriormente")
    } else {
        console.log("Cadastro realizado com sucesso")
    }
}

function validarEmail(ev) {
    let re = /\S+@\S+\.\S+/
    return re.test(ev)
}

function valirdarSenha(ev) {
    let xx = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[$&@#])[0-9a-zA-Z$&@#]{8,}$/
    return xx.test(ev)
}

function validarCPF (ev){
    let yy = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    return yy.test(ev)

}