create database Audocao;

use Audocao;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(50) NOT NULL,
    telefone CHAR(12) NOT NULL
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

create table pontuacao (
idPontuacao int auto_increment,
fkUsuario int,
constraint pkComposta primary key (idPontuacao, fkUsuario),
constraint fkUsuariopts foreign key (fkUsuario) references usuario(idUsuario),
maiorPontuacao int,
qtdVezesJogadas int
);

create table personalidade (
idPersonalidade int auto_increment,
fkUsuario int,
constraint pkComposta primary key (idPersonalidade, fkUsuario),
constraint fkUsuariopersonalidade foreign key (fkUsuario) references usuario(idUsuario),
Personalidades varchar(45),
compatibilidade int
);


insert into pontuacao(maiorPontuacao,fkUsuario) values ('959',2);
insert into pontuacao(maiorPontuacao,fkUsuario) values ('123',2);
insert into pontuacao(maiorPontuacao,fkUsuario) values ('500',2);

insert into personalidade (compatibilidade,fkUsuario) values 
	('70', 1),
	('10', 1),
	('10', 1 ),
	('10', 1 );
    
    
select Personalidades,
compatibilidade
from personalidade join usuario
on fkUsuario = idUsuario
order by compatibilidade desc limit 1;

select Personalidades,
compatibilidade
from personalidade join usuario
on fkUsuario = idUsuario;


select * from usuario;

select * from pontuacao;


truncate table personalidade;

select 
maiorPontuacao,
usuario.nome
from pontuacao join usuario
on fkUsuario = idUsuario
order by maiorPontuacao desc limit 3;


select 
maiorPontuacao as PontuacaoUsuario,
usuario.nome
from pontuacao join usuario
on fkUsuario = idUsuario
where idUsuario = 1
order by maiorPontuacao desc limit 1;


SELECT SUM(qtdVezesJogadas) AS totalVezesJogadas
FROM pontuacao
WHERE fkUsuario = 4;








