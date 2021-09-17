import produce, { Draft } from 'immer'
import { TopicsActions, TopicsActionsType } from './actionCreators'
import { LoadingState, TopicsState } from './contracts/state'

const initialTopicsState : TopicsState = {
  items: [],
  loadingState: LoadingState.NEVER
}

export const topicsReducer = produce((draft: Draft<TopicsState>, action: TopicsActions) => {

  switch(action.type) {
    // get tweets
    case TopicsActionsType.SET_TOPICS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TopicsActionsType.FETCH_TOPICS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    // error control  
    case TopicsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;  

    default:
      break;  
  }

}, initialTopicsState)