import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {YOUTUBE_API_KEY} from './config/youtube.js';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



class App extends Component{
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };  
    
    this.videoSearch('vegetarian cooking');
  }

  videoSearch(term) {
    YTSearch ({key: YOUTUBE_API_KEY, term: term}, (videos)=> {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
       });      
    });

  }

  render() {
    return (<div>
      <SearchBar onSearchTermChange={term =>this.videoSearch(term)} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList 
        videos={this.state.videos}
        onVideoSelect = {selectedVideo => this.setState({selectedVideo: selectedVideo})}
      />
    </div>
    );
  } 
}

ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render(<App />, document.getElementById('container'));