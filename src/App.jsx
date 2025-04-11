import { Route, Routes } from "react-router-dom";
import "./App.css";
import TabIndicator from "./components/TabIndicator";

function App() {
  return (
    <div>
      {/* <TabIndicator /> */}
      <Routes>
        <Route path="/" element={<TabIndicator />}></Route>
        <Route path="tab" element={<TabIndicator />}></Route>
      </Routes>
    </div>
  );
}

export default App;
