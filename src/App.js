import './App.css'
import { useEffect, useState } from 'react'
import LoginForm from './components/LoginForm'
import loginService from './services/login'

function App() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  // Store the current login on the local storage of the browser
  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedUser')
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson)
      setUser(user)
      console.log(user)
    }
  }, [])

  const handleLogin = async (userInput) => {
    console.log('User Input', userInput)
    // Proceed with login
    try {
      const credentials = userInput
      const user = await loginService.login(credentials)
      window.localStorage.setItem('loggedUser', JSON.stringify(user))

      setUser(user)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  const handleLogOut = () => {
    window.localStorage.removeItem('loggedUser')
    setUser(null)
  }

  if (user === null) {
    return (
      <div>
        <LoginForm onSubmit={handleLogin} />
      </div>
    )
  }

  return (
    <div className='App'>
      <button id='button-logout' onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  )
}

export default App
