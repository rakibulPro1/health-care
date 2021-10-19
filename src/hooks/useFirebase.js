import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // google sign in
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // logout auth
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("on changed state", user);
        setUser(user);
      }
    });
  }, []);

  //   handle email and password, name
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  //handle password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const createUserWithEmailAndPass = (e) => {
    console.log(email, password);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUserName();
        const user = userCredential.user;
        setUser(user);

        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // sign in with email and password
  const signInUsingEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    signInUsingGoogle,
    user,
    error,
    logOut,
    handleName,
    handleEmail,
    handlePassword,
    signInUsingEmail,
    createUserWithEmailAndPass,
  };
};

export default useFirebase;
