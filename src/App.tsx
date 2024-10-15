import "./App.css";
import MyForm from "./zod+ReactHook/Form";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <MyForm />
      </div>
    </div>
  );
}

export default App;
