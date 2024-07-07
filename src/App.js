import './App.css';
import { Routes, Route } from "react-router-dom";
import ChatPage from "./page/ChatPage";
import ChatLayout from "./layouts/ChatLayout";
import { MyProvider } from './components/provider/MyProvider';
function App() {
  return (
    <Routes>
      <Route path="*" element={
        <MyProvider>
          <ChatLayout>
            <ChatPage />
          </ChatLayout>
        </MyProvider>

      } />
    </Routes>
  );
}

export default App;
