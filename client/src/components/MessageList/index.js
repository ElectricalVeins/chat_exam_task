import React, { Component, useEffect }                        from 'react';
import { connect }                                            from 'react-redux';
import styles                                                 from './MessageList.module.scss'
import MessageForm                                            from "../forms/MessageForm";
import { chatSocket }                                         from "../../api/ws";
import { createGetMessageSuccessAction, createGetUserAction } from "../../redux/actions";
import { LIST_ITEM_TYPE }                                     from "../../constants";
import MessageItem                                            from "../MessageItem";

const MessageList = ( props ) => {
  const {
    chats: {
      chatMessages,
      chatUsers
    },
    currentChat,
  } = props;

  const chatIsSelected = () => {
    return chatMessages.map( ( msg ) => {
      return ( <MessageItem key={msg._id}
                            messageId={msg._id}
                            authorId={msg.authorId._id}
                            author={msg.authorId}
                            body={msg.body}
                            updatedAt={msg.updatedAt}
                            messageClassName={styles.messageItem}/> )
    } )
  };

  return (
    <div className={styles.messageListContainer}>
      <div className={styles.inputWrapper}>
        {
          currentChat
          ? <MessageForm className={styles.formStyles}/>
          : null
        }
      </div>
      <ul className={styles.container}>
        {
          currentChat
          ? chatIsSelected()
          : ( <li style={{ textAlign: 'center' }}>Select a chat to start messaging</li> )
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return state.chatState;
};

export default connect( mapStateToProps )( MessageList );