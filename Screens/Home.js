import { useEffect, useState } from "react";
import { auth, db, doc, getDoc, onAuthStateChanged, signOut } from "../firebaseConfig.js";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../Style.js";

function HomeComponent({ navigation }) {
    let [loginPersonDataState, setloginPersonDataState] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;

                const docRef = doc(db, "users", uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setloginPersonDataState(docSnap.data())
                } else {
                    console.log("No such document!");
                }
            } else {
                console.log("Banda login hi nah hai");
                navigation.navigate('Login')
            }
        });
        
    }, [])
    
    
    function logoutHandler() {
        signOut(auth).then(() => {
            navigation.navigate('Login')
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    return (
        <>
            hello it is home page {loginPersonDataState.firstName}
            <TouchableOpacity onPress={logoutHandler} style={styles.logoutBtn}>
                <Text style={styles.logoutBtntxt}>Logout Button</Text>
            </TouchableOpacity>
        </>
    )
}

export default HomeComponent;