import React from 'react'
import './Blog.css';

function Blog() {
  return (
    <div><div id="blog" className="container-fluid text-center bg-grey">
    <h2>Portfolio</h2>
    <br />
    <h4>What we have created</h4>
    <div className="row text-center slideanim">
      <div className="col-sm-4">
        <div className="thumbnail">
          <img src="https://picsum.photos/id/123/1200/600" alt="Paris" width={400} height={300} />
          <p>
            <strong>Paris</strong>
          </p>
          <p>Yes, we built Paris</p>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="thumbnail">
          <img src="https://picsum.photos/id/456/1200/600" alt="New York" width={400} height={300} />
          <p>
            <strong>lake</strong>
          </p>
          <p>We love lakes</p>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="thumbnail">
          <img src="https://picsum.photos/id/678/1200/600" alt="San Francisco" width={400} height={300} />
          <p>
            <strong>mountains</strong>
          </p>
          <p>Yes,we love mountains</p>
        </div>
      </div>
    </div>
    <br />
  </div>
  </div>
  )
}

export default Blog