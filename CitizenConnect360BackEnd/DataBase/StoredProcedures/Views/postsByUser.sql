USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE postsByUser(@userid VARCHAR (255))
AS 
BEGIN
    SELECT * FROM Posts WHERE userid = @userid
END
GO