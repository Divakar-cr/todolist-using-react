import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "pratice Coding",
    },
    {
      id: 2,
      checked: false,
      item: "c++",
    },
    {
      id: 3,
      checked: true,
      item: "Python",
    },
  ]);
  const hand = (id) => {
    const lt = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(lt);
  };
  const handdel = (id) => {
    const lit = items.filter((item) => item.id !== id);
    setItems(lit);
  };
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => hand(item.id)}
              />
              <label>{item.item}</label>
              <FaTrashAlt
                role="button"
                onClick={() => handdel(item.id)}
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}> Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
