import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";

function Dessert({ dessert }) {
  const { yourCart, dispatch } = useGlobalContext();
  return (
    <div className="card">
      <picture>
        <source
          media="(min-width: 400px)"
          srcSet={dessert.image.mobile}
          width={327}
          height={240}
        />
        <source
          media="(min-width: 600px)"
          srcSet={dessert.image.tablet}
          width={213}
          height={212}
        />
        <source
          media="(min-width: 996px)"
          srcSet={dessert.image.desktop}
          width={250}
          height={240}
        />
        <img className="card__image" src={dessert.image.thumbnail} alt="" />
      </picture>
      <div className="card__buttons">
        {false && (
          <button className="btn card__add">
            <img
              src="../images/icon-add-to-cart.svg"
              alt=""
              width={20}
              height={20}
            />
            <span>Add to Cart</span>
          </button>
        )}
        <div className="btn card__amount__buttons">
          <button className="card__amount__btn">
            <svg
              width="10"
              height="2"
              viewBox="0 0 10 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00012207 0.375H10.0001V1.625H0.000112207V0.375Z"
                fill="white"
              />
            </svg>
          </button>
          <span className="card__amount">5</span>
          <button className="card__amount__btn">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0001 4.375H5.62512V0H4.37512V4.375H0.00012207V5.625H4.37512V10H5.62512V5.625H10.0001V4.375Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="card__body">
        <p className="card__category">{dessert.category}</p>
        <p className="card__name">{dessert.name}</p>
        <p className="card__price">{formatPrice(dessert.price)}</p>
      </div>
    </div>
  );
}

export default Dessert;
