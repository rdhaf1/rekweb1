import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Drink",
        info:
          "Jika buku yang dipesan lebih dari 1,costumer mendapatkan 2 cup minuman gratis"
      },
      {
        icon: <FaHiking />,
        title: "All Track",
        info:
          "Jika alamat sesuai dengan pesanan,semua jalur kami lalui untuk mengantar barang sampai ke costumer"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Ongkir",
        info:
          "Jika costumer memesan banyak buku dalam bentuk per 1 lusin atau lebih akan mendapatkan free ongkir"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
