import { combineReducers } from 'redux'
import { topicsReducer } from './ducks/topics/reducer'
import { tweetsReducer } from './ducks/tweets/reducer'

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  topics: topicsReducer
})