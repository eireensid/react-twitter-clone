import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { TweetsState } from './ducks/tweets/contracts/state';
import { TopicsState } from './ducks/topics/contracts/state';
import { TweetState } from './ducks/tweet/contracts/state';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  topics: TopicsState;
  tweets: TweetsState;
  tweet: TweetState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga);