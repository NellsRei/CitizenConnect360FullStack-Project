USE citizenConnect;
GO
---checks whether the user exists
CREATE PROCEDURE checkPollExists
    @pollId VARCHAR(50)
AS
BEGIN
    SELECT 1
    FROM Poll
    WHERE pollId = @pollId;
END
GO

-- Procedure to update isDeleted field
CREATE PROCEDURE updatePollIsDeleted
    @pollId VARCHAR(50)
AS
BEGIN
    UPDATE Poll
    SET isDeleted = 1
    WHERE pollId = @pollId;
END
GO