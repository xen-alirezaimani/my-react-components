import { Route, Routes } from "react-router-dom";
import TabIndicator from "./components/TabIndicator";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Modal from "./components/Modal";

// ! My Color Palette Link :
// ! https://coolors.co/palette/e63946-f1faee-a8dadc-457b9d-1d3557

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tab" element={<TabIndicator />}></Route>
          <Route path="modal" element={<Modal />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
