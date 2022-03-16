import "./App.css";
import Book from "./Book";
import Loader from "./Loader";

function App(props) {
  return props.isLoading ? (
    <Loader />
  ) : (
    <div className="App">
      <Book heading="Heading-Content-1" text="React for beginners" />
      <Book heading="Heading-Content-2" text="Vue for beginners" />
      <Book heading="Heading-Content-3" text="Angular for beginners" />
    </div>
  );
}

export default App;
