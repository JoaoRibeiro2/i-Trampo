<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

include('../connection/connection.php');

$method = $_SERVER['REQUEST_METHOD'];

// $server = "localhost";
// $user = "id15255706_root";
// $password = "Itrampoáa12345";
// $database = "id15255706_itrampo";

// $conn = new mysqli($server, $user, $password, $database);

// if(!$conn){
//     echo 'Erro de conexao';
// }else{
//     echo 'Conectado com sucesso<br>';
// }


//Funções banco de dados

function registerUser($nome, $email ,$senha, $cpf, $telefone, $dt_nasc, $cidade, $estado, $genero, $foto,$descricao){
            $ver_email = mysqli_num_rows(mysqli_query($GLOBALS['conn'], "SELECT cd_usuario FROM tb_usuario WHERE email = '$email'" ));  
            
            if($ver_email > 0){
                echo json_encode(0);
            }else{
                $passCrypt = password_hash($senha, PASSWORD_BCRYPT);
                $sql = 'INSERT INTO tb_usuario VALUES(null, 
                "'.$nome.'",
                "'.$email.'",
                "'.$passCrypt.'",
                "'.$cpf.'",
                "'.$telefone.'",
                "'.$dt_nasc.'",
                "'.$cidade.'",
                "'.$estado.'",
                "'.$genero.'",
                "'.$foto.'",
                "'.$descricao.'"
    
                )';
                $cadastro = $GLOBALS['conn']->query($sql);
                if($cadastro){
                    echo json_encode('Cadastrado');
                }else{
                    echo json_encode('erro');
                }
            }

        }


function listUsers(){
    $sql = $GLOBALS['conn']->query('SELECT * FROM tb_usuario');

    $array = array( 
        "usuario" => []
        );

    while($u = $sql->fetch_array(MYSQLI_ASSOC)) {
        array_push($array["usuario"], array(
            "nome" => $u['nm_usuario'],
            "email" => $u['email'],
            "senha" => $u['senha'],
            "cpf" => $u['cpf'],
            "tel" => $u['telefone'],
            "dt_nasc" => $u['dt_nascimento'],
            "cidade" => $u['cidade'],
            "estado" => $u['estado'],
            "genero" => $u['genero'],
            "foto" => $u['foto'],
            "desc" => $u['descricao']
        ));   
    }
    echo json_encode($array);
}


function login(){

}
// REQUISIÇÕES HTTTP

if($method === 'GET'){
    listUsers();
}


if($method === 'POST'){
    $dadosJson = file_get_contents('php://input');
    $body = json_decode($dadosJson, true);

    // $email = "Arnaldo@gmail.com";

    if(isset($body)){
        foreach($body['usuario'] as $usuario){
            registerUser(
            $usuario['nome'],
            $usuario['email'],
            $usuario['senha'],
            $usuario['cpf'],
            $usuario['tel'],
            $usuario['dt_nasc'],
            $usuario['cidade'],
            $usuario['estado'],
            $usuario['genero'],
            $usuario['foto'],
            $usuario['desc']);
        }
    }else{
        echo json_encode('Insisra os dados');
    }

}
