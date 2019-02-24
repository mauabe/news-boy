import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  state = { stories: [] };

  componentDidMount() {
  //   fetch('http://localhost:3000/topstories')
  //     .then(response => response.json())
  //     .then(json => this.setState({ stories: json }))
  //     .catch(error => alert(error.message));
  
  axios.get('http://localhost:3000')
  // axios.get(`${document.location.origin}/`)
      .then(response => {
        // console.log(response)
        const stories = response.data.slice(0, 10)
        this.setState = ({ stories })
        
        console.log(stories);
      })
  
      .catch(error => alert(error.message));
  }
  
  render() {
    return (
      <div>
        <h2>The Latest Hacker News</h2>
        {
          this.state.stories.map(item => {
            const { id, by, score, title, url } = item;

            console.log('item', item);

            return (
              <div key={id}>
                <a href={url}>{title}</a>
                <p>Upvotes: {score}</p>
                <p>{by}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
