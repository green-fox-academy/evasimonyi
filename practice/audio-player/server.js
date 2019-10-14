require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(express.json());

let songs = [
  { title: '1', artist: 'haho' },
  { title: '2', artist: 'haho2' },
  { title: '3', artist: 'haho2' },
  { title: '4', artist: 'haho2' },
  { title: '5', artist: 'haho2' },
  { title: '6', artist: 'haho2' },
  { title: '7', artist: 'haho2' },
  { title: '8', artist: 'haho2' },
];

let playlists = [
  { playlistName: 'All tracks' },
  { playlistName: 'Favorites' },
  { playlistName: 'Playlist for workout' },
  { playlistName: 'Playlist for studying' },
  { playlistName: 'Playlist for party' }
]

app.get('/', (req, res) => {
  res.render('index.ejs', {
    songs: songs,
    playlists: playlists
  })
});

// app.get('/playlist-tracks', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views/index.html'));
// });

// app.get('/playlists', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views/index.html'));
// });

app.listen(PORT, () => { console.log(`App is listening on port: ${PORT}`); });
