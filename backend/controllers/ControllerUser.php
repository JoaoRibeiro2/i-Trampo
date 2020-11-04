<?php

include('../connection/connection.php');


// $cadastroUser = 'insert into tb_usuario ()';

function cadastrarUser($nm_usuario, $email, $senha, $cpf, $telefone, $dt_nasc, $cidade, $estado, $genero, $foto, $descricao){

    $cadastrar = 'INSERT INTO tb_usuario VALUES 
    (null, 
    "'.$nm_usuario.'",
    "'.$email.'",
    "'.$senha.'",
    "'.$cpf.'",
    "'.$telefone.'",
    "'.$dt_nasc.'",
    "'.$cidade.'",
    "'.$estado.'",
    "'.$genero.'",
    "'.$foto.'",
    "'.$descricao.'")';

    $res = $GLOBALS['conexao']->query($cadastrar);
    // return $res;
}

function deleteUser($id){
    $deletar = 'DELETE FROM tb_usuario WHERE cd_usuario ='.$id;
    $res = $GLOBALS['conexao']->query($deletar);
}

//  update tb_usuario set nm_usuario = 'Ednaldo Aparecido', email = 'ednaldo@gmail.com', cpf = '000.111.1'  where cd_usuario = 2;

function updateUser($id, $nome, $email, $cpf, $telefone, $dt_nasc, $cidade, $estado, $genero, $foto, $descricao){
    $update = 'UPDATE tb_usuario SET 
    nm_usuario = "'.$nome.'", 
    email = "'.$email.'",
    cpf = "'.$cpf.'",
    telefone = "'.$telefone.'",
    dt_nascimento = "'.$dt_nasc.'",
    cidade = "'.$cidade.'",
    estado = "'.$estado.'",
    genero = "'.$genero.'",
    foto = "'.$foto.'",
    descricao = "'.$descricao.'"
    WHERE cd_usuario ='.$id;

    $res = $GLOBALS['conexao']->query($update);
}

function listUsers(){

    $list = 'SELECT * FROM tb_usuario';
    $res = $GLOBALS['conexao']->query($list);
    return $res;
}

function Login($email, $senha){
    $login = 'SELECT * FROM tb_usuario WHERE email = "'.$email.'" AND senha = "'.$senha.'" ';
    $res = $GLOBALS['conexao']->query($login);
    
    if(!($res)){
        echo '0';
    }else{
        echo '1';
    }
}


// $listar = listUsers(); 
// while ($l = $listar->fetch_array()) {
//     echo $l['nm_usuario'], '<br>';
// }


cadastrarUser('Arnaldo', 'email@exemplo.com','arnaldo','000.000.00', '997362035', '2020/06/10', 'Peruibe', 'SP', 'masc','img/aaa','gente da hr');
listUsers();
// deleteUser(2);
/// senha nova z=c0WL4vkQ6Ks+IJ
/// Itrampoáa12345
// Login('email@exemplo.com', 'alibanana');