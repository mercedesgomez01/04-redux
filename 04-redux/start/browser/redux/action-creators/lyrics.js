import {SET_LYRICS} from '../constants'; //import Constants from '.../constants';

function setLyrics (text){
	return {
		type: SET_LYRICS,
		lyric: text
	};
}