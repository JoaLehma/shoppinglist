import { useState, useEffect } from "react";
import StyledButton from "./StyledButton";

export default function Fetch() {
  const [getItems, setGetItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    const response = await fetch(
      "https://fetch-me.vercel.app/api/shopping/items"
    );

    if (response.ok) {
      const data = await response.json();
      setGetItems(data);
    }
  }
  console.log(getItems);

  /*   return (
    <div>
      <h2>TEST</h2>
      <div>
        {getItems.map((item) => {
          return <StyledButton>{item.name.de}</StyledButton>;
        })}
      </div>
    </div>
  ); */
}
