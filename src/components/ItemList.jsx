import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <LineItem
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
