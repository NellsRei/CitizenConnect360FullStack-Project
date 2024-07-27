USE citizenConnect;

CREATE TABLE PollChoices (
    choiceid VARCHAR(255) PRIMARY KEY,
    pollId VARCHAR(255) FOREIGN KEY REFERENCES Poll(pollId) ON DELETE CASCADE,
    choice VARCHAR(255) 
)
