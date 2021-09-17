import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState, TopicsState } from './contracts/state';

export const selectTopics = (state: RootState): TopicsState => state.topics;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTopics(state).loadingState;

export const selectIsTopicsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTopicsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTopicsItems = createSelector(selectTopics, (tweets) => tweets.items);
