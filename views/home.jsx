var React = require("react");

class Home extends React.Component {
  render() {
        // console.log('home.jsx')
    return (
      <html>
        <head />
        <body>
          <h1>Welcome!</h1>
            <div>
                <a href="/artists">Artists</a>
            </div>
            <div>
                <a href="/songs">Songs</a>
            </div>
          <br/>
          <a href="/artists/new">Add New Artist</a>
        </body>
      </html>
    );
  }
}
module.exports = Home;
