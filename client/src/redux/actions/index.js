import ACTION_TYPES from './actionTypes.js';

export const createLoadUserChatListAction = ( values ) => ( {
  type: ACTION_TYPES.LOAD_CHAT_LIST_REQUEST,
  values,
} );

export const createLoadUserChatListSuccessAction = ( values ) => ( {
  type: ACTION_TYPES.LOAD_CHAT_LIST_SUCCESS,
  values,
} );

export const createLoadUserChatListErrorAction = ( values ) => ( {
  type: ACTION_TYPES.LOAD_CHAT_LIST_ERROR,
  values,
} );

export const createLoginRequestAction = ( values ) => ( {
  type: ACTION_TYPES.LOGIN_REQUEST,
  values,

} );
export const createSignUpRequestAction = ( values ) => ( {
  type: ACTION_TYPES.SIGN_UP_REQUEST,
  values,

} );

export const createAuthSuccessAction = ( user ) => ( {
  type: ACTION_TYPES.AUTH_SUCCESS,
  user,
} );

export const createAuthErrorAction = ( error ) => ( {
  type: ACTION_TYPES.AUTH_ERROR,
  error,
} );

export const createSelectChatAction = ( chatId ) => ( {
  type: ACTION_TYPES.SELECT_CHAT_ACTION,
  chatId,
} );

export const createLoadChatMessagesSuccessAction = ( data ) => ( {
  type: ACTION_TYPES.LOAD_CHAT_MESSAGES_SUCCESS,
  data
} );

export const createLoadChatMessagesErrorAction = ( error ) => ( {
  type: ACTION_TYPES.LOAD_CHAT_MESSAGES_ERROR,
  error
} );

//WS
export const createSendMessageRequestAction = ( currentChat, message, userId ) => ( {
  type: ACTION_TYPES.SEND_MESSAGE_REQUEST,
  currentChat,
  message,
  userId
} );

export const createSendMessageErrorAction = ( error ) => ( {
  type: ACTION_TYPES.SEND_MESSAGE_ERROR,
  error
} );

export const createGetMessageSuccessAction = ( data ) => ( {
  type: ACTION_TYPES.SEND_MESSAGE_SUCCESS,
  data,
} )

export const createGetMessageErrorAction = ( error ) => ( {
  type: ACTION_TYPES.SEND_MESSAGE_ERROR,
  error
} );

//ALL CHATS
export const createLoadAllChatRequest = () => ( {
  type: ACTION_TYPES.LOAD_ALL_CHATS_REQUEST
} );

export const createLoadAllChatSuccess = ( data ) => ( {
  type: ACTION_TYPES.LOAD_ALL_CHATS_SUCCESS,
  data
} );

export const createLoadAllChatError = ( error ) => ( {
  type: ACTION_TYPES.LOAD_ALL_CHATS_ERROR,
  error
} );

//delete chat action
export const createDeleteChatAction = ( currentChat, userId ) => ( {
  type: ACTION_TYPES.DELETE_CHAT_REQUEST,
  currentChat,
  userId
} );

export const createDeleteChatSuccess = ( data ) => ( {
  type: ACTION_TYPES.DELETE_CHAT_SUCCESS,
  data
} );

export const createDeleteChatError = ( error ) => ( {
  type: ACTION_TYPES.DELETE_CHAT_ERROR,
  error
} );

//leave chat action
export const createLeaveChatRequestAction = ( currentChat, userId ) => ( {
  type: ACTION_TYPES.LEAVE_CHAT_REQUEST,
  currentChat,
  userId
} );

export const createLeaveChatSuccessAction = ( data ) => ( {
  type: ACTION_TYPES.LEAVE_CHAT_SUCCESS,
  data
} );

export const createLeaveChatErrorAction = ( error ) => ( {
  type: ACTION_TYPES.LEAVE_CHAT_ERROR,
  error
} );

//join user to chat
export const createJoinUserToChatRequestAction = ( chatId, userId ) => ( {
  type: ACTION_TYPES.JOIN_USER_TO_CHAT_REQUEST,
  chatId,
  userId
} );

export const createJoinUserToChatSuccessAction = ( data ) => ( {
  type: ACTION_TYPES.JOIN_USER_TO_CHAT_SUCCESS,
  data
} );

export const createJoinUserToChatErrorAction = ( error ) => ( {
  type: ACTION_TYPES.JOIN_USER_TO_CHAT_ERROR,
  error
} );

//GET notif
export const createGetNotificationSuccessAction = ( message, chatId ) => ( {
  type: ACTION_TYPES.GET_NOTIFICATION_SUCCESS,
  message,
  chatId,
} );

//delete notif
export const createDeleteNotificationAction = ( messageId ) => ( {
  type: ACTION_TYPES.DELETE_NOTIFICATION_ACTION,
  messageId,
} );

//CREATE CHAT
export const createChatCreationRequestAction = ( chatName, userId ) => ( {
  type: ACTION_TYPES.CREATE_CHAT_REQUEST,
  chatName,
  userId
} );

export const createChatCreationSuccessAction = ( data ) => ( {
  type: ACTION_TYPES.CREATE_CHAT_SUCCESS,
  data
} );

export const createChatCreationErrorAction = ( error ) => ( {
  type: ACTION_TYPES.CREATE_CHAT_ERROR,
  error
} );

//clear selected chat
export const createClearChatAction = () => ( {
  type: ACTION_TYPES.CLEAR_CHAT_REQUEST
} );

export const createGetUserAction = ( userId ) => ( {
  type: ACTION_TYPES.GET_USER_LOGIN_REQUEST,
  userId
} );

export const createGetUserActionSuccess = ( data ) => ( {
  type: ACTION_TYPES.GET_USER_LOGIN_SUCCESS,
  data
} );

export const createGetUserActionError = ( error ) => ( {
  type: ACTION_TYPES.GET_USER_LOGIN_ERROR,
  error
} );

export const createToggleMenuAction = () => ( {
  type: ACTION_TYPES.TOGGLE_MENU_ACTION
} );

export const createCloseMenuAction = () => ( {
  type: ACTION_TYPES.CLOSE_MENU_ACTION
} );

export const createUserToggleMenuAction = () => ( {
  type: ACTION_TYPES.TOGGLE_USER_MENU_ACTION
} );

export const createUserCloseMenuAction = () => ( {
  type: ACTION_TYPES.CLOSE_USER_MENU_ACTION
} );

