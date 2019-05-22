import firebase from 'firebase';

function LogOut(props, watchId) {

    firebase
        .auth()
        .signOut()
        .then(function () {
            console.log("logged out!");
            navigator.geolocation.clearWatch(watchId);
            props.history.push("/");
        })
        .catch(function (error) {
            console.log(error.message);
        });

}

export default LogOut;