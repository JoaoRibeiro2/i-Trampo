<?php

$servidor = "localhost";
$user = "root";
$senha = "usbw";
$banco = "db_iTrampo";


$conexao = new mysqli($servidor, $user, $senha, $banco);

if (!$conexao){
    echo "Erro";
}else{
    echo "Conectado com sucesso";
}