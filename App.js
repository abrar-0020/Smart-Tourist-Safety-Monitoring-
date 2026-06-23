import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Screens
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import SOSScreen from './src/screens/SOSScreen';
import TimelineScreen from './src/screens/TimelineScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DigitalIDScreen from './src/screens/DigitalIDScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const COLORS = {
  surfaceContainerLowest: '#ffffff',
  onSurfaceVariant: '#444651',
  errorContainer: '#ffdad6',
  onErrorContainer: '#93000a',
  secondaryContainer: '#b3cdfe',
  onSecondaryContainer: '#3d5681',
};

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBarInner}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const isSOS = route.name === 'SOS';

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          let icon = '';
          if (route.name === 'Home') icon = 'home';
          if (route.name === 'Map') icon = 'map';
          if (route.name === 'SOS') icon = 'emergency';
          if (route.name === 'Timeline') icon = 'history';
          if (route.name === 'Profile') icon = 'person';

          if (isSOS) {
            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                onPress={onPress}
                style={styles.sosButton}
                activeOpacity={0.8}
              >
                <MaterialIcons name={icon} style={styles.sosIcon} />
                <Text style={styles.sosLabel}>SOS</Text>
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              style={[
                styles.tabItem,
                isFocused && styles.tabItemFocused
              ]}
              activeOpacity={0.8}
            >
              <MaterialIcons name={icon} style={[styles.tabIcon, isFocused && styles.tabIconFocused]} />
              <Text style={[styles.tabLabel, isFocused && styles.tabLabelFocused]}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="SOS" component={SOSScreen} />
      <Tab.Screen name="Timeline" component={TimelineScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash" 
        screenOptions={{ headerShown: false, animation: 'fade' }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="DigitalID" component={DigitalIDScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 24 : 16,
    backgroundColor: 'transparent',
    zIndex: 100,
  },
  tabBarInner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 8,
    shadowColor: 'rgba(140, 169, 255, 0.3)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.2)',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },
  tabItemFocused: {
    backgroundColor: COLORS.secondaryContainer,
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
    opacity: 0.7,
    color: COLORS.onSurfaceVariant,
  },
  tabIconFocused: {
    opacity: 1,
    color: COLORS.onSecondaryContainer,
  },
  tabLabel: {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.onSurfaceVariant,
  },
  tabLabelFocused: {
    color: COLORS.onSecondaryContainer,
  },
  sosButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.errorContainer,
    width: 64,
    height: 64,
    borderRadius: 32,
    marginTop: -32, // pop out effect
    shadowColor: 'rgba(186, 26, 26, 0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 8,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  sosIcon: {
    fontSize: 24,
    color: COLORS.onErrorContainer,
  },
  sosLabel: {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.onErrorContainer,
    marginTop: 2,
  },
});
