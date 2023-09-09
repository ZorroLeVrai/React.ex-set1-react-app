import { Route, Routes } from "react-router-dom";
import Home from "./home";
import SolutionLayout from "./solutionLayout";
import AppEx1 from "./Ex1/AppEx1";
import AppEx2 from "./Ex2/AppEx2";
import AppEx3 from "./Ex3/AppEx3";
import AppEx4 from "./Ex4/AppEx4";
import AppEx5 from "./Ex5/AppEx5";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<SolutionLayout />}>
        <Route path="/Ex1" element={<AppEx1 />} />
        <Route path="/Ex2" element={<AppEx2 />} />
        <Route path="/Ex3" element={<AppEx3 />} />
        <Route path="/Ex4" element={<AppEx4 />} />
        <Route path="/Ex5" element={<AppEx5 />} />
      </Route>
    </Routes>
  );
}
