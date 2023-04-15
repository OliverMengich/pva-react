import React, { useEffect, useRef } from 'react';
import { createDirectLine, createStore } from 'botframework-webchat';
import WebChat from 'botframework-webchat';

const BotApp = () => {
  const directLineRef = useRef<ReturnType<typeof createDirectLine>>();
  const storeRef = useRef<ReturnType<typeof createStore>>();

  useEffect(() => {
    directLineRef.current = createDirectLine({
      secret: process.env.REACT_APP_DIRECT_LINE_SECRET || '',
    });

    storeRef.current = createStore({}, ({ dispatch }:{dispatch: unknown}) => next => action => {
        console.log(action);
      if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
        setTimeout(() => {
          dispatch({
            type: 'WEB_CHAT/SEND_MESSAGE',
            payload: { text: 'Hello, I want to Schedule an Appointment' }
            // Welcome, I am you Virtual Scheduling Assistance, how can I help you today.
          });
        }, 1000);
      }

      return next(action);
    });
  }, []);
  console.log(directLineRef.current);
  return (
    <WebChat
      
      directLine={directLineRef.current}
      userID="Leomessi"
      store={storeRef.current}
    />
  );
};

export default BotApp;
