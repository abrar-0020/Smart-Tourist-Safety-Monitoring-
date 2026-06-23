import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar
} from 'react-native';

const { width } = Dimensions.get('window');

const COLORS = {
  background: '#FFF8DE',
  primary: '#3c5aab',
  primaryContainer: '#8ca9ff',
  onPrimaryContainer: '#173b8a',
  onPrimary: '#ffffff',
  surface: '#faf8ff',
  surfaceContainerLowest: 'rgba(255, 255, 255, 0.5)',
  onSurface: '#1a1b21',
  onSurfaceVariant: '#444651',
  outlineVariant: '#c4c6d3',
};

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
      {/* Background blobs */}
      <View style={styles.blobTopLeft} />
      <View style={styles.blobBottomRight} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Illustration Container */}
        <View style={styles.illustrationContainer}>
          <View style={styles.illustrationBackdrop} />
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6q3hdYu0X4QezRLADZ3SXjPi6ezEYWTIhUXcdO_JjwPDCgGhxfKsPpKVCXbM4rDjnBcoXuqODEOYjR6tTAE7VSkYJWKPBqkz8rk3ClhjbJkFqvKsek2XB5On2bD00Yx29KzO2CbAIHlpTCTVwRKOLTdjkVStfCjsgxFrppRBylCt0zStWBsqbkGYei-VjlXO5mlYBB-nEixhQuK4OTowVg0SVU86m_ARkcWwYrEu29qJto3eRch6jeX6EEWNRTQrxIQVGOugLejA' }}
            style={styles.illustration}
          />
          {/* Badge */}
          <View style={styles.badge}>
            <Text style={styles.badgeIcon}>🛡️</Text>
            <Text style={styles.badgeText}>Verified Safe Zones</Text>
          </View>
        </View>

        {/* Text Content */}
        <View style={styles.textContent}>
          <Text style={styles.title}>Welcome to SurakshaYatri</Text>
          <View style={styles.divider} />
          <Text style={styles.description}>
            Your trusted guardian for every journey. We empower tourists with real-time safety insights, emergency support, and local wisdom to ensure every memory you make is a safe one.
          </Text>

          {/* Features Grid */}
          <View style={styles.featuresGrid}>
            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>🛡️</Text>
              <View>
                <Text style={styles.featureTitle}>Safe Corridors</Text>
                <Text style={styles.featureDesc}>Live route monitoring</Text>
              </View>
            </View>
            <View style={[styles.featureCard, { marginTop: 16 }]}>
              <Text style={styles.featureIcon}>🆘</Text>
              <View>
                <Text style={styles.featureTitle}>Instant SOS</Text>
                <Text style={styles.featureDesc}>One-tap help arrival</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer Actions */}
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.nextButton}
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.8}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>

          <View style={styles.pagination}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.skipText}>Skip Introduction</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  blobTopLeft: {
    position: 'absolute',
    top: '-10%',
    left: '-10%',
    width: '40%',
    height: '40%',
    backgroundColor: 'rgba(140, 169, 255, 0.3)',
    borderRadius: 999,
    opacity: 0.5,
    transform: [{ scale: 1.5 }],
  },
  blobBottomRight: {
    position: 'absolute',
    bottom: '-10%',
    right: '-10%',
    width: '30%',
    height: '30%',
    backgroundColor: 'rgba(179, 205, 254, 0.2)',
    borderRadius: 999,
    opacity: 0.5,
    transform: [{ scale: 1.5 }],
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 24,
  },
  illustrationContainer: {
    width: Math.min(width - 40, 400),
    aspectRatio: 1,
    marginBottom: 48,
    position: 'relative',
  },
  illustrationBackdrop: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(140, 169, 255, 0.2)',
    borderRadius: 999,
    transform: [{ scale: 0.9 }],
  },
  illustration: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
    resizeMode: 'cover',
  },
  badge: {
    position: 'absolute',
    bottom: -16,
    right: -16,
    backgroundColor: COLORS.primaryContainer,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    gap: 8,
    shadowColor: 'rgba(140, 169, 255, 0.15)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 5,
  },
  badgeIcon: {
    fontSize: 20,
  },
  badgeText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.onPrimaryContainer,
  },
  textContent: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  divider: {
    height: 4,
    width: 48,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
    marginBottom: 24,
  },
  description: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  featuresGrid: {
    flexDirection: 'row',
    width: '100%',
    gap: 16,
    marginBottom: 48,
  },
  featureCard: {
    flex: 1,
    backgroundColor: COLORS.surfaceContainerLowest,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.3)',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  featureIcon: {
    fontSize: 24,
  },
  featureTitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.onSurface,
    marginBottom: 2,
  },
  featureDesc: {
    fontFamily: 'Inter',
    fontSize: 11,
    color: COLORS.onSurfaceVariant,
  },
  footer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    marginTop: 'auto',
    gap: 24,
  },
  nextButton: {
    width: '100%',
    backgroundColor: COLORS.primary,
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: 'rgba(140, 169, 255, 0.15)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 4,
  },
  nextButtonText: {
    fontFamily: 'Inter',
    color: COLORS.onPrimary,
    fontSize: 18,
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.outlineVariant,
  },
  dotActive: {
    width: 32,
    backgroundColor: COLORS.primary,
  },
  skipText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: COLORS.onSurfaceVariant,
    fontWeight: '500',
  },
});
