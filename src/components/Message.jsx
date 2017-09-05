let Message = ({message}) => {

  return (
    <div className="message">
      <div className="message--username">{message.username}</div>
      <div className="message--message">{message.message}</div>
    </div>
  );
};

window.Message = Message;