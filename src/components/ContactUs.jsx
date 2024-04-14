export const ContactUs = () => {
  return (
    <section>
      <form>
        <h1>Contact Us</h1>
        <label>First Name:</label>
        <input name="myEmail" type="text" />
        <label>Email Address:</label>
        <input name="myEmail" type="text" />
        <label>Message:</label> <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};
