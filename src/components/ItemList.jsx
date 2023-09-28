import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className="list-style-none container-sm">
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
