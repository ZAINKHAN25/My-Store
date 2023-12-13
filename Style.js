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
    OnBoardingPage:{
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
    imageofBoarding:{
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
    nextBtnOfBoarding:{
        marginVertical: 5,
        backgroundColor: 'white',
        width: "max-content",
        marginLeft: 'auto',
        borderRadius: '50%',
        paddingVertical: 10,
        paddingHorizontal: 13
    },
    nextbtnTxtOfBoarding:{
        color: '#F75D37',
        fontSize: 30
    }
});


export default styles;