import './App.css';
import {Routes, Route} from "react-router-dom";
import ChatPage from "./page/ChatPage";
import ChatLayout from "./layouts/ChatLayout";
function App() {
  return (
     <Routes>
        <Route path="*" element={
            <ChatLayout>
                <ChatPage />
            </ChatLayout>
        } />
     </Routes>
  );
}

export default App;
