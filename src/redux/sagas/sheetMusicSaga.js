import { put as dispatch, takeLatest, } from 'redux-saga/effects';
import axios from 'axios';
// import {call} from 'redux-saga/effects';

function* getMusic() {
    try {


        const setMusic = yield axios.get('/api/music/');  // get seen art items
        console.log(`get sheet music`, setMusic.data);

        yield dispatch({ type: 'SET_SHEET_MUSIC', payload: setMusic.data });
       


    } catch (error) {
        console.log('error in get sheet music:', error);
    }
};

function* searchMusic(action) {
    try {

        console.log(`our action going to our saga`, action.payload);
        
        const setMusic = yield axios.get(`/api/music/search/`, action.payload);  // get seen art items
        console.log(`get search music`, setMusic.data);

        yield dispatch({ type: 'SET_SHEET_MUSIC', payload: setMusic.data });



    } catch (error) {
        console.log('error in get sheet music:', error);
    }
};

function* deleteMusic(action){
    try{
        yield axios.delete(`/api/music/${action.payload}`);
        yield dispatch({ type: 'GET_SHEET_MUSIC'});
    } catch(error) {
        console.log('error deleting music', error);
    }
};



function* getSheetMusicWatcher() {
    yield takeLatest('GET_SHEET_MUSIC', getMusic);
    yield takeLatest('DELETE_SHEET_MUSIC', deleteMusic);
    yield takeLatest('SEARCH_SHEET_MUSIC', searchMusic)
}
export default getSheetMusicWatcher;