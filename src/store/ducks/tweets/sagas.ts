import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { setTweets, setTweetsLoadingState, TweetsActionsType } from './actionCreators';
import { LoadingState } from './contracts/state';

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

export function* tweetsSaga() {
  // следим за action и будем вызывать функцию
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}
