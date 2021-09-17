import { Action } from "redux";
import { LoadingState, TopicsState } from "./contracts/state";

export enum TopicsActionsType {
  SET_TOPICS = 'topics/SET_TOPICS',
  FETCH_TOPICS = 'topics/FETCH_TOPICS',
  SET_LOADING_STATE = 'topics/SET_LOADING_STATE'
}

export interface SetTopicsActionInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.SET_TOPICS;
  payload: TopicsState['items'];
}

export interface FetchTopicsActionInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.FETCH_TOPICS;
}

export interface SetTopicsLoadingStateActionInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setTopics = (payload: TopicsState['items']): SetTopicsActionInterface => ({
  type: TopicsActionsType.SET_TOPICS,
  payload
})

export const setTopicsLoadingState = (payload: LoadingState): SetTopicsLoadingStateActionInterface => ({
  type: TopicsActionsType.SET_LOADING_STATE,
  payload
})

export const fetchTopics = (): FetchTopicsActionInterface => ({
  type: TopicsActionsType.FETCH_TOPICS
})

export type TopicsActions = 
  SetTopicsActionInterface | 
  FetchTopicsActionInterface | 
  SetTopicsLoadingStateActionInterface