
import React from "react";

const Article = ({title, author, preview}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>By {author}</p>
    </div>
  )
};

export default Article;
