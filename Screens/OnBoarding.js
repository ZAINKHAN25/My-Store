import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../Style.js';
import imageone from '../images/Peron-Using-Phone.png';
import { useNavigation } from '@react-navigation/native';

const OnBoarding = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigation = useNavigation();

    const renderOnBoardingPage = () => {
        if (currentPage === 1) {
            return <FirstOnBoarding />;
        } else if (currentPage === 2) {
            return <SecondBoarding />;
        } else if (currentPage === 3) {
            return <ThirdBoarding />;
        }
    };

    return <ScrollView style={styles.OnBoardingPage}>{renderOnBoardingPage()}</ScrollView>;
};

function SecondBoarding() {
    // <Image style={styles.imageofzBoarding} source={ Your second image source */}
    const navigation = useNavigation();

    return (
        <View>
            <Text style={styles.headingofBoarding}>Second On Boarding</Text>
            <Text style={styles.paraofBoarding}>Custom content for the Second On Boarding</Text>
            <TouchableOpacity style={styles.nextBtnOfBoarding} onPress={() => setCurrentPage(3)}>
                <Text style={styles.nextbtnTxtOfBoarding}>→</Text>
            </TouchableOpacity>
        </View>
    );
}

function ThirdBoarding() {
    // <Image style={styles.imageofBoarding} source={Your third image source */}
    return (
        <View>
            <Text style={styles.headingofBoarding}>Third On Boarding</Text>
            <Text style={styles.paraofBoarding}>Custom content for the Third On Boarding</Text>
            {/* Add any additional components or navigation buttons as needed */}
        </View>
    );
}

function ThirdBoarding() {
    {/* /* <Image style={styles.imageofBoarding} source={Your third image source */ }
    return (
        <View>
            <Text style={styles.headingofBoarding}>Third On Boarding</Text>
            <Text style={styles.paraofBoarding}>Custom content for the Third On Boarding</Text>
            {/* Add any additional components or navigation buttons as needed */}
        </View>
    );
}

export default OnBoarding;
