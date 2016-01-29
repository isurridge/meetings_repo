angular.module('firebase.config', [])
  .constant('FBURL', 'https://blinding-torch-3786.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
