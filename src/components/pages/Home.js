import React from "react";
import Footer from "./Footer"

function Home() {
  return (
    <div>
      <h1 className="text-center">Home</h1>
      <br/>
      <div className="card">
        <div className="text-center">
         Quote
        </div>
          <div className="card-body">
          <blockquote className="blockquote mb-0">
          <p>Things happen for a reason, we might never know that reason but it happened so...keep on living</p>
          <footer className="blockquote-footer">Future Millionaire <cite title="Source Title">Houston</cite></footer>
          </blockquote>
        </div>
        
</div>
    <Footer></Footer>
      
    </div>
  );
}

export default Home;
