import Desserts from "./components/Desserts";
import YourCart from "./components/YourCart";
import { useFetch } from "./hooks/useFetch";

function App() {
  const {
    data: desserts,
    error,
    isLoading,
  } = useFetch("https://json-api.uz/api/project/dessertss/desserts");
  return (
    <div className="container">
      {isLoading && (
        <div className="desserts">
          <h2 className="desserts__title">Loading...</h2>
        </div>
      )}
      {desserts && <Desserts desserts={desserts.data} />}
      <YourCart />
    </div>
  );
}

export default App;
