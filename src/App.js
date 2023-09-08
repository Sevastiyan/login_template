import './App.css'
import { useEffect, useState } from 'react'
import LoginForm from './components/LoginForm'
function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedUser')
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson)
      setUser(user)
      console.log(user)
    }
  }, [])

  const handleLogin = async (userInput) => {
    console.log(userInput)
    try {
      const user = await loginService.login(userInput)

      window.localStorage.setItem('loggedUser', JSON.stringify(user))

      blogService.setToken(user.token)
      setUser(user)
    } catch (error) {
      notify('Wrong Username or Password', 'error')
      console.log('Wrong Credentials', error)
    }
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
      <header className='App-header'></header>
    </div>
  )
}

export default App
