const React = require('react');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
    
    class Index extends React.Component {
      render() {
          const { pokemon } = this.props;
          return (
            <div style={myStyle}>
                      <h1>Pokemon Page</h1>
                      <ul>
                          {pokemon.map((pokemon, i) => {
                              return (
                                  <li>
                                      
                                    <a href={`/pokemon/${i}`}>{pokemon.name}</a>
                                      {' '}
                                    <img src={`${pokemon.img}.jpg`}></img>
                                    </li>
                              );
                          })}
                      </ul>
  
                  </div>
          );
      }
    }
    module.exports = Index;