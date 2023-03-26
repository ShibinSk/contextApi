import Cart from "./components/cart/cart";
import List from "./components/list/list";
import CartPro from "./context/cart/cartContex";
function App() {
  return (
    <>
      <CartPro>
        <Cart />
        <List />
      </CartPro>
    </>
  );
}

export default App;
