import React from 'react';
import Card from "react-bootstrap/Card";


function NewsCard({key,url,urlToImage,title,name,author,date}) {
  return (
    <div>
    <div className="col-4">
        <div id="titleColor" className="mt-5">
          <Card className="card" >
            <a href={url}>
              <Card.Img variant="top" src={urlToImage} />
            </a>

            <Card.Body>
              <Card.Title>
                <a href={url}>{title}</a>
              </Card.Title>
            </Card.Body>

            <Card.Footer>
              <span className="cardFooter">
                <a href="author">{author}</a>
                {" in "}
                <a href="sourceName">{name}</a>
              </span>
              <br />
              <span className="cardSpan">
                <a href="author">{date}</a>
              </span>
            </Card.Footer>
          </Card>
        </div>
      </div>
  </div>
  )
}

export default NewsCard