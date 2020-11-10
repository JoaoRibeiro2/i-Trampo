<?php

$servidor = "https://itrampoficial.000webhostapp.com/";
$user = "id15255706_root";
$senha = "Itrampoáa12345";
$banco = "id15255706_itrampo";

$conn = new mysqli($servidor, $user, $senha, $banco);

if (!$conn){
    echo "Erro";
}else{
    echo "Conectado com sucesso";
}