function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket,
    decrementOrder,
    incrementOrder,
  } = props;

  return (
    <li id={id} className="collection-item active">
      {name}
      <button
        className="waves-effect white btn  btn-count"
        onClick={() => decrementOrder(id)}
      >
        -
      </button>
      {quantity}шт.
      <button
        className="waves-effect white btn btn-count"
        onClick={() => incrementOrder(id)}
      >
        +
      </button>
      = {price * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
