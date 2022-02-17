import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pages=${page}&pageSize=${props.pageSize}`;
    setLoad(true);
    let data = await fetch(url);

    let parseData = await data.json();

    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoad(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const handleOnPrevClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  const handleOnNexClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  return (
    <div className="container my-2">
      <h4 className="text-center" style={{ margin: "30px 0" }}>
        Daily planet's Top headlines
      </h4>
      {load && <Loading />}
      <div className="row">
        {!load &&
          articles.map((element) => {
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
          disabled={page <= 1}
          onClick={handleOnPrevClick}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark btn-sm"
          onClick={handleOnNexClick}
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
