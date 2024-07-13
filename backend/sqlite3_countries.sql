
CREATE TABLE countries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    flag_url TEXT,
    coat_of_arms_url TEXT,
    architecture_image_url TEXT,
    population INTEGER,
    gdp TEXT,
    cost_of_living TEXT,
    index_rankings TEXT
);

INSERT INTO countries (name, flag_url, coat_of_arms_url, architecture_image_url, population, gdp, cost_of_living, index_rankings) VALUES 
('Vietnam', 'https://link.to/vietnam/flag.png', 'https://link.to/vietnam/coat_of_arms.png', 'https://link.to/vietnam/architecture.jpg', 97000000, '271.2 billion USD', 'Low', 'Human Development Index: 117/189'),
('USA', 'https://link.to/usa/flag.png', 'https://link.to/usa/coat_of_arms.png', 'https://link.to/usa/architecture.jpg', 331000000, '21.43 trillion USD', 'High', 'Human Development Index: 17/189');
