import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Route from 'react-router-dom/es/Route'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsConteiner from './components/Dialogs/DialogsConteiner'
import UsersConteiner from './components/Users'
import ProfileConteiner from './components/Profile'
import HeaderConteiner from './components/Header/HeaderConteiner'
import Login from './components/Login/Login'

const App = () => {
  useEffect(() => {
    localStorage.setItem('key1', 'value1')
  })
  return (
    <div className="app-wrapper">
      <HeaderConteiner />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/login" render={() => <Login />} />
        <Route path="/profile/:userId?" render={() => <ProfileConteiner />} />
        <Route path="/dialogs" render={() => <DialogsConteiner />} />
        <Route path="/users" render={() => <UsersConteiner />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  )
}

export default App
