USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE pollsByUser(@userid VARCHAR (255))
AS 
BEGIN
    SELECT * FROM Poll WHERE userid = @userid
END
GO