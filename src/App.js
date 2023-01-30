import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaProduto from "./pages/PaginaProduto";
import GlobalStyle from "./style/GlobalStyle";
import Login from "./pages/Login";

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
        <Routes>
            <Route path="/produto/:id" element={<PaginaProduto />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
