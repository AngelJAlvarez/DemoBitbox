INSERT INTO user (id, name, password) VALUES (1, 'user1', 'user1');
INSERT INTO user (id, name, password) VALUES (2, 'user2', 'user2');
INSERT INTO user (id, name, password) VALUES (3, 'user3', 'user3');
INSERT INTO user (id, name, password) VALUES (4, 'user4', 'user4');

INSERT INTO role (id, description, name) VALUES (1, 'Admin role', 'ADMIN');
INSERT INTO role (id, description, name) VALUES (2, 'User role', 'USER');
INSERT INTO role (id, description, name) VALUES (3, 'User role', 'USER');
INSERT INTO role (id, description, name) VALUES (4, 'User role', 'USER');

INSERT INTO user_roles (user_id, roles_id) VALUES (1, 1);
INSERT INTO user_roles (user_id, roles_id) VALUES (1, 2);
INSERT INTO user_roles (user_id, roles_id) VALUES (2, 2);
INSERT INTO user_roles (user_id, roles_id) VALUES (2, 1);
INSERT INTO user_roles (user_id, roles_id) VALUES (3, 3);
INSERT INTO user_roles (user_id, roles_id) VALUES (4, 4);

INSERT INTO ITEM  (ID, CODE, CREATION_DATE, DESCRIPTION, PRICE, STATE, CREATOR_ID) VALUES (1, 1, '2020/05/23', 'Un arcodeon',100,'Active',1);
INSERT INTO ITEM  (ID, CODE, CREATION_DATE, DESCRIPTION, PRICE, STATE, CREATOR_ID) VALUES (2, 2, '2020/05/23', 'Una mesa',25,'Active',2);
INSERT INTO ITEM  (ID, CODE, CREATION_DATE, DESCRIPTION, PRICE, STATE, CREATOR_ID) VALUES (3, 3, '2020/05/23', 'Una silla',999.25,'Discontinued',3);
INSERT INTO ITEM  (ID, CODE, CREATION_DATE, DESCRIPTION, PRICE, STATE, CREATOR_ID) VALUES (4, 4, '2020/05/23', 'Un coche',999225,'Active',1);
INSERT INTO ITEM  (ID, CODE, CREATION_DATE, DESCRIPTION, PRICE, STATE, CREATOR_ID) VALUES (5, 5, '2020/05/23', 'Una cama',9000.00,'Active',1);

INSERT INTO country (ID, NAME, CODE) VALUES (1, 'SPAIN', 'ES');
INSERT INTO country (ID, NAME, CODE) VALUES (2, 'GERMANY', 'DE');
INSERT INTO country (ID, NAME, CODE) VALUES (3, 'ZIMBABWE', 'ZW');

INSERT INTO supplier (ID, NAME, COUNTRY_ID) VALUES (1, 'Table supplier',2);
INSERT INTO supplier (ID, NAME, COUNTRY_ID) VALUES (2, 'Chair supplier',3);
INSERT INTO supplier (ID, NAME, COUNTRY_ID) VALUES (3, 'Lamp supplier',2);
INSERT INTO supplier (ID, NAME, COUNTRY_ID) VALUES (4, 'Closet supplier',1);

INSERT INTO ITEM_SUPPLIERS (ITEM_ID, SUPPLIERS_ID) VALUES (4,2);
INSERT INTO ITEM_SUPPLIERS (ITEM_ID, SUPPLIERS_ID) VALUES (2,3);
INSERT INTO ITEM_SUPPLIERS (ITEM_ID, SUPPLIERS_ID) VALUES (5,4);
INSERT INTO ITEM_SUPPLIERS (ITEM_ID, SUPPLIERS_ID) VALUES (2,1);
INSERT INTO ITEM_SUPPLIERS (ITEM_ID, SUPPLIERS_ID) VALUES (1,1);

INSERT INTO price_reduction (ID, END_DATE, REDUCED_PRICE, START_DATE) VALUES (1, '2020/08/23', 10, '2020/08/03');
INSERT INTO price_reduction (ID, END_DATE, REDUCED_PRICE, START_DATE) VALUES (2, '2020/08/23', 20, '2020/08/03');
INSERT INTO price_reduction (ID, END_DATE, REDUCED_PRICE, START_DATE) VALUES (3, '2020/08/23', 30, '2020/08/03');
INSERT INTO price_reduction (ID, END_DATE, REDUCED_PRICE, START_DATE) VALUES (4, '2020/08/23', 2, '2020/08/03');
INSERT INTO price_reduction (ID, END_DATE, REDUCED_PRICE, START_DATE) VALUES (5, '2020/08/23', 5, '2020/08/03');
INSERT INTO price_reduction (ID, END_DATE, REDUCED_PRICE, START_DATE) VALUES (6, '2020/08/23', 50, '2020/08/03');
INSERT INTO price_reduction (ID, END_DATE, REDUCED_PRICE, START_DATE) VALUES (7, '2020/08/23', 55, '2020/08/03');
INSERT INTO price_reduction (ID, END_DATE, REDUCED_PRICE, START_DATE) VALUES (8, '2020/08/23', 69, '2020/08/03');
INSERT INTO price_reduction (ID, END_DATE, REDUCED_PRICE, START_DATE) VALUES (9, '2020/08/23', 25, '2020/08/03');

INSERT INTO ITEM_PRICE_REDUCTION  (ITEM_ID, PRICE_REDUCTION_ID) VALUES (1,2);
INSERT INTO ITEM_PRICE_REDUCTION  (ITEM_ID, PRICE_REDUCTION_ID) VALUES (2,1);
INSERT INTO ITEM_PRICE_REDUCTION  (ITEM_ID, PRICE_REDUCTION_ID) VALUES (3,3);
INSERT INTO ITEM_PRICE_REDUCTION  (ITEM_ID, PRICE_REDUCTION_ID) VALUES (4,5);
INSERT INTO ITEM_PRICE_REDUCTION  (ITEM_ID, PRICE_REDUCTION_ID) VALUES (5,6);