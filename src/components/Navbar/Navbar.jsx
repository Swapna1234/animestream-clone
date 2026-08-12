import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import vector from '../../assets/Vector.png'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={vector} alt="" /><p>StreamAnime</p>
        </div>
        <div className="navbar-center">
            <div className="nav-container">
                <button className="nav-item" onClick={() => navigate('/')}>Home</button>
                <button className="nav-item" onClick={() => navigate('/movies-shows')}>Movies & Shows</button>
                <button className="nav-item" onClick={() => navigate('/streaming-platform')}>Streaming Platform</button>
                <button className="nav-item" onClick={() => navigate('/qa')}>Q/A</button>
                <button className="nav-item" onClick={() => navigate('/subscriptions')}>Subscriptions</button>
            </div>
        </div>
        <div className="navbar-right">
            <div className="search-container" style={{ display: 'flex', alignItems: 'center' }}>
                {showSearch && (
                  <form onSubmit={handleSearchSubmit} style={{ marginRight: '10px' }}>
                    <input 
                      type="text" 
                      placeholder="Search anime..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      style={{ padding: '6px 12px', borderRadius: '4px', border: '1px solid #333', background: '#111', color: 'white', outline: 'none' }}
                    />
                  </form>
                )}
                <img src={search_icon} alt="Search" className='icons' onClick={() => setShowSearch(!showSearch)} style={{ cursor: 'pointer' }} />
            </div>
            
            <div className="notification-container" style={{ position: 'relative', display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                <img src={bell_icon} alt="Notifications" className='icons' onClick={() => setShowNotification(!showNotification)} style={{ cursor: 'pointer' }} />
                {showNotification && (
                  <div className="notification-dropdown" style={{
                    position: 'absolute', top: '100%', right: '0', background: '#1a1a1a', 
                    border: '1px solid #333', borderRadius: '8px', padding: '15px', 
                    marginTop: '25px', width: '250px', zIndex: 100, boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                  }}>
                    <h4 style={{ color: '#fff', marginBottom: '10px', fontSize: '14px' }}>Notifications</h4>
                    <div 
                      onClick={() => { setShowNotification(false); navigate('/player/21'); }} 
                      style={{ color: '#bbb', fontSize: '13px', cursor: 'pointer', padding: '10px', background: '#2a2a2a', borderRadius: '4px', transition: '0.3s' }}
                      onMouseOver={(e) => e.currentTarget.style.background = '#333'}
                      onMouseOut={(e) => e.currentTarget.style.background = '#2a2a2a'}
                    >
                      <strong style={{ color: '#fff' }}>New Episode Available!</strong><br/>
                      Click here to watch One Piece.
                    </div>
                  </div>
                )}
            </div>
            
            {user && (
              <div className="navbar-profile" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: '25px' }}>
                <span style={{ fontSize: '15px', fontWeight: '500', color: '#e5e5e5' }}>{user.name}</span>
                <button onClick={handleLogout} style={{ padding: '6px 12px', backgroundColor: '#e50914', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}>Sign Out</button>
              </div>
            )}
        </div>
    </div>
  )
}

export default Navbar