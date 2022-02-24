import { BasketItem } from './BasketItem';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow,
    removeFromBasket,
    decrementOrder,
    incrementOrder,
  } = props;
  const totalPrice = order.reduce((total, element) => {
    return total + element.price * element.quantity;
  }, 0);
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            decrementOrder={decrementOrder}
            incrementOrder={incrementOrder}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item">Общая стоймость: {totalPrice} руб.</li>
      <li className="collection-item">
        <button className="btn">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export { BasketList };
