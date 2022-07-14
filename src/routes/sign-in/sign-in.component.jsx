import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth ,
} from "../../utils/firebase/firebase.util";

const SignIn = () =>{

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <>
        <h1>Sign in</h1>
        <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
        <SignUpForm/>

        </>

    )
    }

export default SignIn;