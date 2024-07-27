USE citizenConnect;

CREATE TABLE Posts(
    postId VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255), 
    postDescription VARCHAR(255),
    userid VARCHAR(255)FOREIGN KEY REFERENCES Users(userid) ON DELETE CASCADE,
    formattedDateTime VARCHAR(255)
)