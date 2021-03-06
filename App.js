import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// Screens 
import { Onboarding, DestinationDetail } from './screens';

// Tabs
import Tabs from './navigation/tabs'

// Constants
import COLORS from './constants/theme';
import SIZES from './constants/theme';
import icons from './constants/icons';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  }
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
        initialRouteName={'Onboarding'}
      >
        {/* Screens  */}
        <Stack.Screen 
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white
            },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity 
                style={{ marginRight: SIZES.padding}}
                onPress={() => console.log('PressedHere')}
              >
                <Image 
                  source={icons.barMenu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 25
                  }}
                
                />

              </TouchableOpacity>
            )
          }}
        />
          <Stack.Screen 
            name="DestinationDetail"
            component={DestinationDetail}
            options={{
              headerShown: false
            }}
          />

          {/* Tabs */}
          <Stack.Screen 
            name="Home"
            component={Tabs}
            options={{
              title: null,
              headerStyle: {
                backgroundColor: COLORS.white
              },
              headerLeft: ({ onPress }) => (
                <TouchableOpacity
                  style={{ marginLeft: SIZES.padding }}
                  onPress= {onPress}
                >
                    <Image 
                      source={icons.back}
                      resizeMode= "contain"
                      style={{
                        width: 25,
                        height: 25,
                        marginLeft: 20
                      }}
                    />
                </TouchableOpacity>
              ),
              headerRight: ({ onPress }) => (
                <TouchableOpacity 
                  style={{ marginRight: SIZES.padding }}
                  onPress= {onPress}
                >
                  <Image 
                    source={icons.menu}
                    resizeMode= "contain"
                    style={{
                      width: 25,
                      height: 25,
                      marginRight: 20,
                    }}
                  />

                </TouchableOpacity>
              )
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />;
}

