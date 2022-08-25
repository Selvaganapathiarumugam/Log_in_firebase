
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from  'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD4JSrhXgxI7y9WAlXmtVOqjW7H4JsdZ04",
  authDomain: "reactcrud-3c5f7.firebaseapp.com",
  databaseURL: "https://reactcrud-3c5f7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactcrud-3c5f7",
  storageBucket: "reactcrud-3c5f7.appspot.com",
  messagingSenderId: "573485827248",
  appId: "1:573485827248:web:d554bc48f4be5b72026775",
  measurementId: "G-8P7JET5TNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result)=>{
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
    }).catch(error => console.log(error))
}
