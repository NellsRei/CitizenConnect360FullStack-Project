USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE getChoices
AS 
BEGIN
    SELECT * FROM PollChoices
END
GO