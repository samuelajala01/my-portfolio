import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const ContactPage = () => {
  return (
    <>
      <section id="contact">
        <h4>Reach Out :</h4>
        <div className="contact-container">
          <div className="form-div">
            <h5>Leave a message:</h5>
            <form
              action="https://formsubmit.co/d7fcbe04758434a6608acbab04f926d1"
              method="POST"
            >
              <div className="row">
                <div className="input-group">
                  <input type="text" id="name" name="name" required />
                  <label htmlFor="name">
                    {" "}
                    <i className="fas fa-user"></i> Your Name
                  </label>
                </div>
                <div className="input-group">
                  <input type="text" id="email" name="email" required />
                  <label htmlFor="email">
                    {" "}
                    <i className="fas fa-envelope"></i> Email id
                  </label>
                </div>
              </div>
              <div class="input-group">
                <input type="text" id="head" name="name" required />
                <label htmlFor="name">
                  <i className="fas fa-envelope-open-text"></i> Message Subject
                </label>
              </div>
              <input
                type="hidden"
                name="_subject"
                value="New submission From Portfolio!"
              />
              <div className="input-group">
                <textarea
                  id="message"
                  rows="8"
                  name="message"
                  required
                ></textarea>
                <label htmlFor="message">
                  {" "}
                  <i className="fas fa-comments"></i> Your Message
                </label>
              </div>
              <input
                type="hidden"
                name="_next"
                value="https://samuelajala.netlify.app/form-response.html"
              />
              <button id="submit-btn" type="submit">
                SEND <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="other-div">
            <h5>Contact Info</h5>
            <div>
              <i className="fas fa-user"></i>
              <p>
                Name
                <br />
                <span>Samuel Ajala</span>
              </p>
            </div>
            <div>
              <i className="fas fa-at"></i>
              <p>
                Email
                <br />
                <span>
                  <a href="mailto:https://formsubmit.co/el/rucepo">
                    Send email
                  </a>
                </span>
              </p>
            </div>
            <div>
              <i className="fa-brands fa-hashnode"></i>
              <p>
                Blog
                <br />
                <span>
                  <a href="https://samuelajala01.hashnode.dev">
                    samuelajala01.hashnode.dev
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
