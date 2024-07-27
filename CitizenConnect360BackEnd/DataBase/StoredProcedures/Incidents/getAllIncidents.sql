USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE getAllIncidents
AS 
BEGIN
    SELECT * FROM Incident
END
GO