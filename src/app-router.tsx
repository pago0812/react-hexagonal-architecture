import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./ui/pages/home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
