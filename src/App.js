// import logo from './logo.svg';
import "./App.css";
import { Box } from "@mui/material";
import ChatBody from "./maincomp/chatBody";
import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Box>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="colored"
        transition={Bounce}
      />
      <ChatBody />
    </Box>
  );
}

export default App;
