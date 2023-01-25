import Header from "./components/Header";
import Home from "./pages/Home";
import Challenge from "./components/Challenge";
import { Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import ChatScreen from "./pages/ChatScreen";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/categories/:categoryId" element={<Home />} />
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>

      {/* <Footer /> */}
      {/* <Challenge /> */}
    </>
  );
}

export default App;
