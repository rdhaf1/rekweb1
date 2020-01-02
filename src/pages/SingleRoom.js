import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

 
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such book could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to book
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      rating,
      size,
      price,
      extras,
      premium,
      reguler,
      images
    } = room;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} book's`}>
            <Link to="/rooms" className="btn-primary">
              back to books
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>halaman : {size} LEMBAR</h6>
              <h6>
                max rating :
                {rating > 1 ? `${rating} rating` : `${rating} rating`}
              </h6>
              <h6>{reguler ? "reguler allowed" : "no reguler allowed"}</h6>
              <h6>{premium && "premium included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Format Pemesanan </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
