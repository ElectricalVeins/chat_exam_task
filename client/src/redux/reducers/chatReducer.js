import ACTION_TYPES from '../actions/actionTypes.js';
import _            from 'lodash';

const initialState = {
  chatMessages: [],
  currentChat: null,
  error: null,
};

function chatsReducer( state = initialState, action ) {
  switch ( action.type ) {

    case ACTION_TYPES.SELECT_CHAT_ACTION:
      return {
        ...state,
        currentChat: action.chatId,
      };

    case ACTION_TYPES.LOAD_CHAT_MESSAGES_SUCCESS:

      const sortedMsg = action.data.slice().sort((a, b) => a.createdAt - b.createdAt);
      console.log(sortedMsg)
      return {
        ...state,
        chatMessages: sortedMsg,
      };

    case ACTION_TYPES.LOAD_CHAT_MESSAGES_ERROR:
      return {
        ...state,
        error: action.error
      };

    case ACTION_TYPES.SEND_MESSAGE_SUCCESS:
      console.log('success action',action);

      const newChatMessages=_.clone(state.chatMessages);
      newChatMessages.push(action.data);

      return{
        ...state,
        chatMessages: newChatMessages,
      };
    case ACTION_TYPES.SEND_MESSAGE_ERROR:
      return{
        ...state,
        error:action.error
      }

    default:
      return state;
  }

}

export default chatsReducer;