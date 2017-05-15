import { combineReducers } from 'redux';
import * as types from '../types';

const topic = (
  state = {},
  action
) => {
  switch (action.type) {
    case types.CREATE_TOPIC_REQUEST:
      return {
        id: action.id,
        count: action.count,
        completed: action.completed,
        text: action.text
      };
    case types.INCREMENT_COUNT:
      if (state.id === action.id) {
        return { ...state, count: state.count + 1 };
      }
      return state;
    case types.DECREMENT_COUNT:
      if (state.id === action.id) {
        return { ...state, count: state.count - 1 };
      }
      return state;
    case types.COMPLETED:
      if (state.id === action.id) {
        return { ...state, complete: state.complete = true };
      }
      return state;
    case types.NOT_COMPLETED:
      if (state.id === action.id) {
        return { ...state, complete: state.complete = false };
      }
      return state;
    default:
      return state;
  }
};

const topics = (
  state = [],
  action
) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_TOPIC_REQUEST:
      return [...state, topic(undefined, action)];
    case types.CREATE_TOPIC_FAILURE:
      return state.filter(t => t.id !== action.id);
    case types.DESTROY_TOPIC:
      return state.filter(t => t.id !== action.id);
    case types.INCREMENT_COUNT:
    case types.DECREMENT_COUNT:
      return state.map(t => topic(t, action));
    case types.COMPLETED:
      return state.map(t => topic(t, action));
    case types.NOT_COMPLETED:
      return state.map(t => topic(t, action));
    default:
      return state;
  }
};

const newTopic = (
  state = '',
  action
) => {
  switch (action.type) {
    case types.TYPING:
      return action.newTopic;
    case types.CREATE_TOPIC_REQUEST:
      return '';
    default:
      return state;
  }
};

const topicReducer = combineReducers({
  topics,
  newTopic
});

export default topicReducer;
