USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE deletePost(@postId VARCHAR(255))
AS
BEGIN
    DELETE FROM Posts WHERE postId = @postId
END;
GO