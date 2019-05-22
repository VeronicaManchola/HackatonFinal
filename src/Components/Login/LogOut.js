import firebase from 'firebase';

function LogOut(props) {

    firebase
        .auth()
        .signOut()
        .then(function () {
            console.log("logged out!");
            props.history.push("/");
        })
        .catch(function (error) {
            console.log(error.message);
        });

}

export default LogOut;