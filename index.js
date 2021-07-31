import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Item(props) {
  return <div className="item">
  <b>Item Name:</b> {props.name} <br />
  <b>Item Price:</b> ${props.price}
  </div>;
}

function App() {
  return <div>
    <Item name="Cheese" price="4.5" />
    <Item name="Oats" price="7.99" />
    <Item name="Milk" price="10" />
  </div>;
}

const el = <App />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);