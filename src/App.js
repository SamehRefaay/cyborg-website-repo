import "./App.css";
import { Header, Container, Footer, Hero } from "./sections/index";

function App() {
  return (
    <div className="App container">
      <Header />
      <Container>
        <Hero />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
