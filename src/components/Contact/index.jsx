import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94784.044379597!2d19.388763578578512!3d42.06458965181213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134e005bf998212f%3A0x7c0d3fbd64d1804e!2zU2hrb2TDq3IsIFNocWlww6tyaWE!5e0!3m2!1ssq!2s!4v1626381785924!5m2!1ssq!2s"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>+355 698187486</p>

      <h4>Email</h4>
      <p>zaureladibra@gmail.com</p>

      <h4>Address</h4>
      <p>Shkoder, Albania</p>
    </div>
  );
};

export default About;