import React from "react";
import Card from "./Card";

const ListItem = (props) => {
  const data = props.data;
  const listItem = data.map((user) => {
    return (
      <Card
        key={user.name}
        props={user}
      />
    );
  });
  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {listItem}
    </div>
  );
};
export default ListItem;
