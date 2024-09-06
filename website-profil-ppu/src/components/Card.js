import React from "react";

function Card({ id, title, img, content, additionalSections }) {
  return (
    <article id={id} className="card">
      <h2>{title}</h2>
      <img src={img} alt={title} className={`featured-image${id}`} />
      <p>{content}</p>
      {additionalSections &&
        additionalSections.map((section, index) => (
          <section key={index}>
            <h3>{section.title}</h3>
            <img src={section.img} alt={section.title} className="featured-image3" />
            <p>{section.content}</p>
          </section>
        ))}
    </article>
  );
}

export default Card;
