import { Route, Routes } from "react-router-dom";
import { WelcomePage } from "./pages";

function App() {
  return (
    <div className="relative min-w-screen min-h-dvh overflow-auto">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </div>
  );
}
export default App;
