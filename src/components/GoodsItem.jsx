function GoodsItem(props) {
  const {
    offerId: id,
    displayName: name,
    displayAssets,
    displayDescription,
    price: { finalPrice: price },
    addToBasket,
  } = props;

  return (
    <div className="col s1 m3">
      <div className="card">
        <div className="card-image">
          <img src={displayAssets[0].full_background} alt={name} />
        </div>
        <div className="card-content">
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
          <button
            className="btn"
            onClick={() =>
              addToBasket({
                id,
                name,
                price,
              })
            }
          >
            Купить
          </button>
          <span className="right">{price} руб.</span>
        </div>
      </div>
    </div>
  );
}

export { GoodsItem };
