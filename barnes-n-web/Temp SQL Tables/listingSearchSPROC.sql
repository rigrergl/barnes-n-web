DROP PROCEDURE IF EXISTS SearchListings;

DELIMITER //

CREATE PROCEDURE SearchListings(
	IN bookTitle VARCHAR(255),
    IN locationInfo VARCHAR(30), -- in the format 'POINT(x.xxx x.xxx)'
    IN maxDistanceInMeters INT
)
BEGIN
	SET @userLocation = ST_GeomFromText(locationInfo, 4326);

	SELECT location_id, ST_Distance_Sphere(position, @userLocation) as distance_m FROM GeoLocation HAVING distance_m <= maxDistanceInMeters;

	DROP TEMPORARY TABLE IF EXISTS locationsInRange;
	CREATE TEMPORARY TABLE locationsInRange AS
		SELECT location_id, ST_Distance_Sphere(position, @userLocation) as distance_m FROM GeoLocation HAVING distance_m <= maxDistanceInMeters;

	SELECT location_id FROM locationsInRange;

	SELECT * FROM Listings l
    WHERE l.title = bookTitle AND l.location_id IN (SELECT location_id FROM locationsInRange);
END //

DELIMITER ;