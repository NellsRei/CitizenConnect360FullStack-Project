USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE addIncident (
    @incidentId VARCHAR (255),
    @multimedia VARCHAR(255), 
    @username VARCHAR(255), 
    @incidentDescription VARCHAR(255),
    @incidentLocation VARCHAR(10)
)

AS 
BEGIN
    INSERT INTO Incident(incidentId,multimedia,username,incidentDescription,incidentLocation)
    VALUES(@incidentId, @multimedia, @username, @incidentDescription, @incidentLocation)

END
GO