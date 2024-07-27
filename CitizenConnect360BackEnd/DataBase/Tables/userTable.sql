USE citizenConnect;

CREATE TABLE Users(
    userid VARCHAR (255) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    isDeleted INT DEFAULT 0,
    isPasswordReset INT DEFAULT 0,
    isEmailSent INT DEFAULT 0,
    role VARCHAR(10) DEFAULT 'User'
    
)