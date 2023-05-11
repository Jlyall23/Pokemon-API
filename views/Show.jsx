const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
    class Show extends React.Component {
        render() {
           const {singlePokemon} = this.props
           console.log(this.props.id)
            return (
            <div style={myStyle}>
                      <h1>Gotta Catch Them All!</h1>
                      <h2>{singlePokemon.name}</h2>
                      
             
        <a href='/'>BACK</a>
                  </div>
          );
      }
    }
    module.exports = Show;