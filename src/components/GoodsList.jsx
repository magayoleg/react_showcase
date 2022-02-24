import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  const { goods = [], addToBasket } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="row goods">
      {goods.map((item) => {
        return (
          <GoodsItem key={item.offerId} {...item} addToBasket={addToBasket} />
        );
      })}
    </div>
  );
}

export { GoodsList };
