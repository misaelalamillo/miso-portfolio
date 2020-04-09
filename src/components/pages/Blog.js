import React from "react";

function Blog() {
  return (
    <div>
      <h1 className="text-center">Projects</h1>
      <div className="card">
        <div className="card-body">
        <h5 className="card-title">Project #1</h5>
        <h6 className="card-subtitle mb-2 text-muted">Cocktails</h6>
        <p className="card-text">This was a homework were we used javascript, html, css and api's</p>
        <a href="https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d72e24d0-82c2-4f1e-bbba-ab6b011130f6/" className="card-link">Cocktails</a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
        <h5 className="card-title">Project #2</h5>
        <h6 className="card-subtitle mb-2 text-muted">Contract Bay</h6>
        <p className="card-text">This app we used javascript, html, css and learned how to use handlebars</p>
        <a href="https://protected-castle-07198.herokuapp.com/" className="card-link">Contract Bay</a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
        <h5 className="card-title">Assignment</h5>
        <h6 className="card-subtitle mb-2 text-muted">Burgers</h6>
        <p className="card-text">This was a homework were we used MySQL, Node, Express, Handlebars</p>
        <a href="https://pacific-sands-16555.herokuapp.com/" className="card-link">Burgers Time</a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
