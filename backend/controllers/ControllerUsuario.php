<?php

header("Access-Control-Allow-Origin: *");

$server = 'localhost';
$user = 'root';
$password = 'usbw';
$database = 'db_itrampo';


$conn = new mysqli($server, $user, $password, $database);

if(!$conn){
    echo 'Erro de conexao';
}else{
    echo 'Conectado com sucesso<br>';
}


function cadastrar($nome, $email ,$senha, $cpf, $telefone, $dt_nasc, $cidade, $estado, $genero, $foto,$descricao){

    $sql = 'INSERT INTO tb_usuario VALUES(null, 
    "'.$nome.'",
    "'.$email.'",
    "'.$senha.'",
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
        echo 'Cadastrado!';
    }else{
        echo 'Erro ao cadastrar.';
    }
}
//gatilhos para cadastro (sem id) e update(com id)

cadastrar("Joaozinho", "joaoribeiro@gmail.com", "senha", "cpf", "9996645645465", "2003/12/20", "Peruibe", "SP", "masc", "img/scr.png", "OLa");