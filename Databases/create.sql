/* Project: name, date, link, pic_1, pic_2, intro, desc*/

CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    link VARCHAR(255) NOT NULL,
    pic_1 VARCHAR(255) NOT NULL,
    pic_2 VARCHAR(255) NOT NULL,
    intro TEXT NOT NULL,
    desc TEXT NOT NULL
);