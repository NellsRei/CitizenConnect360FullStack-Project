USE citizenConnect;

CREATE TABLE Incident(
    incidentId VARCHAR(255) PRIMARY KEY,
    multimedia VARCHAR(255), 
    username VARCHAR(255), 
    incidentDescription VARCHAR(255),
    incidentLocation VARCHAR(255),
    isDeleted INT DEFAULT 0,
)