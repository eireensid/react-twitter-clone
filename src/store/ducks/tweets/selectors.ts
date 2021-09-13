import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState } from "./contracts/state";

// more convenient way for getting data, мемоизировать данные, но здесь нужен больше для удобства
export const selectTweets = (state: RootState) => state.tweets;

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items)

export const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState;

export const selectIsTweetsLoading = (state: RootState): boolean => 
  selectLoadingState(state) === LoadingState.LOADING

export const selectIsTweetsLoaded = (state: RootState): boolean => 
  selectLoadingState(state) === LoadingState.LOADED