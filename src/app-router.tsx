import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@pages/home.component";

const AppRouter = () => {
  return (
    <BrowserRouter basename="/react-hexagonal-architecture">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
