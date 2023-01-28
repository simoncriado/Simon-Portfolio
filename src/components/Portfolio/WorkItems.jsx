import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
      {item.website !== "" ? (
        <a
          href={item.website}
          target="_blank"
          rel="noreferrer"
          className="work__button"
        >
          Visit Website
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      ) : (
        <></>
      )}

      <a
        href={item.github}
        target="_blank"
        rel="noreferrer"
        className="work__button"
      >
        GitHub Repo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
