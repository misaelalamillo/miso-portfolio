import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import Footer from "./Footer"

function Contact(props) {
  return (
    <div>
      <h1 className="text-center">Contact Page</h1>
      <div className="card">
        <div className="content">
        <ul>
          <li>
            <strong>Name: Misael Alamillo</strong>
          </li>
          <li>
            <strong>Occupation: Full Stack Web Developer</strong>
          </li>
          <li>
            <strong>Location: Houston,Texas</strong>
          </li>
          <li>
            <strong>Email: misaelalamillo@gmail.com</strong>
          </li>
          <li>
            <strong>Phone Number: 346-813-2775</strong>
          </li>
          <li>
            <a className="nav-link" href="https://www.linkedin.com/in/misael-alamillo-43613319b/">LinkedIn</a>
          </li>
          <li>
          <a className="nav-link" href="https://github.com/misaelalamillo">Github</a>
          </li>
        </ul>
      </div>
    </div>
    <Footer>

    </Footer>
      
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Want to know something?
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Want to not know something?
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  );
}

export default Contact;
