-- Media
INSERT INTO media (id, type, title, release_year, director, rating) VALUES
(1, 'movie', 'Blade Runner 2049', 2017, 'Denis Villeneuve',8.0),
(2, 'game', 'Elden Ring', 2022, 'Hidetaka Miyazaki', 9.5),
(3, 'tv', 'Chernobyl', 2019, 'Johan Renck', 9.4);

-- Genres
INSERT INTO media_genre (media_id, genre) VALUES
(1, 'Sci-Fi'),
(1, 'Drama'),
(2, 'Action RPG'),
(3, 'Drama'),
(3, 'History');

-- Writers
INSERT INTO media_writer (media_id, writer) VALUES
(1, 'Hampton Fancher'),
(1, 'Michael Green'),
(2, 'Hidetaka Miyazaki'),
(3, 'Craig Mazin');

-- Cast
INSERT INTO media_cast (media_id, actor_name, role_name) VALUES
(1, 'Ryan Gosling', 'K'),
(1, 'Harrison Ford', 'Rick Deckard'),
(3, 'Jared Harris', 'Valery Legasov'),
(3, 'Stellan Skarsgård', 'Boris Shcherbina');

-- Platforms
INSERT INTO media_platform (media_id, platform) VALUES
(2, 'PC'),
(2, 'PS5'),
(2, 'Xbox Series X');

-- Image
INSERT INTO media_description (media_id, description) VALUES
(1, 'A blade runner uncovers a long-buried secret that could shatter the fragile balance between humans and artificial life, sending him on a haunting search for the truth about identity, memory, and what it truly means to be alive.'),
(2, 'In a shattered world ruled by fallen demigods, a forgotten warrior must claim legendary powers, unravel ancient mysteries, and decide the fate of a kingdom where every victory reveals an even darker secret'),
(3, 'After the worst nuclear disaster in history, scientists, engineers, and officials race against time to contain an invisible catastrophe while uncovering the devastating consequences of lies, fear, and political denial.');