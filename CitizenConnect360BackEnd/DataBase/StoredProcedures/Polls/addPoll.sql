USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE addPoll(
    @pollId VARCHAR(255),
    @userid VARCHAR(255),
    @pollQuestion VARCHAR(255)
)
AS
BEGIN
    INSERT INTO Poll(pollId, userid, pollQuestion)
    VALUES (@pollId, @userid, @pollQuestion)
END;
GO
