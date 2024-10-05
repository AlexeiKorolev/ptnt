import React, { useState } from 'react';
import styles from './MainPage.module.css';

const MainPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [generatedText, setGeneratedText] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleGenerate = () => {
    // Placeholder for generate functionality
    setGeneratedText('Generated text will appear here.');
    // Add a message to the chat
    

    setChatMessages([...chatMessages, { text: 'Text generated!', sender: 'system' }]);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, sender: 'user' }]);
      event.target.reset();
    }
  };

  return (
    <div className={styles.mainPage}>
      <div className={styles.leftSection}>
        <div className={styles.addFile}>
          <h2>Add File</h2>
          <input type="file" onChange={handleFileChange} />
          {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </div>
        <button className={styles.generateButton} onClick={handleGenerate}>Generate</button>
      </div>
      
      <div className={styles.middleSection}>
        <h2>Generated Text</h2>
        <div className={styles.textDisplay}>
          {generatedText || 'Your generated text will appear here.'}
        </div>
      </div>
      
      <div className={styles.rightSection}>
        <h2>Chat</h2>
        <div className={styles.chatWindow}>
          {chatMessages.map((msg, index) => (
            <div key={index} className={`${styles.chatBubble} ${styles[msg.sender]}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className={styles.chatInput}>
          <input type="text" name="message" placeholder="Type a message..." />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default MainPage;