const Login = () => {
    return (
      <div className="container">
          <h1> Login to our app</h1>
          <input type="email" placeholder="Adresse email"/>
          <input type="password" placeholder="Mot de passe"/>
          <button className="primary_button">Envoyer</button>
      </div>
    );
  }
  
  export default Login;