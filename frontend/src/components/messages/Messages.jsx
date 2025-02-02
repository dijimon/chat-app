import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages.js';
import useListenMessages from '../../hooks/useListenMessages.js';
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx';
import Message from './Message.jsx';
//import Message from './Message.jsx';

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
      <div className="px-4 flex-1 overflow-auto">
        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
        {!loading && messages.length === 0 && (
            <p className="text-center">Send a message to start the conversation.</p>
        )}
        {!loading && messages.length > 0 && messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
        ))}
      </div>
  );
};

export default Messages;

// Starter code snippet
//import Message from './Message.jsx';
//
//const Messages = () => {
//    return (
//        <div className="px-4 flex-1 overflow-auto">
//            <Message />
//            <Message />
//            <Message />
//            <Message />
//            <Message />
//            <Message />
//            <Message />
//            <Message />
//            <Message />
//            <Message />
//            <Message />
//            <Message />
//        </div>
//    )
//}
//
//export default Messages;
