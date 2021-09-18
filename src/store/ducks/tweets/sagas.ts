import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { addTweet, setAddFormState, setTweets, setTweetsLoadingState } from './actionCreators';
import { FetchAddTweetActionInterface, TweetsActionsType } from './contracts/actionTypes';
import { AddFormState, LoadingState, Tweet } from './contracts/state';

export function* fetchTweetsRequest(): any {
  try {
    // запрос на получения списка твитов
    const items = yield call(TweetsApi.fetchTweets);
    // like dispatch, получить данные и передать на redux
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface): any {
  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: 'test',
        username: 'test',
        avatarUrl: 'https://source.unsplash.com/random/100x100?5'
      }
    }
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* tweetsSaga() {
  // следим за action и будем вызывать функцию
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
