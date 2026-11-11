DROP TABLE IF EXISTS countries;

CREATE TABLE countries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE COLLATE NOCASE,
    flag_url TEXT,
    coat_of_arms_url TEXT,
    architecture_image_url TEXT,
    population INTEGER,
    gdp TEXT,
    cost_of_living TEXT,
    index_rankings TEXT
);

INSERT INTO countries (name, flag_url, coat_of_arms_url, architecture_image_url, population, gdp, cost_of_living, index_rankings) VALUES
('Vietnam', 'https://flagcdn.com/w320/vn.png', 'https://commons.wikimedia.org/wiki/Special:FilePath/Emblem_of_Vietnam.svg', 'https://commons.wikimedia.org/wiki/Special:FilePath/One_Pillar_Pagoda_Hanoi.jpg', 100300000, '429.7 billion USD (2023)', 'Low', 'Human Development Index: 107/193 (2022)'),
('USA', 'https://flagcdn.com/w320/us.png', 'https://commons.wikimedia.org/wiki/Special:FilePath/Greater_coat_of_arms_of_the_United_States.svg', 'https://commons.wikimedia.org/wiki/Special:FilePath/US_Capitol_west_side.JPG', 334900000, '27.4 trillion USD (2023)', 'High', 'Human Development Index: 20/193 (2022)');
