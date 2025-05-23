// Importa os módulos necessários do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC2snVUjXiapr842pDeXRc50Tu7XSmsIHc",
  authDomain: "auth-firebase-83f21.firebaseapp.com",
  projectId: "auth-firebase-83f21",
  storageBucket: "auth-firebase-83f21.firebasestorage.app",
  messagingSenderId: "351867735932",
  appId: "1:351867735932:web:94f2bae61ac46abcfd5ef9",
  measurementId: "G-XQVRH8H9QM"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função para cadastrar usuário
window.cadastrar = function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then(userCredential => {
      alert("Cadastrado com sucesso");
      console.log("Usuário:", userCredential.user);
    })
    .catch(error => {
      alert("Falha ao cadastrar");
      console.error(error);
    });
};

// Função para login
window.login = function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then(userCredential => {
      alert("Logado com sucesso");
      console.log("Usuário:", userCredential.user);
    })
    .catch(error => {
      alert("Falha ao logar");
      console.error(error);
    });
};
