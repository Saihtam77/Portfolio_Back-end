/* Project: name, date, link, pic_1, pic_2, intro, desc*/

CREATE TABLE IF NOT EXISTS Projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    startDate DATE NOT NULL,
    link VARCHAR(255) NOT NULL,
    pic1 VARCHAR(255) NOT NULL,
    pic2 VARCHAR(255) NOT NULL,
    intro TEXT NOT NULL,
    desc TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Techs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    pic VARCHAR(255) NOT NULL,
    skillLevel INTEGER NOT NULL
);

