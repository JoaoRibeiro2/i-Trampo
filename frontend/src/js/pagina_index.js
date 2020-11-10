console.log('Hello')

if(typeof localStorage.user === "undefined"){
    console.log('Não há usuário logado');
}else{
    console.log('usuário logado');
    let data = JSON.parse(localStorage.getItem('user'));
    let user = data[0]
    console.log(user.nome);
    window.location = 'src/pages/services_page/'
}

