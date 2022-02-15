import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      isLoaded: false,
      page: 1,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pages=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ isLoaded: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      isLoaded: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleOnPrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleOnNexClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-2">
        <h4 className="text-center" style={{ margin: "30px 0" }}>
          Daily planet's Top headlines
        </h4>
        {this.state.isLoaded && <Loading />}
        <div className="row">
          {!this.state.isLoaded &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-2">
          <button
            type="button"
            className="btn btn-dark btn-sm"
            disabled={this.state.page <= 1}
            onClick={this.handleOnPrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark btn-sm"
            onClick={this.handleOnNexClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
