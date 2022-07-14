import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
      getFirestore,
      doc,
      getDoc,
      setDoc
} from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyBQwYTe11tOnSdNqu2Mwohhp5-nNcLTTiY",
  authDomain: "crown-clothing-db-11d7e.firebaseapp.com",
  projectId: "crown-clothing-db-11d7e",
  storageBucket: "crown-clothing-db-11d7e.appspot.com",
  messagingSenderId: "460738690265",
  appId: "1:460738690265:web:865d608d5ad5bc878c12c8"
};


const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(); 

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db,'users',userAuth.uid);

    const userSnapshot = await getDoc(userAuth);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
    try {
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt
        });
    } catch(error){
        console.log("There is error", error.message);
    }
    }
    return userDocRef;
}
