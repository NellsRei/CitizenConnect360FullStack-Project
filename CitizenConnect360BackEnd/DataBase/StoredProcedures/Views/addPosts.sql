USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE addPost(
    @postId VARCHAR(255),
    @username VARCHAR(255),
    @userId VARCHAR(255),
    @postDescription VARCHAR(255),
    @formattedDateTime VARCHAR(255)
)
AS
BEGIN
    INSERT INTO Posts(postId, userid, username, postDescription,formattedDateTime)
    VALUES (@postId, @userid, @username, @postDescription, @formattedDateTime)
END;
GO