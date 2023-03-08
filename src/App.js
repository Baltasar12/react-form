import {useState} from "react"

function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const handleEmailChange = ({target:{value}}) => setEmail(value);
  
  const handlePasswordChange = ({target:{value}}) => setPassword(value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Usuario: ${email}, Password: ${password}`);
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>Iniciar sesion</h2>
        <label>
          Correo
          <input type="email" value={email} onChange={handleEmailChange}/>
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={handlePasswordChange}/>
        </label>
        <button>Enter</button>
      </form>
    </div>
  );
}

export default App;
