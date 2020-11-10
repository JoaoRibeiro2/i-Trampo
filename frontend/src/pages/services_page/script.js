if(localStorage.user === undefined){
    window.location = '../../../';
}

function logout(){
    if(localStorage.user != null){
        let confirmar = confirm('Quer mesmo sair?');
        if (confirmar == true) {
            localStorage.removeItem('user');
            window.location = '../../../';
        }
    }else{
        alert('Erro');
    }
}


function Rolagem() {
    document.querySelector('.cards').addEventListener("wheel", event =>{
        event.preventDefault()
        if(event.deltaY > 0){
            event.target.scrollBy(300,0)
        }else{
            event.target.scrollBy(-300,0)
        }
    })
    
    document.querySelector('#categories').addEventListener("wheel", event =>{
        event.preventDefault()
        if(event.deltaY > 0){
            event.target.scrollBy(300,0)
        }else{
            event.target.scrollBy(-300,0)
        }
    })
    
    document.querySelector('#left').addEventListener("click", event =>{
            console.log('left')
            
    })
    
    document.querySelector('#right').addEventListener("click", event =>{
        event.target.scrollBy(300,0)
    })   
}
Rolagem();


document.querySelector('#logout').addEventListener("click", () => {
    logout();
})