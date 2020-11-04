<?php
header("Access-Control-Allow-Origin: *");

$servidor = "https://itrampoficial.000webhostapp.com/";
$user = "id15255706_root";
$senha = "Itrampoáa12345";
$banco = "id15255706_itrampo";


// $connection = new mysqli($servidor, $user, $senha, $banco);

// if (!$connection){
//     echo "Erro";
// }else{
//     echo "Conectado com sucesso";
// }


$conn = new mysqli("https://itrampoficial.000webhostapp.com/","id15255706_root","Itrampoáa12345","id15255706_itrampo");
if(!$conn){
    echo "Erro de comunicação..";
}else{
        echo "Conectado com sucesso";
    }
