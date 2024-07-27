USE citizenConnect;
GO
---checks whether the user exists
CREATE PROCEDURE checkIncidentExists
    @incidentId VARCHAR(50)
AS
BEGIN
    SELECT 1
    FROM Incident
    WHERE incidentId = @incidentId;
END
GO

-- Procedure to update isDeleted field
CREATE PROCEDURE updateIncidentIsDeleted
    @incidentId VARCHAR(50)
AS
BEGIN
    UPDATE Incident
    SET isDeleted = 1
    WHERE incidentId = @incidentId;
END
GO