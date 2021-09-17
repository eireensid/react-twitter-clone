import { call, put, takeLatest } from 'redux-saga/effects';
import { TopicsApi } from '../../../services/api/topicsApi';
import { setTopics, setTopicsLoadingState, TopicsActionsType } from './actionCreators';
import { LoadingState } from './contracts/state';

export function* fetchTopicsRequest(): any {
  try {
    // запрос на получения списка твитов
    const items = yield call(TopicsApi.fetchTopics);
    // like dispatch, получить данные и передать на redux
    yield put(setTopics(items));
  } catch (error) {
    yield put(setTopicsLoadingState(LoadingState.ERROR));
  }
}

export function* topicsSaga() {
  // следим за action и будем вызывать функцию
  yield takeLatest(TopicsActionsType.FETCH_TOPICS, fetchTopicsRequest);
}
