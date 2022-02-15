import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="card">
        <img
          src={
            imageUrl == null
              ? "https://e7.pngegg.com/pngimages/911/883/png-clipart-free-newspaper-headline-others-love-logo.png"
              : imageUrl
          }
          className="card-img-top"
          alt=""
          width={100}
        />
        <div className="card-body">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: "1", left: "85%" }}
          >
            {source}
          </span>

          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "unknown"} {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-outline-info"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
