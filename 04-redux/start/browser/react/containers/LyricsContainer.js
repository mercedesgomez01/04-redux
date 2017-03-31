import store from '../store';
import React from 'react';
//import {setLyrics} from '../../redux/action-creators/lyrics'

export default class LyricsContainer extends React.Component {
  constructor(){
    super()

    this.state = Object.assign({
      artistQuery: "",
      songQuery: ""},
      store.getState()
      );

    this.handleSubmit = this.handleSubmit.bind(this)

  }

  setArtists(selectedArtist){
    this.setState({
      artistQuery:selectedArtist
    })
  }

  setSong(selectedSong){
    this.setState({
      songQuery:selectedSong
    })
  }

  handleSubmit(submitted){
    console.log(this.state)
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    return (
      <h1>Just a container, more to come!</h1>
      {/* <setLy*/}
      )
  }
}
