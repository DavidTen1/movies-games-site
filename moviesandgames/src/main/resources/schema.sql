-- Core media table (movies, games, tv shows)
CREATE TABLE IF NOT EXISTS media (
    id BIGINT PRIMARY KEY,
    type VARCHAR(20) NOT NULL,
    title VARCHAR(255) NOT NULL,
    release_year INT,
    director VARCHAR(255),
    rating DECIMAL(3,1)
);

-- Genres (one media can have several)
CREATE TABLE IF NOT EXISTS media_genre (
    media_id BIGINT NOT NULL,
    genre VARCHAR(100) NOT NULL,
    FOREIGN KEY (media_id) REFERENCES media(id)
);

-- Writers (one media can have several)
CREATE TABLE IF NOT EXISTS media_writer (
    media_id BIGINT NOT NULL,
    writer VARCHAR(255) NOT NULL,
    FOREIGN KEY (media_id) REFERENCES media(id)
);

-- Cast members with their role/character name
CREATE TABLE IF NOT EXISTS media_cast (
    media_id BIGINT NOT NULL,
    actor_name VARCHAR(255) NOT NULL,
    role_name VARCHAR(255),
    FOREIGN KEY (media_id) REFERENCES media(id)
);

-- Platforms (mainly relevant for games)
CREATE TABLE IF NOT EXISTS media_platform (
    media_id BIGINT NOT NULL,
    platform VARCHAR(100) NOT NULL,
    FOREIGN KEY (media_id) REFERENCES media(id)
);

CREATE TABLE IF NOT EXISTS media_description (
media_id BIGINT NOT NULL,
description VARCHAR(1000) NOT NULL,
FOREIGN KEY (media_id) REFERENCES media(id)
);