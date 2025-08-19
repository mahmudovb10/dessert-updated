import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";

function Dessert({ dessert }) {
  const { yourCart, dispatch } = useGlobalContext();

  const addedItem = yourCart.find((item) => item.id === dessert.id);

  return (
    <div className="card">
      <picture>
        <source media="(min-width: 400px)" srcSet={dessert.image.mobile} />
        <img className="card__image" src={dessert.image.thumbnail} alt="" />
      </picture>

      <div className="card__buttons">
        {!addedItem ? (
          <button
            className="btn card__add"
            onClick={() => {
              console.log(dessert);
              dispatch({
                type: "ADD_CART",
                payload: { ...dessert, amount: 1 },
              });
            }}
          >
            <img
              src="../images/icon-add-to-cart.svg"
              alt=""
              width={20}
              height={20}
            />
            <span>Add to Cart</span>
          </button>
        ) : (
          <div className="btn card__amount__buttons">
            <button
              className="card__amount__btn"
              onClick={() =>
                addedItem.amount === 1
                  ? dispatch({ type: "REMOVE_CART", payload: dessert.id })
                  : dispatch({ type: "DECREMENT_AMOUNT", payload: dessert.id })
              }
            >
              -
            </button>
            <span className="card__amount">{addedItem.amount}</span>
            <button
              className="card__amount__btn"
              onClick={() =>
                dispatch({ type: "INCREMENT_AMOUNT", payload: dessert.id })
              }
            >
              +
            </button>
          </div>
        )}
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
