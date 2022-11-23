import { useFonts } from 'expo-font';
// import styled from 'styled-components';
import { StyleSheet, View, Text, Image } from 'react-native';

// React Native Styles
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 30,
        
    },
    text_dark: {
        lineHeight: 24,
        fontSize: 14,
        fontFamily: 'Open Sans Bold',
        color: '#1A5632',
    },
    text_light: {
        lineHeight: 24,
        fontSize: 24,
        fontFamily: 'Sansita Bold',
        color: '#94D40B',
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    }
});


// Styled Components
// const Heading = styled.View`
//     flex-direction: row;
//     align-items: flex-end;
//     background-color: #fff;
//     justify-content: space-between;
//     padding: 30px;
// `;

// const Intro = styled.Text`
//     font-family: 'Open Sans Bold';
//     font-size: 14px;
//     line-height: 24px;
//     color: #1A5632;
// `;

// const Title = styled.Text`
//     font-family: 'Sansita Bold';
//     font-size: 24px;
//     line-height: 24px;
//     color: #94D40B;
// `;

// const Logo = styled.Image`
//     width: 40px;
//     height: 40px;
//     resize-mode: contain;
// `;

const Header = ({ intro, title }) => {
    const [loaded] = useFonts({
        'Open Sans': require('../assets/fonts/OpenSans-Regular.ttf'),
        'Open Sans Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'Sansita': require('../assets/fonts/Sansita-Regular.ttf'),
        'Sansita Bold': require('../assets/fonts/Sansita-Bold.ttf'),
    });
    
    if (!loaded) {
        return null;
    }

    // React Native
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.text_dark}>{intro}</Text>
                <Text style={styles.text_light}>{title}</Text>
            </View>
            <Image style={styles.logo} source={require('../assets/icons/Logo.png')} />
        </View>
    );

    // Styled Components
    // return (
    //     <Heading>
    //         <View>
    //             <Intro>{intro}</Intro>
    //             <Title>{title}</Title>
    //         </View>
    //         <Logo source={require('../assets/icons/Logo.png')} />
    //     </Heading>
    // );
};

export default Header;