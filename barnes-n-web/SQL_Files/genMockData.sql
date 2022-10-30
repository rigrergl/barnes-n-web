
/* Generate Listings */

/*First Listing*/
INSERT INTO GeoLocation (position)
VALUES (ST_GeomFromText('POINT(6.906124 79.96952)', 4326));

INSERT INTO Listings  (owner_id, title, location_id, is_rented)
VALUES (1, 'Random Book 1', 1, false);

/*Second Listing*/
INSERT INTO GeoLocation (position)
VALUES (ST_GeomFromText('POINT(7.906124 89.96952)', 4326));

INSERT INTO Listings  (owner_id, title, location_id, is_rented)
VALUES (1, 'Random Book 2', 2, false);

/*Third Listing*/
INSERT INTO GeoLocation (position)
VALUES (ST_GeomFromText('POINT(80.906124 79.96952)', 4326));

INSERT INTO Listings  (owner_id, title, location_id, is_rented)
VALUES (1, 'Random Book 1', 3, false);

