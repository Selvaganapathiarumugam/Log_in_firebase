import "./App.css";
import { signInWithGoogle } from "./services/firebase";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1>Google Authentication</h1>
      <Button variant="outline-primary"  onClick={signInWithGoogle}>Sign In </Button>
      <h3>{localStorage.getItem("name")}</h3>
      <h3>{localStorage.getItem("email")}</h3>
      <Image src={localStorage.getItem("profilePic")} roundedCircle />
    </div>
  );
}

export default App;
