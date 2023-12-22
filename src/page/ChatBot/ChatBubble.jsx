import { useState, useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import Box from '@mui/material/Box';
import ChatBox from './Chatbox';

export const ChatBubble = () => {
  const [showChatBox, setShowChatBox] = useState(false);
  const chatBoxRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
        setShowChatBox(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleChatBox = () => {
    setShowChatBox(!showChatBox);
  };

  return (
    <div>
      {/* Bong bóng chat nổi */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '50%',
          width: '70px',
          height: '70px',
          textAlign: 'center',
          cursor: 'pointer',
          display: showChatBox ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '999',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
        onClick={toggleChatBox}
      >
        <Avatar
          style={{
            backgroundColor: '#fff',
            color: '#007bff',
            width: '40px',
            height: '40px',
          }}
        >
          <ChatIcon />
        </Avatar>
      </div>

      {/* Chatbox hiển thị khi được click */}
      {showChatBox && (
        <Box
          ref={chatBoxRef}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#fff',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            width: '400px',
            height: '500px',
            zIndex: '998',
            opacity: showChatBox ? 1 : 0,
            transition: 'opacity 0.5s',
          }}
        >
          <ChatBox/>
        </Box>
      )}
    </div>
  );
};

