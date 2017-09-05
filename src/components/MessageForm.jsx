let MessageForm = ({sendMessage, messageInputChange}) => (
  <div className="message-form">
    <h4>New Message</h4>
    <form onSubmit={sendMessage}>
      <input type="text" name="message" onChange={messageInputChange}/>
      <button>Submit</button>
    </form>
  </div>
);