import { signInWithPopup } from "firebase/auth";
import { firebaseAuth, githubProvider, googleProvider } from "./firebase";

interface AuthProvider {
  getProvider(a: string): void;
  login(a: string): void;
  logout(): void;
}

class AuthService implements AuthProvider {
  getProvider(providerName: string) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`Not supported provider: ${providerName}`);
    }
  }

  login(providerName: string) {
    const authProvier = this.getProvider(providerName);
    // return firebaseAuth.signInWithPopup(authProvier);
    // Sign in using a popup.
    // * const provider = new GoogleAuthProvider();
    // * provider.addScope('profile');
    // * provider.addScope('email');
    // * const result = await signInWithPopup(auth, provider);
    // *
    // * // The signed-in user info.
    // * const user = result.user;
    // * // This gives you a Google Access Token.
    // * const credential = GoogleAuthProvider.credentialFromResult(result);
    // * const token = credential.accessToken;
  }

  logout() {
    firebaseAuth.signOut();
  }
}

export default AuthService;

// signInWithPopup(firebaseAuth, googleProvider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
