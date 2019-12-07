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
        poster: '//avatars.yandex.net/get-music-content/113160/0b082e28.a.5643859-1/200x200',
        name: 'Game Time',
        author: 'Swanky Tunes, NSSND, Lexblaze',
        year: '2019',
      },
      {
        id: 2,
        poster: '../assets/img/sugar.jpg',
        name: 'Sugar',
        author: 'Swanky Tunes, George Fetcher',
        year: '2019',
      },
      {
        id: 3,
        poster: '../assets/img/liveon.png',
        name: 'I’ll live on',
        author: 'Swanky Tunes, Jantine',
        year: '2019',
      },
      {
        id: 4,
        poster: '../src/assets/img/supersonic.png',
        name: 'Supersonic',
        author: 'Swanky Tunes, Christian Burns',
        year: '2019',
      },
      {
        id: 5,
        poster: '../assets/img/blow.jpg',
        name: 'Blow',
        author: 'Swanky Tunes',
        year: '2019',
      },
      {
        id: 6,
        poster: '../assets/img/takemeaway.jpg',
        name: 'Take me away',
        author: 'Swanky Tunes',
        year: '2019',
      },
      {
        id: 7,
        poster: '../assets/img/ugotmeburnin.jpg',
        name: 'U Got Me Burning',
        author: 'Swanky Tunes',
        year: '2019',
      },
      {
        id: 8,
        poster: '../assets/img/virus.jpg',
        name: 'Virus',
        author: 'Swanky Tunes',
        year: '2019',
      },
      {
        id: 9,
        poster: '../assets/img/biglovetothebass.jpg',
        name: 'Big Love To The Bass',
        author: 'Swanky Tunes',
        year: '2019',
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
