use piansh;

drop table Jewelry;

create table Jewelry(
		id varchar(50) ,brand varchar(150) ,purchasedfrom varchar(700),nameofitem varchar(100) ,
        cost varchar(200),orderid
            varchar(90) ,datapuchesed varchar(50),pic varchar(10000) ,
		weight varchar(200),conditionofitem varchar(50) ,metal varchar(100) ,stone varchar(100) ,
		quantity varchar(200) ,soldin varchar(50),salesprice varchar(200),pandoraid varchar(200),
        filler1 varchar(200),filler2 varchar(200),filler3 varchar(200));
        
insert into Jewelry (
		id ,brand ,purchasedfrom,nameofitem ,cost,orderid ,datapuchesed,pic ,weight,
		conditionofitem  ,metal ,stone ,quantity,soldin,salesprice,pandoraid,filler1,filler2,filler3)
        values ( 
        "JeDeKkknd","pandora","pandora","Time Turner","100","fJiooieioJoGHiremgoho","2019-22-10",
        "C:/Users/shiva/oneDrive/pictures/piansh/TimeTurner.jpg","10","New With Tags","Gold","None","2","None","111","3672027356","","","");

insert into Jewelry (
		id ,brand ,purchasedfrom,nameofitem ,cost,orderid ,datapuchesed,pic ,weight,
		conditionofitem  ,metal ,stone ,quantity,soldin,salesprice,pandoraid,filler1,filler2,filler3)
        values ( 
        "JeDeKghnnd","pandora","pandora","Dice Charm","100","fJiooieioJhhhremgoho","2020-22-10",
        "C:/Users/shiva/oneDrive/pictures/piansh/GoldDice.jpg","10","New With Tags","Gold","Diamond","2","None","111","3672315646","","","");


insert into Jewelry (
		id ,brand ,purchasedfrom,nameofitem ,cost,orderid ,datapuchesed,pic ,weight,
		conditionofitem  ,metal ,stone ,quantity,soldin,salesprice,pandoraid,filler1,filler2,filler3)
        values ( 
        "JeDehhhnnd","pandora","pandora","Dice Charm","100","fJiooieioJhhhremgoho","2020-22-10",
        "C:/Users/shiva/oneDrive/pictures/piansh/SliverDice.jpg","10","New With Tags","Silver","Diamond","2","None","111","3655566656","","","");

select *from  jewelry;