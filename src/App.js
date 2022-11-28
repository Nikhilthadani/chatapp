import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./components/ChatPage";
function App() {
  return (
    <div>
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat/:roomId" element={<ChatPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
