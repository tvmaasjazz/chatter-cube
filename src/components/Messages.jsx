let Messages = ({messages}) => {
  console.log(messages);
  return (
    <div className="message-container">
      {messages.map((message) =>
        <Message message={message}/>
      )}
    </div>
  );
};

window.Messages = Messages;