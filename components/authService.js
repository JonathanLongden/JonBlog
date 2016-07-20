// AuthService.js
// ... imports
class AuthService {

  login(email, passWord) {
    // We call the server to log the user in.
    return when(request({
      url: ‘http://localhost:3001/sessions/create',
      method: ‘POST’,
      crossOrigin: true,
      type: ‘json’,
      data: {
        email, passWord
      }
    }))
    .then(function(response) {
        // We get a JWT back.
        let jwt = response.id_token;
        // We trigger the LoginAction with that JWT.
        LoginActions.loginUser(jwt);
        return true;
    });
  }
}

export default new AuthService()