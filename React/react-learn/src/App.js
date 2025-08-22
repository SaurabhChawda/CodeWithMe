import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/hoc" />
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="*" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
