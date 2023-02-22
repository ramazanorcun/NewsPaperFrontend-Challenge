import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComponent from "../Components/CardComponent";
import "../css/card.css";
function Science() {
  const [science, setScience] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=f39df38a504545878f59b6d6e7a39aa7"
      )
      .then(function (response) {
        setScience(response.data.articles);
      });
  }, [refresh]);
 

  return (
    <div className="container m-5">
      <div className="row ">
        {science.map((post, index) => {
          return (
            <div id="cardBusiness" className="col-4">
              
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
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Science;
