import React from "react";

const NewsCard = ({
  id,
  date,
  content,
  title = {},
}) => {
  
  // ADD ERROR BOUNDARY TO APP
  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div className="news-card">
      <span className="title">{title.rendered || ""}</span>      
      <div dangerouslySetInnerHTML={createMarkup(content.rendered || "")}></div>
    </div>
  );
};

export default NewsCard;
