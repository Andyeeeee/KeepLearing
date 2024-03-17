export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>

      <form action="">
        <label>
          <span>Your gmail</span>
          <input type="email" name="email" required />
        </label>
        <label >
          <span>Your Message</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </form>

    </div>
  )
}