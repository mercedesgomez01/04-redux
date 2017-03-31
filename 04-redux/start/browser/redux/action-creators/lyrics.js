import {SET_LYRICS} from '../../react/constants'; //import Constants from '.../constants';

export const setLyrics = function (text){
	return {
		type: SET_LYRICS,
		lyric: text
	};
}

