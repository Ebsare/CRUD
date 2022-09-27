create database OnlineFood

create table Loginin(
UserId int identity(1,1),
Email nvarchar(500),
Userpass nvarchar (500)
)
insert into Loginin values('ek48036@ubt-uni.net','ebiubt12');

select * from Loginin

create table Singup(
UserSignId int identity(1,1),
UserName nvarchar (500),
UserEmail nvarchar (500),
UserpassW nvarchar (500),
)
insert into Singup values ('Bahrudin','bc48036@ubt-uni.net', 'bcubt12');
select * from Singup

create table Oferta(
OfertaId int identity(1,1),
PhotoFileName nvarchar (500),
EmriOfertes nvarchar (500),
Cmimi decimal (10,2)
)
ALTER TABLE Oferta
ADD DateOfOrder datetime;
insert into Oferta values ('anonymous.png','Pasta',2.50,getdate());
select * from Oferta

create table Desserts(
DessertId int identity(1,1),
PhotoFileName nvarchar (500),
EmriDessert nvarchar (500),
Cmimi decimal (10,2),
DateOfOrder datetime
)
insert into Desserts values ('anonymous.png','Bakllava',2.00, getdate());
select * from Desserts

create table KidsMeal(
KidsMealId int identity(1,1),
PhotoFileName nvarchar (500),
EmriKidsMeal nvarchar (500),
Cmimi decimal (10,2),
DateOfOrder datetime
)
insert into KidsMeal values('anonymous.png','Nen 33 vjec', 5.00, getdate());
select *from KidsMeal
