import React, { useState } from "react"
import { toast } from "react-toastify";
import api from "../../api";
import { setToken, setUser } from "../../services/user";
import './styles.css'

export const Login = () => {

  const [logintype, setLogintype] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginTypeClick(value: boolean) {
    setLogintype(value)
  }

  const canLogin = (username && password);

  function handleLoginClick(event: React.FormEvent) {
    event.preventDefault();

    switch (logintype) {
      case true:
        api.singIn({ username, password })
          .then(res => {
            if (!res.success) { toast.error(res.message); return }
            setUser(res);
            const token = btoa(`${username}:${password}`);
            setToken(token);
            window.location.reload()
          })
        break;
      case false:
        api.logIn({ username, password })
          .then(res => {
            if (!res.success) { toast.error(res.message); return }
            setUser(res);
            const token = btoa(`${username}:${password}`);
            setToken(token);
            window.location.reload()
          })
        break;
    }
  }

  return (
    <>
      <main className="container">
        <article className="grid">
          <div>
            <div className="form-header">
              <button className={`outline ${!logintype ? "secondary" : ""}`} onClick={() => handleLoginTypeClick(true)} >Sing Up</button>
              <button className={`outline ${logintype ? "secondary" : ""}`} onClick={() => handleLoginTypeClick(false)} >Log In</button>
            </div>
            <form>
              <input type="text" name="login" placeholder="Login" aria-label="Login" autoComplete="nickname" required value={username} onChange={(event) => setUsername(event.target.value)} />
              <input type="password" name="password" placeholder="Password" aria-label="Password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} />

              <button type="submit" disabled={!canLogin} onClick={handleLoginClick}>{logintype ? "Sign Up" : "Log In"}</button>
            </form>
          </div>
          <div className="login-image"></div>
        </article>
      </main>
    </>
  )
}
