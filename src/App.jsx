import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="containerDiv">
      <Navbar />
      <main className="main">
        <Body />
        <Footer />
      </main>
    </div>
  );
};
export default App;
