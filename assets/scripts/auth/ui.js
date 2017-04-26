'use strict'
import store from '../store'

const signUpSuccess = (data) => {
  // clear any alerts
  // hideAllAlerts()

  // hide the loader and show the button again
  // hideFormLoader(authSelectors.signUp)

  // get the credentials the user entered when signing up
  // so we can sign the user in automatically
  // const credentials = {
  //   email: $('#sign-up-email').val(),
  //   password: $('#sign-up-password').val()
  // }
  // sign user in and handle success/fail
  // api.signIn({credentials}).then(signInSuccess).catch(signInFailure)

  // hide the sign up form since we know that worked now
  // authSelectors.signUp.container.hide()

  // clear/reset the sign in form in case the user gets back there somehow
  $('#sign-up input').val('')
  $('#sign-up input').parent('div').toggleClass('is-dirty')
  console.log(data)
  //
  // authSelectors.signUp.password.val('')
  // authSelectors.signUp.passwordConfirmation.val('')
  // authSelectors.signUp.email.parent('div').toggleClass('is-dirty')
  // authSelectors.signUp.password.parent('div').toggleClass('is-dirty')
  // authSelectors.signUp.passwordConfirmation.parent('div').toggleClass('is-dirty')
}
const signUpFailure = (data) => {
  console.error(data)
  // clear alerts (like success alerts)
  // hideAllAlerts()

  // hide the form loader and show the button
  // hideFormLoader(authSelectors.signUp)

  // let the user know the sign up failed
  // showAlert(authSelectors.alerts.signUpFailure)
}
const signInSuccess = ({user}) => {
  // clear the alerts
  // hideAllAlerts()

  // clear containers
  // hideAllContainersExcept()

  // hide the loader and put the button back for if the user signs out again
  // hideFormLoader(authSelectors.signIn)

  // show the user's email in the header
  // menuSelectors.menu.email.text(user.email)

  // show the header now that the user is signed in
  // menuSelectors.menu.container.slideDown('fast')

  // clear/reset the sign in form in case the user gets back there somehow
  const $email = $('#sign-in-email')
  const $password = $('#sign-in-password')
  $email.val('')
  $password.val('')
  $email.parent('div').toggleClass('is-dirty')
  $password.parent('div').toggleClass('is-dirty')

  // put the user info in the store
  store.user = user
  console.log(store)
}
const signInFailure = (data) => {
  console.error(data)
  // make sure sign in is shown, just in case the user came from sign up
  // authSelectors.signIn.container.show()

  // hide the loader and put the button back after we know it failed
  // hideFormLoader(authSelectors.signIn)

  // show a message to the user that sign in didnt work
  // showAlert(authSelectors.alerts.signInFailure)
}
module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure
}
