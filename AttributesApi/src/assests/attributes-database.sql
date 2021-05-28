drop database piansh;
create database piansh;
use piansh;

# drop table attributes;
#
create table attributes
(
    id   varchar(20),
    name varchar(200),
    type varchar(20)
);

insert into attributes (id, name, type) values ('SQM6KOYjNCrm', 'New With Tags', 'condition');
insert into attributes (id, name, type) values ('snycvb6fGZ0H', 'New Without Tags', 'condition');
insert into attributes (id, name, type) values ('EcPNaYw2Cnd8', 'Slightly Used', 'condition');
insert into attributes (id, name, type) values ('dR2cM6ToUJ7p', 'Old', 'condition');

insert into attributes (id, name, type) values ('mrUiTeJsBhQf', 'Plated', 'metal');
insert into attributes (id, name, type) values ('elauC8jy0JY4', 'Gold', 'metal');
insert into attributes (id, name, type) values ('SU8eyaCYOBZK', 'Silver', 'metal');
insert into attributes (id, name, type) values ('SU8eyaCNMBZK', 'Other', 'metal');

insert into attributes (id, name, type) values ('5gQXIlUOSwun', 'Diamond', 'stone');
insert into attributes (id, name, type) values ('O8yVb4SicdoD', 'Pearl', 'stone');
insert into attributes (id, name, type) values ('5vT0NO3X8upU', 'Saphire', 'stone');
insert into attributes (id, name, type) values ('2IGg8crARy9x', 'Ruby', 'stone');
insert into attributes (id, name, type) values ('sK0UHbJTuhq2', 'Emerald', 'stone');
insert into attributes (id, name, type) values ('ipVOCkHd24ol', 'Onix', 'stone');
insert into attributes (id, name, type) values ('Y5UEC7neoJMA', 'Setreme', 'stone');
insert into attributes (id, name, type) values ('XlQ3tF1qzs0E', 'None', 'stone');


select * from piansh.attributes;