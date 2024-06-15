import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate, Route, Routes } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import Home from "./routes/Home.js";
import Accessory from "./routes/Accessory.js";
import Cart from "./routes/Cart.js";
import data from "./data.js";
import { useState } from "react";
import Detail from "./routes/Detail.js";

function App() {
  let navigate = useNavigate();
  let [necklace, setNecklace] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/accessory");
              }}
            >
              Accessory
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/detail/:id"
          element={<Detail necklace={necklace}></Detail>}
        ></Route>
        <Route
          path="/accessory"
          element={<Accessory necklace={necklace}></Accessory>}
        ></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
