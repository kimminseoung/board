create database board;

create table myboard(
    id int(10) not null auto_increment,
    title char(100) not null,
    content text not null,
    primary key(id)
);


select * from myboard;