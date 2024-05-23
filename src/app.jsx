import { Route, Routes } from "react-router-dom";
import Home from "./home";
import SolutionLayout from "./solutionLayout";
import AppEx1 from "./Ex1/AppEx1";
import AppEx2 from "./Ex2/AppEx2";
import AppEx3 from "./Ex3/AppEx3";
import AppEx4 from "./Ex4/AppEx4";
import AppEx5 from "./Ex5/AppEx5";
import AppEx6 from "./Ex6/AppEx6";
import AppEx7 from "./Ex7/AppEx7";
import AppEx8 from "./Ex8/AppEx8";
import AppEx9 from "./Ex9/AppEx9";
import AppEx10 from "./Ex10/AppEx10";

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
        <Route path="/Ex6" element={<AppEx6 />} />
        <Route path="/Ex7" element={<AppEx7 />} />
        <Route path="/Ex8" element={<AppEx8 />} />
        <Route path="/Ex9" element={<AppEx9 />} />
        <Route path="/Ex10" element={<AppEx10 />} />
      </Route>
    </Routes>
  );
}
