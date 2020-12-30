import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const NewsCard = ({
  date = "",
  content = {},
  title = {},
  _embedded = {},
}) => {
  
  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  const featuredImage = _embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.full?.source_url || "";
  const dateParts = date.split("T")?.[0]?.split("-") || [];
  const displayDate = dateParts.length === 3 ? `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}` : '';

  return (
    <div className="news-card">
      <ErrorBoundary message="Unable to load News Card">
        <h2 className="title">
          <span>{title.rendered || ""}</span>
          <span>{displayDate}</span>
        </h2>
        {featuredImage && <div className="featured-image" style={{ backgroundImage: `url(${featuredImage})` }}></div>}
        <div dangerouslySetInnerHTML={createMarkup(content.rendered || "")}></div>
      </ErrorBoundary>
    </div>
  );
};

export default NewsCard;
