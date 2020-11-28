<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

include('../connection/connection.php');

function cadastrarCategoria($nm_categoria, $nm_icon, $class_icon, $pacote_icon){

    $sql = 'INSERT INTO tb_categorias VALUES (null, "'.$nm_categoria.'","'.$nm_icon.'","'.$class_icon.'","'.$pacote_icon.'")';
    // $GLOBALS['conn']->query($sql);
    $cadastro = $GLOBALS['conn']->query($sql);
    if($cadastro){
        echo json_encode('Cadastrado com sucesso');
    }else{
        echo json_encode('Erro ao cadastrar');
    }
}


if($method === 'POST'){
    // cadastrarCategoria("Motorista", "derively","fa fas-tools", "FontsAwesome");
    cadastrarCategoria("Diarista", "broom","fa fas-tools", "FontsAwesome");
}

if($method === 'GET'){
    $sql = $GLOBALS['conn']->query('SELECT * FROM tb_categorias');

    $categoria = array(
        "categorias" => []
    );


    while($c = $sql->fetch_array(MYSQLI_ASSOC)) {
        array_push($categoria["categorias"], array(
            "id" => $c['cd_categoria'],
            "nome" => $c['nm_categoria'],
            "icon" => $c['nm_icon'],
            "class_icon" => $c['class_icon'],
            "pacote_icon" => $c['pacote_icon']
        ));
    }

    echo json_encode($categoria);

}

if($method === 'DELETE'){
    $id = 3;
    $sql = $GLOBALS['conn']->query("DELETE FROM tb_categorias WHERE cd_categoria = '$id'");
    
    if ($sql) {
        echo json_encode('Deletado com sucesso');
    }else{
        echo json_encode('Erro');
    }
}


if($method === 'PUT'){
    $id = 1;
    $nome = 'Mecanico';
    $icon = 'tools yeee';
    $class_icon = 'fa fas-tools';
    $pacote_icon = 'Feather';


    $sql = $GLOBALS['conn']->query("UPDATE tb_categorias SET 
    nm_categoria = '$nome',
    nm_icon = '$icon',
    class_icon = '$class_icon',
    pacote_icon = '$pacote_icon'
    
    WHERE cd_categoria = '$id' ");

    if ($sql) {
        echo json_encode('Dados Alterados com sucesso');
    }else{
        echo json_encode('Erro');
    }

}