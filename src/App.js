import "./App.css";
import GlobalStyle from "./GlobalStyle";
import React, { useState } from "react";
import StyledButton from "./components/StyledButton";
import StyledButtonsContainer from "./components/StyledButtonsContainer";
import StyledForm from "./components/StyledForm";
import StyledContainer from "./components/StyledContainer";

function App() {
  const [items, setItems] = useState([
    {
      _id: "c2hvcHBpbmcuaXRlbTox",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Pineapple", de: "Ananas" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbToy",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Apples", de: "Äpfel" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbToz",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Apricots", de: "Aprikosen" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbTo0",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Artichokes", de: "Artischocken" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbTo1",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Aubergine", de: "Aubergine" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbTo2",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Oyster mushrooms", de: "Austernpilze" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbTo3",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Avocado", de: "Avocado" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbTo4",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Baby spinach", de: "Babyspinat" },
    },
    {
      _id: "c2hvcHBpbmcuaXRlbTo5",
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: "Bananas", de: "Bananen" },
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <h1>Shopping List</h1>
        <StyledButtonsContainer>
          {items.map((item) => {
            return (
              <StyledButton
                key={items._id}
                type="button"
                onClick={() => {
                  setItems(
                    items.filter((item_) => {
                      return item_._id !== item._id;
                    })
                  );
                }}
              >
                {item.name.de}{" "}
              </StyledButton>
            );
          })}
        </StyledButtonsContainer>
        <StyledForm>
          <input type="search" placeholder="search..."></input>
        </StyledForm>
      </StyledContainer>
    </>
  );
}

export default App;
