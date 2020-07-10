const required = (propertyType) => {
  // eslint-disable-next-line no-mixed-operators
  return v => v && v.length > 0 || 'You must input ' + propertyType
}

const minLenght = (propertyType, minLenght) => {
  // eslint-disable-next-line no-mixed-operators
  return v => v && v.length >= minLenght || propertyType + ' must be at least ' + minLenght + ' characters long.'
}

const emailFormat = () => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  // eslint-disable-next-line no-mixed-operators
  return v => v && regex.test(v) || 'Must be a valid email'
}

const passwordMatch = (newPassword, repeatNewPassword) => {
  // eslint-disable-next-line no-mixed-operators
  return v => v && newPassword === repeatNewPassword || 'Passwords do not match'
}

export default {
  required,
  minLenght,
  emailFormat,
  passwordMatch
}
