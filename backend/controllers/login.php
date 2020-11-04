<?php

include('../connection/connection.php');

if(empty($_POST['usuario']) || empty($_POST['senha'])){
    header('location: index.php');
    exit();
}

$usuario = mysqli_real_escape_string($conexao, $_POST['usuario']);
$senha = mysqli_real_escape_string($conexao, $_POST['senha']);


// $usuario = "email@exemplo.com";
// $senha = "alinebanana";

$query = "SELECT cd_usuario, email FROM tb_usuario WHERE email = '{$usuario}' AND senha = '{$senha}' ";

$result = mysqli_query($conexao, $query);

$row = mysqli_num_rows($result);

if ($row == 1){
    echo "Deu bom";
}else{
    echo "Deu ruim";
}