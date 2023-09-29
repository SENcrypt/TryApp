import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
