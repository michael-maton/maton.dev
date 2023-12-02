import React, { useState } from 'react';
import './portfolio.css';
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category.includes(categoryItem);
    });

    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          All
        </span>
        <span className="work__item" onClick={() => filterItem('Games')}>
          Games
        </span>
        <span className="work__item" onClick={() => filterItem('Mobile')}>
          Mobile
        </span>
        {/* <span className="work__item" onClick={() => filterItem('Design')}>
          Design
        </span> */}
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <div className="work__category_wrapper">
                {category.map((cat, index) => (
                  <span key={index} className="work__category">
                    {cat}
                  </span>
                ))}
              </div>
              {/* <span className="work__category">{category}</span> */}
              <h3 className="work__title">{title}</h3>
              <a
                href={elem.url}
                target="_blank"
                rel="noreferrer"
                className="work__button"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                {/* <i className="icon-link work__button-icon"></i> */}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
