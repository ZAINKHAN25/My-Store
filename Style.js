import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loadingpage: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    loadingimage: {
        width: "100%",
        height: "100%"
    },
    OnBoardingPage: {
        backgroundColor: '#F75D37',
        width: "100%",
        height: "100%",
        display: 'flex',
        paddingHorizontal: 30
    },
    firstLineOfBoarding: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    progessbarsuccesBoarding: {
        color: 'white',
        fontSize: 50,
        marginHorizontal: 5
    },
    progessbarwaitBoarding: {
        color: '#FABD',
        fontSize: 50,
        marginHorizontal: 5,
        fontWeight: 'bold'
    },
    imageofBoarding: {
        width: "100%",
        height: '40vh',
        marginVertical: 30
    },
    headingofBoarding: {
        fontSize: 40,
        color: 'white',
        fontFamily: 'Pridi'
    },
    paraofBoarding: {
        color: 'white',
        fontFamily: "Pridi",
        fontWeight: 'Semi-Bold',
        fontSize: 20,
        marginTop: 5
    },
    nextBtnOfBoarding: {
        marginVertical: 5,
        backgroundColor: 'white',
        width: "max-content",
        marginLeft: 'auto',
        borderRadius: '50%',
        paddingVertical: 10,
        paddingHorizontal: 13
    },
    nextbtnTxtOfBoarding: {
        color: '#F75D37',
        fontSize: 30
    },
    SignuporRegisterBody: {
        backgroundColor: '#F75D37',
        minHeight: '100%',
        alignItems: 'center',
        paddingBottom: 15
    },
    headingoFLogin: {
        color: 'white',
        fontFamily: "PT Mono",
        fontSize: 35,
        textAlign: 'center',
        marginTop: 10
    },
    InputLineOfRegister: {
        display: 'flex',
        justifyContent: 'center',
        width: "80vw",
    },
    InputHeadingRegister: {
        color: 'white',
        fontFamily: 'PT Serif',
        fontSize: 17,
        fontWeight: "Regular"
    },
    InputofRegister: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 17,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: "90%",
        marginHorizontal: 'auto',
        color: 'white',
        marginTop: 5,
        marginBottom: 20
    },
    logoofregisterLogin: {
        width: "300px",
        height: "200px",
        marginHorizontal: 'auto'
    },
    Signupbtn: {
        width: "80vw",
        marginHorizontal: "auto",
        paddingVertical: 5,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 20
    },
    SignupbtnTxt: {
        color: "#F75D37",
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '400',
    },
    orWordInLogin: {
        textAlign: 'center',
        color: 'white',
        marginVertical: 10,
        fontSize: 18
    },
    underline: {
        textDecorationLine: 'underline'
    },
    gotToRegisterPage: {
        color: 'white',
        textAlign: 'center'
    }
});


export default styles;