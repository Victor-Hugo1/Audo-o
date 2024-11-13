-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database Audocao;

use Audocao;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(50) NOT NULL
);

CREATE TABLE cachorros (
    idCachorro INT PRIMARY KEY AUTO_INCREMENT,
    nomeCachorro VARCHAR(45) NOT NULL,
    idade INT,
    castrado VARCHAR(45),
    genero VARCHAR(25),
    descricao VARCHAR(45),
    email_contato VARCHAR(45)
);

CREATE TABLE Adocao (
    idAdocao INT PRIMARY KEY AUTO_INCREMENT,
    fkAdotante INT,
    fkCachorroAdotado INT,
    dataAdocao DATE,
    observacoes VARCHAR(45),
    FOREIGN KEY (fkAdotante) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkCachorroAdotado) REFERENCES cachorros(idCachorro)
);