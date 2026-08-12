import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const endpoint = signState === 'Sign In' ? '/api/auth/login' : '/api/auth/signup';
    const payload = signState === 'Sign In' ? { email, password } : { name, email, password };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok) {
        if (signState === 'Sign In') {
          login(data.token, data.user);
          navigate('/');
        } else {
          // If signed up successfully, switch to sign in
          setSignState('Sign In');
          setError('Account created successfully! Please sign in.');
        }
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to connect to server');
    }
  };

  return (
    <div className="login">
        <img src={logo} className="login-logo" alt="" />
        <div className="login-form">
            <h1>{signState}</h1>
            {error && <p className="error-message" style={{ color: 'red', fontSize: '14px', textAlign: 'center', marginBottom: '10px' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                {signState === "Sign Up" && (
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  />
                )}
                
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
                <button type="submit">{signState}</button>
                <div className="form-help">
                    <div className="remember">
                        <input type="checkbox" />
                        <label htmlFor="">Remember Me</label>
                    </div>
                    <p>Need Help?</p>
                </div>
            </form>
            <div className="form-switch">
                {signState==="Sign In"?
                    <p>New to AnimeStream? <span style={{cursor:'pointer', textDecoration: 'underline'}} onClick={()=>{setSignState("Sign Up"); setError('');}}>Sign Up</span></p> 
                    : <p>Already have account? <span style={{cursor:'pointer', textDecoration: 'underline'}} onClick={()=>{setSignState("Sign In"); setError('');}}>Sign In</span></p>
                } 
                
            </div>
        </div>
    </div>
  )
}

export default Login