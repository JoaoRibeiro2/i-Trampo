<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include('../connection/connection.php');
$method = $_SERVER['REQUEST_METHOD'];

function login($email, $senha){
    $sql = mysqli_query($GLOBALS['conn'], "SELECT * FROM tb_usuario WHERE email ='$email' ");
    $user = $sql->fetch_array(MYSQLI_NUM);
    
    if($user > 0){

        if(password_verify($senha, $user[3])){
            $dados = mysqli_fetch_assoc(mysqli_query($GLOBALS['conn'], "SELECT * FROM tb_usuario WHERE email ='$email'"));
            
            $usuario = 
                    array(
                        "nome" => $dados['nm_usuario'],
                        "email" => $dados['email'],
                        "dt_nasc" => $dados['dt_nascimento'],
                        "cidade" => $dados['cidade'],
                        "estado" => $dados['estado'],
                        "genero" => $dados['genero'],
                        "foto" => $dados['foto'],
                        "desc" => $dados['descricao']
                    );

            echo json_encode($usuario);
        }else{
            echo json_encode('senha_invalida');
        }
    }else{
        echo json_encode('email_invalido');
    }

}

if($method === 'POST'){

    $login = file_get_contents('php://input');

    $body = json_decode($login, true);
    if (isset($body)) {
        foreach($body['usuario'] as $usuario){
                login($usuario['email'], $usuario['senha']);
        }
    }else{
        echo json_encode('Insira os dados');
    }

}


if ($method === 'GET') {
    session_start();
    if(isset($_SESSION['usuario'])){
        session_destroy();
        echo json_encode('Logout efetuado com sucesso');
    }
}
