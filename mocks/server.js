const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: true,
    },
  });
  server.route({
    method: 'GET',
    path: '/music',
    handler: (request, h) => ([
      {
        id: 1,
        poster: 'https://avatars.yandex.net/get-music-content/113160/254ab226.a.8264759-1/200x200',
        track: 'https://music.yandex.ru/album/8264759/track/56055721',
        name: 'I`ll Live on',
        author: 'Swanky Tunes, Jantine',
        year: '2019',
        hover: '#9c8994',
      },
      {
        id: 2,
        poster: 'https://avatars.yandex.net/get-music-content/113160/0b082e28.a.5643859-1/200x200',
        track: 'https://music.yandex.ru/album/5643859/track/42662275',
        name: 'Люди с автоматами',
        author: 'Swanky Tunes, Монеточка, Noize MC',
        year: '2018',
        hover: '#20B2AA',
      },
      {
        id: 3,
        poster: 'https://avatars.yandex.net/get-music-content/163479/13523d43.a.5208207-2/200x200',
        track: 'https://music.yandex.ru/album/5208207/track/41779891',
        name: 'Superhero',
        author: 'Swanky Tunes, Neenah',
        year: '2018',
        hover: '#FF00FF',
      },
    ]),
  });

  await server.start();
  console.log('server, running at %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
