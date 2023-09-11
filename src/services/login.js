import axios from 'axios'
const baseUrl = '/registeredUser'

//! Usually this has to be a POST Request and the server will handle the login
// Since we only have one user that we are interested in we use a GET request to get the user.
const getUserName = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

// Lets say this is the POST Request the server gets
const login = async (credentials) => {
  const { username, password } = credentials

  const user = await getUserName().then((users) => {
    console.log('My users', users)
    // typically depending on the model we should use a filter to identify the requested user
    return users
  })

  if (!isValidString(password)) {
    console.log('Password must contain letters, numbers and special characters')
    throw new Error('Password must contain letters, numbers and special characters')
  }
  // Here usually we should compare password hashes
  const passwordCorrect = user === null ? false : comparePassword(password, user.password)

  if (!(user && passwordCorrect)) {
    console.log('error', 'invalid username or password')
    throw new Error('invalid username or password')
  }

  // If we want we can create tokens but lets keep it simple

  return { user }
}

function isValidString(inputString) {
  // One regular expression for each condition
  const letterPattern = /[a-zA-Z]/
  const numberPattern = /[0-9]/
  const specialPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/

  const containsLetter = letterPattern.test(inputString)
  const containsNumber = numberPattern.test(inputString)
  const containsSpecialChar = specialPattern.test(inputString)

  // Return true if all conditions are met
  return containsLetter && containsNumber && containsSpecialChar
}

const comparePassword = (passwordInput, passwordRegistered) => {
  return passwordInput === passwordRegistered
}

export default { getUserName, login }
