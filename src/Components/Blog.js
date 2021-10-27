import React, { Component } from "react";

class Blog extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;

        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="blog">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Read More</h1>
            <div className="blog-wrapper">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6515130486619242496"
                height="391"
                width="450"
                frameborder="0"
                allowfullscreen=""
                title="Embedded post"
              ></iframe>
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6791805033949347840"
                height="391"
                width="450"
                frameborder="0"
                allowfullscreen=""
                title="Embedded post"
              ></iframe>
            </div>
            {/* <div className="blog-wrapper">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6515130486619242496"
                height="391"
                width="450"
                frameborder="0"
                allowfullscreen=""
                title="Embedded post"
              ></iframe>
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6515130486619242496"
                height="391"
                width="450"
                frameborder="0"
                allowfullscreen=""
                title="Embedded post"
              ></iframe>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
