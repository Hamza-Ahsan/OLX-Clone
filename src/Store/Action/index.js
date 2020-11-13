import firebase from '../../Config/firebase';



const set_data = (contact) => {
  return{
      type: 'Add_User',
      payload: contact
  }
}




const Facebook_login = () => {
  return (dispatch) => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user);
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }
}

export {
  set_data,
  Facebook_login,
}
