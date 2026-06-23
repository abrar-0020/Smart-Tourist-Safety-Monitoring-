import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Animated, Easing, Dimensions, Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const COLORS = {
  background: '#faf8ff',
  primary: '#3c5aab',
  primaryContainer: '#8ca9ff',
  onPrimaryContainer: '#173b8a',
  onPrimary: '#ffffff',
  surface: '#ffffff',
  surfaceContainerLowest: '#ffffff',
  onSurface: '#1a1b21',
  onSurfaceVariant: '#444651',
  outline: '#747682',
  outlineVariant: '#c4c6d3',
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onError: '#ffffff',
  secondaryContainer: '#b3cdfe',
  onSecondaryContainer: '#3d5681',
};

export default function SOSScreen({ navigation }) {
  const [isPressing, setIsPressing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sosActive, setSosActive] = useState(false);
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    let interval;
    if (isPressing && progress < 100 && !sosActive) {
      interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            setSosActive(true);
            return 100;
          }
          return p + 2; // Roughly 3 seconds to reach 100
        });
      }, 60);
    } else if (!isPressing && progress < 100 && !sosActive) {
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [isPressing, progress, sosActive]);

  useEffect(() => {
    if (!sosActive) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, { toValue: 1.05, duration: 1000, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
          Animated.timing(pulseAnim, { toValue: 1, duration: 1000, easing: Easing.inOut(Easing.ease), useNativeDriver: true })
        ])
      ).start();
    }
  }, [sosActive]);

  const handlePressIn = () => setIsPressing(true);
  const handlePressOut = () => setIsPressing(false);

  return (
    <View style={styles.container}>
      {/* Top App Bar */}
      <View style={styles.appBar}>
        <View style={styles.appBarLeft}>
          <View style={styles.avatarBorder}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_9WLov6C-Eax-jXZNuVtj686iau0LdaFXPQScUMGcUH1ZRl5oVEc36RHlGCNKT4Oi9syE19NBAOWiZ8VHD3nXB4LrVX7FFAXNyx2xbDInFZ4k9iqeXBbgk5vkHP1HBBR7_5nWcZMUx9-IX9ZrEC3aWm0YLoQoMS6wQRNb0P-Z0Aabha1yAudOLqVg_opNFUogWH7E3CdtmN7hDSXCeGUjljsue5mJnwki5NHA7d6xk48SZrVZqD_BCtVWVdfFd6jgqayUpourgzQ' }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.appName}>SurakshaYatri</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <MaterialIcons name="notifications" style={styles.notifIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        {/* Background Pattern */}
        <View style={styles.warningPatternOverlay} />

        {/* Status Indicator */}
        <View style={styles.statusContainer}>
          <View style={[styles.statusChip, sosActive ? styles.statusChipActive : isPressing ? styles.statusChipPressing : {}]}>
            <View style={[styles.statusDot, sosActive ? { backgroundColor: '#fff' } : isPressing ? { backgroundColor: COLORS.error } : {}]} />
            <Text style={[styles.statusText, sosActive ? { color: '#fff' } : {}]}>
              {sosActive ? 'Alerting Authorities!' : isPressing ? 'Initializing...' : 'Ready'}
            </Text>
          </View>
          <Text style={styles.statusDesc}>
            Your coordinates and profile are ready for transmission.
          </Text>
        </View>

        {/* SOS Central Button */}
        <View style={styles.sosButtonWrapper}>
          {/* Progress Ring Mock */}
          <View style={styles.progressRingBg} />
          <View style={[styles.progressRingFill, { height: `${progress}%` }]} />
          
          <TouchableOpacity 
            activeOpacity={1}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Animated.View style={[
              styles.sosButton, 
              !sosActive && { transform: [{ scale: pulseAnim }] },
              sosActive && styles.sosButtonActivated
            ]}>
              <Text style={styles.sosTextBig}>SOS</Text>
              <Text style={styles.sosTextSmall}>EMERGENCY</Text>
            </Animated.View>
          </TouchableOpacity>
        </View>

        {/* Instructions */}
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>
            Press and hold for 3 seconds to alert authorities
          </Text>
          <View style={styles.instructionIcons}>
            <MaterialIcons name="local-police" style={styles.instIcon} />
            <MaterialIcons name="airport-shuttle" style={styles.instIcon} />
            <MaterialIcons name="medical-services" style={styles.instIcon} />
          </View>
        </View>

        {/* Secondary Options */}
        <View style={styles.secondaryOptionsGrid}>
          <TouchableOpacity style={styles.secondaryCard}>
            <MaterialIcons name="security" style={styles.secondaryIcon} />
            <Text style={styles.secondaryText}>Silent Alert</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryCard}>
            <MaterialIcons name="phone" style={styles.secondaryIcon} />
            <Text style={styles.secondaryText}>Call Help</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: COLORS.background,
    zIndex: 40,
    marginTop: 24, // status bar mock
  },
  appBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarBorder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.primaryContainer,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  appName: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.primary,
  },
  notifBtn: {
    padding: 8,
  },
  notifIcon: {
    fontSize: 24,
    color: COLORS.primary,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 32,
    position: 'relative',
  },
  warningPatternOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFF8DE',
    opacity: 0.2, // Mocking the CSS gradient pattern with a solid tint for simplicity in RN
    zIndex: -1,
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  statusChip: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: COLORS.secondaryContainer,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  statusChipPressing: {
    backgroundColor: COLORS.errorContainer,
  },
  statusChipActive: {
    backgroundColor: COLORS.error,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
  statusText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.onSecondaryContainer,
  },
  statusDesc: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
    maxWidth: 320,
  },
  sosButtonWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
    height: 280,
  },
  progressRingBg: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 4,
    borderColor: 'rgba(170, 196, 245, 0.2)',
  },
  progressRingFill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 280,
    backgroundColor: 'rgba(186, 26, 26, 0.2)',
    opacity: 0.5,
  },
  sosButton: {
    width: 224,
    height: 224,
    borderRadius: 112,
    backgroundColor: COLORS.error,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(186, 26, 26, 0.7)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  sosButtonActivated: {
    transform: [{ scale: 1.1 }],
    shadowOpacity: 0.8,
    shadowRadius: 40,
  },
  sosTextBig: {
    fontFamily: 'Inter',
    fontSize: 48,
    fontWeight: '800',
    color: COLORS.onError,
    letterSpacing: -1,
  },
  sosTextSmall: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.onError,
    letterSpacing: 2,
    marginTop: -8,
  },
  instructionsContainer: {
    marginTop: 64,
    alignItems: 'center',
    maxWidth: 384,
  },
  instructionsTitle: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.onSurface,
    textAlign: 'center',
    marginBottom: 16,
  },
  instructionIcons: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
  },
  instIcon: {
    fontSize: 28,
    opacity: 0.5,
    color: COLORS.onSurfaceVariant,
  },
  secondaryOptionsGrid: {
    marginTop: 48,
    flexDirection: 'row',
    gap: 20,
    width: '100%',
    maxWidth: 440,
  },
  secondaryCard: {
    flex: 1,
    backgroundColor: COLORS.surfaceContainerLowest,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: 'rgba(140, 169, 255, 0.1)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(140, 169, 255, 0.2)',
  },
  secondaryIcon: {
    fontSize: 28,
    color: COLORS.primary,
    marginBottom: 8,
  },
  secondaryText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.onSurface,
  },
});
