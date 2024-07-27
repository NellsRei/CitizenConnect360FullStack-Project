USE citizenConnect;
GO
CREATE OR ALTER PROCEDURE addChoice(
    @choiceid VARCHAR(255),
    @pollid VARCHAR(255),
    @choice VARCHAR(255)
)
AS
BEGIN
    INSERT INTO PollChoices(choiceid, pollid, choice)
    VALUES (@choiceid, @pollid, @choice)
END;
GO
