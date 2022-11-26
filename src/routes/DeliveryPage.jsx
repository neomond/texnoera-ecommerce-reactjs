import React from "react";
import "./styles/DeliveryPage.css";
import deliveryMainImg from "../assets/delivery-main-img.png";
import deliveryTimeImg from "../assets/delivery-time.png";
import deliveryPresentImg from "../assets/delivery-present.png";
import deliveryImg from "../assets/faq-img.png";

import data from "../data/faq-delivery.json";
import ShowRoomForm from "../pages/ShowRoomForm";

const DeliveryPage = () => {
  return (
    <>
      <div className="delivery-wrapper">
        <div className="delivery-header">Delivery</div>
        <div className="delivery-content-1">
          <div className="delivery-img">
            <img src={deliveryMainImg} alt="" />
          </div>
          <div className="delivery-info">
            <h4>DELIVERY TYPES</h4>
            <p>
              The mechanism of our work is thought out to the smallest detail.
              You don't have to worry and wait a long time.
            </p>
            <p>
              The delivery service operates seven days a week from 8 am to 1 am.
              We carry out delivery in Moscow and the nearest suburbs.
            </p>
            <p>
              When placing an order, simply select the time interval that suits
              you and we will deliver your products exactly at the specified
              time.
            </p>
            <div className="delivery-info-items">
              <div className="delivery-info-item-top">
                <p>Delivery time from confirmation order - 1-3 days.</p>
                <div>
                  <img src={deliveryTimeImg} alt="" />
                </div>
              </div>
              <div className="delivery-info-item-bottom">
                <div>
                  <p>
                    Delivery to all regions is carried out on a 100% prepayment
                    on our website by any card, courier service to the door.
                  </p>
                  <p>
                    When buying in the amount of 15,000 rubles or more, delivery
                    as a gift, in other cases 500 rubles, abroad 1,200 rubles.
                  </p>
                </div>
                <div>
                  <img src={deliveryPresentImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="delivery-content-2-header">FAQ</h4>
        <div className="delivery-content-2">
          {data.map((content) => (
            <div className="delivery-grid-info" key={content.id}>
              <div className="delivery-grid-header">
                <p>{content.headerdata}</p>
                <img src={deliveryImg} alt={content.id} />
              </div>
              <div className="delivery-grid-description">
                <p>{content.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ShowRoomForm />
    </>
  );
};

export default DeliveryPage;
