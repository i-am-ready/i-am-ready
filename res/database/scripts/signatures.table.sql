create table signatures
(
    id      bigint auto_increment,
    phone   nvarchar(30) not null,
    country nvarchar(2)  not null comment 'ISO code on 2 chars',
    birthdate date null,
    signing_date datetime not null,
    constraint signatures__id__pk primary key (id)
)
comment 'The signatures from mobilized people';

create index idx__signatures__country
    on signatures (country);

create unique index uidx__signatures__phone
    on signatures (phone);

