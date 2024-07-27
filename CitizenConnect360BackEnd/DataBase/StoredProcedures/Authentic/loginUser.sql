USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE loginUser (@email VARCHAR(255))

AS 
BEGIN
   SELECT * FROM Users WHERE email = @email AND isDeleted = 0

END
GO