import { signInWithGooglePopup } from "../../utils/firebase/firebase.util";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";

const SignIn = () =>{
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <>
        <h1>Sign in</h1>
        <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
        </>

    )
    }

export default SignIn;