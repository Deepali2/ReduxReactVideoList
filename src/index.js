import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {YOUTUBE_API_KEY} from './config/youtube.js';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';



class App extends Component{
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch ({key: YOUTUBE_API_KEY, term: 'surfboards'}, (videos)=> {
      this.setState({ videos });
      //this.setState({videos: videos});
    });
  }

  render() {
    return (<div>
      <SearchBar />
      <VideoList videos={this.state.videos}/>
    </div>
    );
  } 
}

ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render(<App />, document.getElementById('container'));