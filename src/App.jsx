import { Route, Routes } from "react-router-dom";
import "./App.css";
import TabIndicator from "./components/TabIndicator";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tab" element={<TabIndicator />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
