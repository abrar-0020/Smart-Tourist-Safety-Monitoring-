import React, { useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, Animated, Easing, StatusBar,
} from 'react-native';

const COLORS = {
  background: '#FFF8DE',
  primary: '#3c5aab',
  primaryContainer: '#8ca9ff',
  onPrimaryContainer: '#173b8a',
  surface: '#ffffff',
  onSurface: '#1a1b21',
  onSurfaceVariant: '#444651',
  outlineVariant: '#c4c6d3',
};

export default function SplashScreen({ navigation }) {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Pulse animation for logo
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.02, duration: 2000, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 2000, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ])
    ).start();

    // Progress bar animation over 3 seconds
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 3000,
      easing: Easing.bezier(0.65, 0, 0.35, 1),
      useNativeDriver: false,
    }).start(() => {
      navigation.replace('Onboarding');
    });
  }, []);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      {/* Gradient mesh background accents */}
      <View style={styles.meshTopLeft} />
      <View style={styles.meshBottomRight} />

      {/* Logo */}
      <Animated.View style={[styles.logoWrapper, { transform: [{ scale: pulseAnim }] }]}>
        <View style={styles.logoCircle}>
          {/* Location pin with cross - SVG-like using nested Views */}
          <View style={styles.pinContainer}>
            {/* Pin body */}
            <View style={styles.pinBody}>
              {/* Cross/plus icon */}
              <View style={styles.crossH} />
              <View style={styles.crossV} />
            </View>
            {/* Pin tip */}
            <View style={styles.pinTip} />
          </View>
        </View>
      </Animated.View>

      {/* Brand Text */}
      <Text style={styles.brandName}>SurakshaYatri</Text>
      <Text style={styles.tagline}>Travel Safe. Stay Connected.</Text>

      {/* Secure Infrastructure Badge */}
      <View style={styles.badgeRow}>
        <View style={styles.badgeShield}>
          <Text style={styles.shieldIcon}>🛡</Text>
        </View>
        <Text style={styles.badgeText}>SECURE INFRASTRUCTURE</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressTrack}>
        <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  meshTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(140,169,255,0.08)',
  },
  meshBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(179,205,254,0.1)',
  },
  logoWrapper: {
    marginBottom: 48,
    shadowColor: 'rgba(140,169,255,0.2)',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 50,
    elevation: 8,
  },
  logoCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinContainer: {
    alignItems: 'center',
  },
  pinBody: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossH: {
    position: 'absolute',
    width: 28,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
  crossV: {
    position: 'absolute',
    width: 4,
    height: 28,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
  pinTip: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 16,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: COLORS.primaryContainer,
    marginTop: -2,
  },
  brandName: {
    fontFamily: 'Inter',
    fontSize: 34,
    fontWeight: '800',
    color: COLORS.primary,
    letterSpacing: -0.5,
    marginBottom: 10,
  },
  tagline: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.onSurfaceVariant,
    marginBottom: 20,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 48,
  },
  badgeShield: {
    opacity: 0.7,
  },
  shieldIcon: {
    fontSize: 14,
    color: COLORS.primary,
  },
  badgeText: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 1.5,
  },
  progressTrack: {
    width: 120,
    height: 3,
    backgroundColor: COLORS.outlineVariant,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },
});
