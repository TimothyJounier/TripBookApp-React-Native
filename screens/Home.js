import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

// import gradient
import LinearGradient from 'react-native-linear-gradient';

// import constants
import { COLORS, icons, images, SIZES } from '../constants';

const OptionItem = ({ icon, bgColor, label, onPress }) => {
    return (
        <TouchableOpacity
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={onPress}
        >
            <View style={[styles.shadow, { width: 60, height: 60 }]}>
                <LinearGradient
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                    colors={bgColor}
                    start={{ x : 0, y : 0 }}
                    end={{ x : 0, y: 1 }}
                >  
                    <Image 
                        source={icon}
                        resizeMode= "cover"
                        style={{
                            tintColor: COLORS.white,
                            width: 30,
                            height: 30,
                        }}
                    />

                </LinearGradient>
            </View>
                    <Text style={{ marginTop: SIZES.base, color: COLORS.gray }}>{label}</Text>
        </TouchableOpacity>
    )
}


const Home = () => {
    return (
        <View style={styles.container}>
            {/* Bannière */}
            <View style={{flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding}}>
                <Image 
                    source={images.homeBanner}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 15
                    }}
                />
            </View>
            {/* Options */}
            <View style={{ flex: 1, justifyContent: 'center' }}>

                {/* Première ligne */}
                <View style={{flexDirection: "row", marginTop: SIZES.padding, paddingHorizontal: SIZES.base}}>
                    <OptionItem 
                        icon={icons.airplane}
                        bgColor={['#46aeff', '#5884ff']}
                        label= "flight"
                        onPress={() => {console.log("flight")}}
                    />
                    <OptionItem 
                        icon={icons.train}
                        bgColor={['#fdd90f', '#fcda13']}
                        label= "Train"
                        onPress={() => {console.log("Train")}}
                    />
                    <OptionItem 
                        icon={icons.bus}
                        bgColor={['#e973ad', '#da5df2']}
                        label= "Bus"
                        onPress={() => {console.log("Bus")}}
                    />
                    <OptionItem 
                        icon={icons.taxi}
                        bgColor={['#fcaba8', '#fe6bba']}
                        label= "Taxi"
                        onPress={() => {console.log("Taxi")}}
                    />
                </View>

                {/* Deuxième ligne */}
                <View style={{flexDirection: "row", marginTop: SIZES.radius, paddingHorizontal: SIZES.base}}>
                    <OptionItem 
                        icon={icons.bed}
                        bgColor={['#46aeff', '#5884ff']}
                        label= "flight"
                        onPress={() => {console.log("flight")}}
                    />
                    <OptionItem 
                        icon={icons.eat}
                        bgColor={['#fdd90f', '#fcda13']}
                        label= "Train"
                        onPress={() => {console.log("Train")}}
                    />
                    <OptionItem 
                        icon={icons.compass}
                        bgColor={['#e973ad', '#da5df2']}
                        label= "Bus"
                        onPress={() => {console.log("Bus")}}
                    />
                    <OptionItem 
                        icon={icons.event}
                        bgColor={['#fcaba8', '#fe6bba']}
                        label= "Taxi"
                        onPress={() => {console.log("Taxi")}}
                    />
                </View>
            </View>
            {/* Destination */}
            <View style={{ flex: 1 }}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    }, 
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5   
    }
})

export default Home;