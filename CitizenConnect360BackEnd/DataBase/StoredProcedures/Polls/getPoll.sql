USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE getPoll(@pollId VARCHAR (255))
AS 
BEGIN
    SELECT * FROM Poll WHERE pollId = @pollId
END
GO