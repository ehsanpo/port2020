import React from "react";
import { Link } from "gatsby";
import "./box.scss";
import LocalImage from "../LocalImage";

const Box = ({ node }) => {
  const { id, title, tag, permalink, category, logo } = node;
  console.log(node, "node");
  return (
    <Link to={permalink} className="box">
      <span className="box__glitch"></span>
      <div className="header">
        <span>
          {id}
          {""}
        </span>{" "}
        {category.map((cat) => (
          <>{`${cat} `}</>
        ))}
      </div>
      <hr />
      <div className="box-wrapper">
        {/* <LocalImage filename={logo} className="portfolio-image-thumb" /> */}
        <h3>{title}</h3>
        <div className="tags">
          {tag.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Box;
