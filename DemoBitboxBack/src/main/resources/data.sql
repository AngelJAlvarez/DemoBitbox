
INSERT INTO user (id, name, password) VALUES (1, 'user1', 'user1');
INSERT INTO user (id, name, password) VALUES (2, 'user2', 'user2');
INSERT INTO user (id, name, password) VALUES (3, 'user3', 'user3');

INSERT INTO role (id, description, name) VALUES (1, 'Admin role', 'ADMIN');
INSERT INTO role (id, description, name) VALUES (2, 'User role', 'USER');
INSERT INTO role (id, description, name) VALUES (3, 'User role', 'PATATA');

INSERT INTO user_roles (user_id, roles_id) VALUES (1, 1);
INSERT INTO user_roles (user_id, roles_id) VALUES (1, 2);
INSERT INTO user_roles (user_id, roles_id) VALUES (2, 2);
INSERT INTO user_roles (user_id, roles_id) VALUES (2, 1);
INSERT INTO user_roles (user_id, roles_id) VALUES (3, 3);

INSERT INTO ITEM  (ID, CODE, CREATION_DATE, DESCRIPTION, PRICE, REASON_FOR_DEACTIVATION , STATE, CREATOR_ID) VALUES (1, 999, '2020/05/23', 'Un arcodeon',100,'','Active',1);
INSERT INTO ITEM  (ID, CODE, CREATION_DATE, DESCRIPTION, PRICE, REASON_FOR_DEACTIVATION , STATE, CREATOR_ID) VALUES (2, 999, '2020/05/23', 'Una mesa',25,'','Active',2);
INSERT INTO ITEM  (ID, CODE, CREATION_DATE, DESCRIPTION, PRICE, REASON_FOR_DEACTIVATION , STATE, CREATOR_ID) VALUES (3, 999, '2020/05/23', 'Una silla',999.25,'','Discontinued',3);
INSERT INTO ITEM  (ID, CODE, CREATION_DATE, DESCRIPTION, PRICE, REASON_FOR_DEACTIVATION , STATE, CREATOR_ID) VALUES (4, 999, '2020/05/23', 'Un coche',999225,'','Active',1);
INSERT INTO ITEM  (ID, CODE, CREATION_DATE, DESCRIPTION, PRICE, REASON_FOR_DEACTIVATION , STATE, CREATOR_ID) VALUES (5, 123223, '2020/05/23', 'Una cama',9000.00,'','Discontinued',1);
