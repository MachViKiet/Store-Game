// ChatBox.jsx

import { useState } from "react";
import "./style.css"; // Import file CSS (đã tạo từ ví dụ trước)
import { Box, Button } from "@mui/material";

const ChatBox = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [autoReplies] = useState([
    {
      id: 1,
      question: "Finding your game",
      answer: "You can find your favorite games through many ways:\n1. Find by categories\n2. Use the search bar on top\n3. View the selection of games personally curated for you",
    },
    {
      id: 2,
      question: "Contact support",
      answer: "To contact us, you can file a form at our Contact page.\nOr you can send us an email at thequad@gmail.com",
    },
    {
      id: 3,
      question: "Perks of having an account!",
      answer: "Register a customer account with us to receive personalized recommendations, cart checkout, wishlist your favorite games,...",
    },
    {
      id: 4,
      question: "Developer information",
      answer: "This website was developed by TheQuad team consisting of 5 members.\n- Mạch Vĩ Kiệt\n- Nguyễn Duy Đăng Khoa\n- Trần Thái Toàn\n- Nguyễn Lê Thanh Nghĩa\n- Trần Minh Đạt",
    },
    // Thêm các câu hỏi và câu trả lời khác tại đây
  ]);

  //   const handleQuestionClick = (questionId) => {
  //     setSelectedQuestion(questionId);
  //     setUserInput("");
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      setMessages([...messages, 
        { id: messages.length + 1, text: userInput, role: 'req' },
        { id: messages.length + 2, text: "Sorry, We currently not support  !", role: 'res' }
    ]);
      setUserInput("");
    }
  };

  const handleAutoReply = (autoReply) => {
    setMessages([
      ...messages,
      { id: messages.length + 1, text: autoReply.question , role: 'req'},
      { id: messages.length + 2, text: autoReply.answer , role: 'res'},
    ]);
    setSelectedQuestion(null);
  };

  return (
    <Box className="chatbox-container">
      <Box className="chatbox-messages">
        {messages.map((msg) => 
            (
            <Box 
                key={msg.id} 
                sx = {{
                    display: 'flex',
                    justifyContent: 'space-between'
            }}>
                {msg.role == 'req' ? <></> : <div style={{width: '20px'}}></div> }
                <Box className="chatbox-message" sx = {{
                }}>
                    {msg.text}
                </Box>
            </Box>
            ))
        }
      </Box>

      <Box>
        <Box
          className="chatbox-auto-replies"
          sx={{
            display: "flex",
            gap: 3,
            overflow: "auto",
            mb: 1,
            pt: 2,
            borderTop: '1px solid #ccc'
          }}
        >
          {autoReplies.map((autoReply) => (
            <Button
              key={autoReply.id}
              className={`chatbox-auto-reply ${
                selectedQuestion === autoReply.id ? "selected" : ""
              }`}
              onClick={() => handleAutoReply(autoReply)}
              sx={{
                color: "#000",
                minWidth: "fit-content",
                borderRadius: 2,
                border: "1px solid #000",
                mb: 1,
              }}
            >
              {autoReply.question}
            </Button>
          ))}
        </Box>
        <Box className="user-input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={selectedQuestion !== null}
            />
            <button type="submit" disabled={selectedQuestion !== null}>
              Gửi
            </button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatBox;
