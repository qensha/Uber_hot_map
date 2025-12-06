import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwMezPyrV7c1qLHSJQOoRN7K5Y_bqIRCk",
  authDomain: "map-uber-aa88e.firebaseapp.com",
  projectId: "map-uber-aa88e",
  storageBucket: "map-uber-aa88e.firebasestorage.app",
  messagingSenderId: "80897507660",
  appId: "1:80897507660:web:02ca4c8a8754e9d9b60fe9",
  measurementId: "G-9NXPSBFS95"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 挂载到 window 才能被 HTML 调用
window。loginWithGoogle = function () {
  signInWithPopup(auth, provider)
    。键，然后((result) => {
      alert("欢迎：" + result.user.displayName);
    })
    。catch((error) => {
      console.error("登录失败：", error);
      alert("登录失败，请检查控制台");
    });
};

