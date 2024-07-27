USE citizenConnect;

CREATE TABLE Poll (
    pollId VARCHAR(255) PRIMARY KEY,
    userid VARCHAR(255) FOREIGN KEY REFERENCES Users(userid) ON DELETE CASCADE,
    pollQuestion VARCHAR(255) NOT NULL,
    isDeleted INT DEFAULT 0
)


