import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../Style.js';
import imageone from '../images/Peron-Using-Phone.png';
import imagetwo from '../images/Second-Onboarding.png'
import imagethree from '../images/Third-Onboarding.png'

const OnBoarding = ({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(1);

    function FirstOnBoarding() {
        return (
            <View>
                <View style={styles.firstLineOfBoarding}>
                    <Text style={styles.progessbarsuccesBoarding}>_</Text>
                    <Text style={styles.progessbarwaitBoarding}>_</Text>
                    <Text style={styles.progessbarwaitBoarding}>_</Text>
                </View>
                <Text style={styles.headingofBoarding}>Discover My Store!</Text>
                <Image style={styles.imageofBoarding} source={imageone} />
                <Text style={styles.paraofBoarding}>Sign up for a personalized shopping experience. Explore top products, manage your profile, and effortlessly add items to your store. Dive into analytics to track your performance. Let's shop smart with My Store! 🌟🛒</Text>
                {/* Add any additional components or navigation buttons as needed */}
                <TouchableOpacity style={styles.nextBtnOfBoarding} onPress={() => setCurrentPage(2)}>
                    <Text style={styles.nextbtnTxtOfBoarding}>→</Text>
                </TouchableOpacity>
            </View>
        );
    }

    function SecondBoarding() {
        return (
            <View>
                <View style={styles.firstLineOfBoarding}>
                    <Text style={styles.progessbarsuccesBoarding}>_</Text>
                    <Text style={styles.progessbarsuccesBoarding}>_</Text>
                    <Text style={styles.progessbarwaitBoarding}>_</Text>
                </View>
                <Text style={styles.headingofBoarding}>Sell Smart with My Store</Text>
                <Image style={styles.imageofBoarding} source={imagetwo} />
                <Text style={styles.paraofBoarding}>Add products effortlessly, personalize your storefront with a logo and banner, and manage inventory seamlessly. Connect with customers and embark on a successful selling journey. My Store makes selling simple and efficient. 🚀💼
                </Text>
                {/* Add any additional components or navigation buttons as needed */}
                <TouchableOpacity style={styles.nextBtnOfBoarding} onPress={() => setCurrentPage(3)}>
                    <Text style={styles.nextbtnTxtOfBoarding}>→</Text>
                </TouchableOpacity>
            </View>
        );
    }

    function ThirdBoarding() {
        return (
            <View>
                <View style={styles.firstLineOfBoarding}>
                    <Text style={styles.progessbarsuccesBoarding}>_</Text>
                    <Text style={styles.progessbarsuccesBoarding}>_</Text>
                    <Text style={styles.progessbarsuccesBoarding}>_</Text>
                </View>
                <Text style={styles.headingofBoarding}>Community Connections!</Text>
                <Image style={styles.imageofBoarding} source={imagethree} />
                <Text style={styles.paraofBoarding}>Explore discussions, find inspiration in success stories, and stay updated with My Store. Click "Finish" to join the community and unlock the full potential of your My Store experience. 🌐🛍️✨
                </Text>
                <TouchableOpacity style={styles.nextBtnOfBoarding} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.nextbtnTxtOfBoarding}>→</Text>
                </TouchableOpacity>
            </View>
        );
    }



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


export default OnBoarding;
