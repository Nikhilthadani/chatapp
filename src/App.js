import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatPage from "./components/ChatPage";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

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
