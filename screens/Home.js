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


const Home = ({ navigation }) => {

    // Data
    const [destinations, setDestinations] = React.useState ([
        {
            id: 0,
            name: "Ski Villa",
            images:images.skiVilla
        },
        {
            id: 1,
            name: "Climbing hill",
            images:images.climbingHills
        },
        {
            id: 2,
            name: "Frozen Hills",
            images:images.frozenHills
        },
        {
            id: 3,
            name: "Beach",
            images:images.beach
        },
    ])

    // render 

    function renderDestinations( item, index ){
        var destinationStyle = {};

        if (index == 0 ) {
            destinationStyle = { marginLeft: SIZES.padding };
        }
        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle}}
                onPress={() => { navigation.navigate("DestinationDetail")}}
            >
                <Image 
                    source={item.images}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.28,
                        height: '82%',
                        borderRadius: 15
                    }}
                />
                <Text style={{ marginTop: SIZES.base / 2}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>
            {/* Banni??re */}
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

                {/* Premi??re ligne */}
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

                {/* Deuxi??me ligne */}
                <View style={{flexDirection: "row", marginTop: SIZES.radius, paddingHorizontal: SIZES.base}}>
                    <OptionItem 
                        icon={icons.bed}
                        bgColor={['#ffc465', '#ff9c5F']}
                        label= "flight"
                        onPress={() => {console.log("flight")}}
                    />
                    <OptionItem 
                        icon={icons.eat}
                        bgColor={['#7cf1fb', '#4ebefd']}
                        label= "Train"
                        onPress={() => {console.log("Train")}}
                    />
                    <OptionItem 
                        icon={icons.compass}
                        bgColor={['#7be993', '#46ccaf']}
                        label= "Bus"
                        onPress={() => {console.log("Bus")}}
                    />
                    <OptionItem 
                        icon={icons.event}
                        bgColor={['#fca397', '#fc7b6c']}
                        label= "Taxi"
                        onPress={() => {console.log("Taxi")}}
                    />
                </View>
            </View>
            {/* Destination */}
            <View style={{ flex: 1 }}>
                <Text style={{ marginTop: SIZES.base, marginHorizontal: SIZES.padding }}>Destination</Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={destinations}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderDestinations( item, index)}
                />
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