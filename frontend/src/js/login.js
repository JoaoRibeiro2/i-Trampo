
let form = document.querySelector('#login');
let logout = document.querySelector('#logout');
let u_email = document.querySelector('#email');
let u_senha = document.querySelector('#password');

function login(data){

    const url ='https://itrampoficial.000webhostapp.com/server/controllers/authController.php';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        if (response == 'senha_invalida') {
            console.log(response);
            alert('Senha Inválida')
        }else if(response == 'email_invalido'){
            console.log(response);
            console.log('Email inválido')
        }else{

            let data = []

            if(localStorage.user == null){
                data.push(response)
                localStorage.setItem('user', JSON.stringify(data));
                let user = data[0]
                console.log('login efetuado com sucesso');
                window.location = '../services_page';
            }else{
                console.log('Este usuario já está logado');
            }
        }
    })
}


form.addEventListener('submit', function(event){
    event.preventDefault();

    let email = u_email.value;
    let senha = u_senha.value;
    let data = {
        "usuario": [
            {
                "email": email,
                "senha": senha
            }
        ]
    }
    if(senha == "" ){
        alert('Preencha os campos corretamente');
    }else{
        login(data)
    }

})
