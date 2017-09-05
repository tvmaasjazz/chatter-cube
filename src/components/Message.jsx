let Message = ({message}) => {

  return (
    <div className="message">
      <div>{message.username}</div>
      <div>{message.message}</div>
    </div>
  );
};

window.Message = Message;