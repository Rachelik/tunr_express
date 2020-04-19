var React = require("react");

class ShowPlaylist extends React.Component {
  render() {
        // console.log('show-playlist.jsx')
        let playlist = this.props.playlist.rows[0];
        let playlistSong = this.props.playlistSong.rows;

        //link to Home Page
        let homeLink = "/"

        //link to Artist Page
        let allPlaylistsLink = "/playlists"

        //link to edit Artist
        const playlistEditLink = "/playlists/" + playlist.id + "/edit";
        const playlistAddSongLink = "/playlists/" + playlist.id + "/newsong";
        const playlistDeleteLink = "/playlists/" + playlist.id + "?_method=delete";

        const listSongs = playlistSong.map((song) => {
            return <li key={song.song_id}><a href={"/songs/"+song.song_id}>{song.title}</a></li>
        })

    return (
      <html>
        <head />
        <body>
            <p><a href={homeLink}>Back to Main</a></p>
            <p><a href={allPlaylistsLink}>All Playlists</a></p>
            <p><a href={playlistEditLink}>Edit Playlist</a>(not working yet)</p>
            <h3>Playlist</h3>
            <div>
                <p>Name: {playlist.name}</p>
                <p>Songs in this playlist</p>
                <ol>{listSongs}</ol>
                <p><a href={playlistAddSongLink}>Add Song to {playlist.name}</a></p>
            </div>
            <br/>
            <form method="POST" action={playlistDeleteLink}>
                <input type="submit" value="delete Playlist"/>
            </form>

        </body>
      </html>
    );
  }
};

module.exports = ShowPlaylist;