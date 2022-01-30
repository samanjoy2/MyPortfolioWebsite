import "./contact.scss";

export default function Contact() {

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return <div className='contact' id="contact">
    <div className="left">
      <img src="assets/git.png" alt="" />
    </div>
    <div className="right">
      <h2>Contact.</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>;
}
