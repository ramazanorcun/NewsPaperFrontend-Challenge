import React from "react";
import CardComponent from "./CardComponent";

function CardList({ postData }) {
  return (
    <div className="cardList">
      {postData.map((post, index) => {
        return (
          <CardComponent
            key={index}
            image={post.urlToImage}
            name={post.source.name}
            url={post.url}
            title={post.title}
            author={post.author}
            description={post.description}
            date={post.publishedAt}
          />
        );
      })}
    </div>
  );
}

export default CardList;
