USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE getPost(@postId VARCHAR (255))
AS 
BEGIN
    SELECT * FROM Posts WHERE postId = @postId
END
GO