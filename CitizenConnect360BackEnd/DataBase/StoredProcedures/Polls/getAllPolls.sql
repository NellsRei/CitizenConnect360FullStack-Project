USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE getAllPolls
AS 
BEGIN
    SELECT * FROM Poll
END
GO