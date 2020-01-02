import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
 
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    rating,
    price,
    minPrice,
    maxPrice,
    premium,
    reguler
  } = context;

  
  let types = getUnique(rooms, "type");
  
  types = ["all", ...types];
  
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  
  let people = getUnique(rooms, "rating");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search books" />
      <form className="filter-form">
        {}
        <div className="form-group">
          <label htmlFor="type">book type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {}
        {}
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <select
            name="rating"
            id="rating"
            onChange={handleChange}
            className="form-control"
            value={rating}
          >
            {people}
          </select>
        </div>
        {}
        {}
        <div className="form-group">
          <label htmlFor="price">book price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {}
        {}

        {}
        {}
        <div className="form-group">
          <p>Jenis Pengiriman</p>
          <div className="single-extra">
            <input
              type="checkbox"
              name="premium"
              id="premium"
              checked={premium}
              onChange={handleChange}
            />
            <label htmlFor="premium">premium</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="reguler"
              checked={reguler}
              onChange={handleChange}
            />
            <label htmlFor="premium">reguler</label>
          </div>
        </div>
        {}
      </form>
    </section>
  );
};

export default RoomsFilter;
