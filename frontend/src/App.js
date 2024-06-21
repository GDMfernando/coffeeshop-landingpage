import "./App.css";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import Footer from "./components/footer";
import ProductSection from "./components/productSection";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductSection />
      <Footer />
    </div>
  );
}
export default App;
