USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE addUser (
    @userid VARCHAR (255),
    @username VARCHAR(255), 
    @email VARCHAR(255), 
    @hashedpassword VARCHAR(255),
    @role VARCHAR(10)
)

AS 
BEGIN
    INSERT INTO Users(userid,username,email,password,role)
    VALUES(@userid, @username, @email, @hashedpassword, @role)

END
GO