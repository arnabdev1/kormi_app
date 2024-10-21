import { Link } from "react-router-dom";
import "./card.scss";
import { FaCalendar, FaClock } from "react-icons/fa";

function Card({ item }) {
  return (
    <div className="card"> 
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.hourlyPay}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <FaClock/>
              <span>{item.yearsExperience} years of experience</span>
            </div>
            <div className="feature">
              <FaCalendar/>
              <span>{item.age} years old</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
