const database = [
    {
        title: 'Top Gun: Maverick',
        year: '2022',
        released: '27 May 2022',
        runTime: '130 min',
        genre: ['Action', 'Drama'],
        director: 'Joseph Kosinski',
        actors: 'Tom Cruise, Jennifer Connelly, Miles Teller',
        language: 'English',
        plot: 'The story involves Maverick confronting his past while training a group of younger Top Gun graduates, including the son of his deceased best friend, for a dangerous mission.',
        poster: 'https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'The Batman',
        year: '2022',
        released: '04 Mar 2022',
        runTime: '176 min',
        genre: ['Action', 'Crime', 'Drama'],
        director: 'Matt Reeves',
        actors: 'Robert Pattinson, Zoë Kravitz, Jeffrey Wright',
        language: 'English, Spanish, Latin, Italian',
        plot: "When a sadistic serial killer begins murdering key political figures in Gotham, the Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        poster: 'https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Barbie',
        year: '2023',
        released: '21 Jul 2023',
        runTime: '114 min',
        genre: ['Adventure', 'Comedy', 'Fantasy'],
        director: 'Greta Gerwig',
        actors: 'Margot Robbie, Ryan Gosling, Issa Rae',
        language: 'English, Spanish',
        plot: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
        poster: 'https://m.media-amazon.com/images/M/MV5BYjI3NDU0ZGYtYjA2YS00Y2RlLTgwZDAtYTE2YTM5ZjE1M2JlXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Avatar: The Way of Water',
        year: '2022',
        released: '16 Dec 2022',
        runTime: '192 min',
        genre: ['Action', 'Adventure', 'Fantasy'],
        director: 'James Cameron',
        actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver',
        language: 'English',
        plot: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
        poster: 'https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Oppenheimer',
        year: '2023',
        released: '21 Jul 2023',
        runTime: '180 min',
        genre: ['Biography', 'Drama', 'History'],
        director: 'Christopher Nolan',
        actors: 'Cillian Murphy, Emily Blunt, Matt Damon',
        language: 'English, German, Italian',
        plot: 'A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II.',
        poster: 'https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Guardians of the Galaxy',
        year: '2014',
        released: '01 Aug 2014',
        runTime: '121 min',
        genre: ['Action', 'Adventure', 'Comedy'],
        director: 'James Gunn',
        actors: 'Chris Pratt, Vin Diesel, Bradley Cooper',
        language: 'English',
        plot: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
        poster: 'https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'The Boy and the Heron',
        year: '2023',
        released: '08 Dec 2023',
        runTime: '124 min',
        genre: ['Animation', 'Adventure', 'Drama'],
        director: 'Hayao Miyazaki',
        actors: 'Soma Santoki, Masaki Suda, Kô Shibasaki',
        language: 'Japanese',
        plot: "In the wake of his mother's death and his father's remarriage, a headstrong boy named Mahito ventures into a dreamlike world shared by both the living and the dead.",
        poster: 'https://m.media-amazon.com/images/M/MV5BMzA5Zjg3MTAtM2FhZS00NTNjLTg3NjEtNWQ4MTRhZjhiNzVmXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Black Panther: Wakanda Forever',
        year: '2022',
        released: '11 Nov 2022',
        runTime: '161 min',
        genre: ['Action', 'Adventure', 'Drama'],
        director: 'Ryan Coogler',
        actors: "Letitia Wright, Lupita Nyong'o, Danai Gurira",
        language: 'English, Xhosa, Maya, Spanish, Haitian, French',
        plot: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
        poster: 'https://m.media-amazon.com/images/M/MV5BYWY5NDY1ZjItZDQxMy00MTAzLTgyOGQtNTQxYjFiMzZjMjUyXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Dune: Part Two',
        year: '2024',
        released: '01 Mar 2024',
        runTime: '166 min',
        genre: ['Action', 'Adventure', 'Drama'],
        director: 'Denis Villeneuve',
        actors: 'Timothée Chalamet, Zendaya, Rebecca Ferguson',
        language: 'English',
        plot: 'Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible fu...',
        poster: 'https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'The Marvels',
        year: '2023',
        released: '10 Nov 2023',
        runTime: '105 min',
        genre: ['Action', 'Adventure', 'Fantasy'],
        director: 'Nia DaCosta',
        actors: 'Brie Larson, Teyonah Parris, Iman Vellani',
        language: 'English, Urdu',
        plot: 'Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together to save the universe.',
        poster: 'https://m.media-amazon.com/images/M/MV5BYzczOWM4MzItMWMyOS00ZDczLWIxMzctNzBmYTgzOTI1MzI3XkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'The Super Mario Bros. Movie',
        year: '2023',
        released: '05 Apr 2023',
        runTime: '92 min',
        genre: ['Animation', 'Adventure', 'Comedy'],
        director: 'Aaron Horvath, Michael Jelenic, Pierre Leduc',
        actors: 'Chris Pratt, Anya Taylor-Joy, Charlie Day',
        language: 'English',
        plot: 'A plumber named Mario travels through an underground labyrinth with his brother Luigi, trying to save a captured princess.',
        poster: 'https://m.media-amazon.com/images/M/MV5BOGZlN2EzOTYtMzUzOS00NTM3LTg0MTQtZDVjZGM4YmJlNWNhXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Nope',
        year: '2022',
        released: '22 Jul 2022',
        runTime: '130 min',
        genre: ['Horror', 'Mystery', 'Sci-Fi'],
        director: 'Jordan Peele',
        actors: 'Daniel Kaluuya, Keke Palmer, Brandon Perea',
        language: 'English, Spanish',
        plot: 'The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.',
        poster: 'https://m.media-amazon.com/images/M/MV5BODRlNWRhZWUtMzdlZC00ZDIyLWFhZjMtYTcxNjI1ZDIwODhjXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Poor Things',
        year: '2023',
        released: '27 Feb 2024',
        runTime: '141 min',
        genre: ['Comedy', 'Drama', 'Romance'],
        director: 'Yorgos Lanthimos',
        actors: 'Emma Stone, Mark Ruffalo, Willem Dafoe',
        language: 'English, French, Portuguese',
        plot: 'An account of the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.',
        poster: 'https://m.media-amazon.com/images/M/MV5BYWU2MjRjZTYtMjVkMS00MTBjLWFiMTAtYmZlYTk1YjkyMWFkXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'The Whale',
        year: '2022',
        released: '21 Dec 2022',
        runTime: '117 min',
        genre: ['Drama'],
        director: 'Darren Aronofsky',
        actors: 'Brendan Fraser, Sadie Sink, Ty Simpkins',
        language: 'English',
        plot: 'A reclusive, morbidly obese English teacher attempts to reconnect with his estranged teenage daughter.',
        poster: 'https://m.media-amazon.com/images/M/MV5BYmNhOWMyNTYtNTljNC00NTU3LWFiYmQtMDBhOGU5NWFhNGU5XkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Mission: Impossible - Ghost Protocol',
        year: '2011',
        released: '21 Dec 2011',
        runTime: '132 min',
        genre: ['Action', 'Adventure', 'Thriller'],
        director: 'Brad Bird',
        actors: 'Tom Cruise, Jeremy Renner, Simon Pegg',
        language: 'English, Russian, French, Arabic, Swedish',
        plot: "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.",
        poster: 'https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg',
    },
    {
        title: 'The Flash',
        year: '2014–2023',
        released: '07 Oct 2014',
        runTime: '43 min',
        genre: ['Action', 'Adventure', 'Drama'],
        director: 'N/A',
        actors: 'Grant Gustin, Candice Patton, Danielle Panabaker',
        language: 'English',
        plot: "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, and fighting crime in Central City.",
        poster: 'https://m.media-amazon.com/images/M/MV5BMjU0ZjZhNDQtMDhkYi00OWQyLWE3NGYtNzBlY2VmM2I4ZDg5XkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'The Fabelmans',
        year: '2022',
        released: '23 Nov 2022',
        runTime: '151 min',
        genre: ['Drama'],
        director: 'Steven Spielberg',
        actors: 'Michelle Williams, Gabriel LaBelle, Paul Dano',
        language: 'English',
        plot: 'Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.',
        poster: 'https://m.media-amazon.com/images/M/MV5BNDY5OWY4ZWYtYTM3OC00Zjg5LWFlYzYtYWI5ZGM1MDcxYzY4XkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Pinocchio',
        year: '1940',
        released: '23 Feb 1940',
        runTime: '88 min',
        genre: ['Animation', 'Adventure', 'Comedy'],
        director: 'Norman Ferguson, T. Hee, Wilfred Jackson',
        actors: 'Dickie Jones, Christian Rub, Mel Blanc',
        language: 'English',
        plot: 'A living puppet, with the help of a cricket as his conscience, must prove himself worthy to become a real boy.',
        poster: 'https://m.media-amazon.com/images/M/MV5BZGU3MTE3NjYtMGU1Zi00NjBmLTg4MzItZjg0OGZmNjZiYjQwXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Puss in Boots: The Last Wish',
        year: '2022',
        released: '21 Dec 2022',
        runTime: '102 min',
        genre: ['Animation', 'Action', 'Adventure'],
        director: 'Joel Crawford, Januel Mercado',
        actors: 'Antonio Banderas, Salma Hayek, Harvey Guillén',
        language: 'English, Spanish',
        plot: 'When Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish.',
        poster: 'https://m.media-amazon.com/images/M/MV5BMzg0MWUzMjctYjVlOS00NzVjLWIwZDMtNzg1YzNkYzdjNTMwXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'The Woman King',
        year: '2022',
        released: '16 Sep 2022',
        runTime: '135 min',
        genre: ['Action', 'Drama', 'History'],
        director: 'Gina Prince-Bythewood',
        actors: 'Viola Davis, Thuso Mbedu, Lashana Lynch',
        language: 'English, Portuguese, Fon',
        plot: 'A historical epic inspired by true events that took place in The Kingdom of Dahomey, one of the most powerful states of Africa in the 18th and 19th centuries.',
        poster: 'https://m.media-amazon.com/images/M/MV5BNzM4ODY0NzctZDIyNC00MzE4LWI3NDYtYjIyYTUyZWFmYzJkXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Talk to Me',
        year: '2022',
        released: '28 Jul 2023',
        runTime: '95 min',
        genre: ['Horror', 'Thriller'],
        director: 'Danny Philippou, Michael Philippou',
        actors: 'Ari McCarthy, Hamish Phillips, Kit Erhart-Bruce',
        language: 'English, French, Greek',
        plot: 'When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.',
        poster: 'https://m.media-amazon.com/images/M/MV5BY2I2NzJmY2YtYTM3Ni00ZGJhLThkZTItODFhMzhlZjZkMDQ5XkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Spider-Man: Across the Spider-Verse',
        year: '2023',
        released: '02 Jun 2023',
        runTime: '140 min',
        genre: ['Animation', 'Action', 'Adventure'],
        director: 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson',
        actors: 'Shameik Moore, Hailee Steinfeld, Brian Tyree Henry',
        language: 'English',
        plot: 'Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a ...',
        poster: 'https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'John Wick: Chapter 4',
        year: '2023',
        released: '24 Mar 2023',
        runTime: '169 min',
        genre: ['Action', 'Crime', 'Thriller'],
        director: 'Chad Stahelski',
        actors: 'Keanu Reeves, Laurence Fishburne, George Georgiou',
        language: 'English, Japanese, Russian, French, Spanish, German, Latin, Cantonese, Arabic',
        plot: 'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
        poster: 'https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Thor: Love and Thunder',
        year: '2022',
        released: '08 Jul 2022',
        runTime: '118 min',
        genre: ['Action', 'Adventure', 'Comedy'],
        director: 'Taika Waititi',
        actors: 'Chris Hemsworth, Natalie Portman, Christian Bale',
        language: 'English',
        plot: 'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.',
        poster: 'https://m.media-amazon.com/images/M/MV5BZjRiMDhiZjQtNjk5Yi00ZDcwLTkyYTEtMDc1NjdmNjFhNGIzXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Everything Everywhere All at Once',
        year: '2022',
        released: '08 Apr 2022',
        runTime: '139 min',
        genre: ['Action', 'Adventure', 'Comedy'],
        director: 'Daniel Kwan, Daniel Scheinert',
        actors: 'Michelle Yeoh, Stephanie Hsu, Jamie Lee Curtis',
        language: 'English, Mandarin, Cantonese',
        plot: 'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.',
        poster: 'https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Anatomy of a Fall',
        year: '2023',
        released: '22 Mar 2024',
        runTime: '151 min',
        genre: ['Crime', 'Drama', 'Thriller'],
        director: 'Justine Triet',
        actors: 'Sandra Hüller, Swann Arlaud, Milo Machado-Graner',
        language: 'French, English',
        plot: "A woman is suspected of murder after her husband's death; their half-blind son faces a moral dilemma as the main witness.",
        poster: 'https://m.media-amazon.com/images/M/MV5BYTk3MjFkZmQtMThiYi00N2JhLTk2YzItZTE5ZGUxZTIyZDVkXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Ant-Man and the Wasp: Quantumania',
        year: '2023',
        released: '17 Feb 2023',
        runTime: '124 min',
        genre: ['Action', 'Adventure', 'Comedy'],
        director: 'Peyton Reed',
        actors: 'Paul Rudd, Evangeline Lilly, Michael Douglas',
        language: 'English',
        plot: "Scott Lang and Hope Van Dyne are dragged into the Quantum Realm, along with Hope's parents and Scott's daughter Cassie. Together they must find a way to escape, but what secrets is Hope's mother hiding? And who is the mysterious K...",
        poster: 'https://m.media-amazon.com/images/M/MV5BMThkYWY5ZjQtYjJlMS00MDFmLWFkYzEtODEzZjg5YWFmMGY4XkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Creed III',
        year: '2023',
        released: '03 Mar 2023',
        runTime: '116 min',
        genre: ['Action', 'Drama', 'Sport'],
        director: 'Michael B. Jordan',
        actors: 'Michael B. Jordan, Tessa Thompson, Jonathan Majors',
        language: 'English, American Sign , Spanish, Hawaiian',
        plot: 'Adonis has been thriving in both his career and family life, but when a childhood friend and former boxing prodigy resurfaces, the face-off is more than just a fight.',
        poster: 'https://m.media-amazon.com/images/M/MV5BN2ViODVjYzgtNjQ5Ny00YTRjLThhYmYtYTkyOTk4MzYxMGVhXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Doctor Strange in the Multiverse of Madness',
        year: '2022',
        released: '06 May 2022',
        runTime: '126 min',
        genre: ['Action', 'Adventure', 'Fantasy'],
        director: 'Sam Raimi',
        actors: 'Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor',
        language: 'English, Spanish, Chinese',
        plot: 'Doctor Strange teams up with a mysterious teenage girl who can travel across multiverses, to battle other-universe versions of himself which threaten to wipe out the multiverse. They seek help from the Scarlet Witch, Wong and others.',
        poster: 'https://m.media-amazon.com/images/M/MV5BN2YxZGRjMzYtZjE1ZC00MDI0LThjZmQtZTZmMzVmMmQ2NzBmXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'The Banshees of Inisherin',
        year: '2022',
        released: '04 Nov 2022',
        runTime: '114 min',
        genre: ['Comedy', 'Drama'],
        director: 'Martin McDonagh',
        actors: 'Colin Farrell, Brendan Gleeson, Kerry Condon',
        language: 'English',
        plot: 'Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTkzMWI4OTEtMTk0MS00MTUxLWI4NTYtYmRiNWM4Zjc1MGRhXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
        title: 'Women Talking',
        year: '2022',
        released: '27 Jan 2023',
        runTime: '104 min',
        genre: ['Drama'],
        director: 'Sarah Polley',
        actors: 'Rooney Mara, Claire Foy, Jessie Buckley',
        language: 'English',
        plot: 'Do nothing, stay and fight, or leave. In 2010, the women of an isolated religious community grapple with reconciling a brutal reality with their faith.',
        poster: 'https://m.media-amazon.com/images/M/MV5BNzM2YzEzOTktNTJiNy00YjAwLWI2N2YtNjBkZWM5Y2U1OTRlXkEyXkFqcGc@._V1_SX300.jpg',
    },
];
export default database;
