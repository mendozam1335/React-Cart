// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./Components/context";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
