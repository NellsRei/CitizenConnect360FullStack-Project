USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE awaitingApproval(
    @userid VARCHAR (255),
    @username VARCHAR(255), 
    @email VARCHAR(255), 
    @role VARCHAR(10)
)

AS 
BEGIN
    INSERT INTO PendingApproval(userid,username,email,role)
    VALUES(@userid, @username, @email, @role)

END
GO