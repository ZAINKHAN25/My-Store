import { useState } from "react";
import { db, doc, setDoc, createUserWithEmailAndPassword, auth } from "../firebaseConfig.js";
import { View } from "react-native-web";
import { Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../Style.js";

import logo from '../images/Loading.png'

function SignupComponent({ navigation }) {
    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')
    let [againpassword, setagainpassword] = useState('')
    let [accountname, setaccountname] = useState('')

    function signup() {
        try {

            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    // user ki unique id
                    console.log(user, " ????user");
                    await setDoc(doc(db, "users", user.uid), {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                    });
                    // login page pe gaiga
                    navigation.navigate('Login')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error.message);
                    console.log(errorCode);
                    // ..
                });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.SignuporRegisterBody}>
            <View style={styles.SignUpLoginCard}>
                <Text style={styles.headingoFLogin}>Sign Up</Text>
                <Image style={styles.logoofregisterLogin} source={logo} />
                {/* div of input */}
                <View style={styles.InputLineOfRegister}>
                    <Text style={styles.InputHeadingRegister}>Account name:</Text>
                    <TextInput
                        placeholder='Javed'
                        style={styles.InputofRegister}
                        placeholderTextColor={"#FABDBD"}
                        value={accountname}
                        onChange={(e) => setaccountname(e.target.value)}
                    />
                </View>
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
                {/* div of input */}
                <View style={styles.InputLineOfRegister}>
                    <Text style={styles.InputHeadingRegister}>Repeat Password here:</Text>
                    <TextInput
                        placeholder='Repeat Password'
                        secureTextEntry={true}
                        style={styles.InputofRegister}
                        placeholderTextColor={"#FABDBD"}
                        value={againpassword}
                        onChange={(e) => setagainpassword(e.target.value)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.Signupbtn}
                    onPress={signup}
                >
                    <Text style={styles.SignupbtnTxt}>Sign up</Text>
                </TouchableOpacity>

                <Text style={styles.orWordInLogin}>or</Text>

                <Text onPress={() => navigation.navigate('Login')} style={styles.gotToRegisterPage}>Already have an <Text style={styles.underline}>account</Text></Text>
            </View>
        </View>
    );
}

export default SignupComponent;

