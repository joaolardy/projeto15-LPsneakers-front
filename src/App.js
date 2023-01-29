import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaProduto from "./pages/PaginaProduto";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
        <Routes>
            <Route path="/produto/:id" element={<PaginaProduto />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
