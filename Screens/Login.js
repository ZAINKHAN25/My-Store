import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, db, doc, getDoc, signInWithEmailAndPassword } from "../firebaseConfig.js";
import { changeloginPersonData } from "../store/Slices/loginPersonData.js";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../Style.js";

import logo from '../images/Loading.png'

function LoginComponent({ navigation }) {
  let [email, setemail] = useState('')
  let [password, setpassword] = useState('')

  const { loginPersonData } = useSelector((state) => state);
  const dispatch = useDispatch();


  function Signin() {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;


        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          const updatecounter = () => {
            dispatch(changeloginPersonData(docSnap.data()));
          };
          updatecounter()
          navigation.navigate('Home')
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  }
  return (

    <View style={styles.SignuporRegisterBody}>
      <View style={styles.SignUpLoginCard}>
        <Text style={styles.headingoFLogin}>Login</Text>
        <Image style={styles.logoofregisterLogin} source={logo} />
        {/* div of input */}
        <View style={styles.InputLineOfRegister}>
          <Text style={styles.InputHeadingRegister}>Email addres:</Text>
          <TextInput
            placeholder='javed@mail.com etc..'
            keyboardType='email-address'
            style={styles.InputofRegister}
            placeholderTextColor={"#FABDBD"}
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </View>
        {/* div of input */}
        <View style={styles.InputLineOfRegister}>
          <Text style={styles.InputHeadingRegister}>Password here:</Text>
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            style={styles.InputofRegister}
            placeholderTextColor={"#FABDBD"}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </View>

        <TouchableOpacity
          style={styles.Signupbtn}
          onPress={Signin}
        >
          <Text style={styles.SignupbtnTxt}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orWordInLogin}>or</Text>

        <Text onPress={() => navigation.navigate('Signup')} style={styles.gotToRegisterPage}>Go to <Text style={styles.underline}>Signup Page</Text></Text>
      </View>
    </View>
  )
}


export default LoginComponent;