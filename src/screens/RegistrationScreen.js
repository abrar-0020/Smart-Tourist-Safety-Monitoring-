import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform, StatusBar
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const COLORS = {
  background: '#FFF8DE',
  primary: '#3c5aab',
  primaryContainer: '#8ca9ff',
  onPrimaryContainer: '#173b8a',
  onPrimary: '#ffffff',
  surface: '#ffffff',
  surfaceVariant: '#e3e2e9',
  onSurface: '#1a1b21',
  onSurfaceVariant: '#444651',
  outline: '#747682',
  cardBg: '#FFF2C6',
  inputBg: '#fdf8e6',
  error: '#ba1a1a',
  onError: '#ffffff',
  secondaryContainer: '#b3cdfe',
  onSecondaryContainer: '#3d5681',
  tertiary: '#755b00',
  tertiaryContainer: '#d0a72c',
};

export default function RegistrationScreen({ navigation }) {
  const [step, setStep] = useState(1);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>SJ</Text>
          </View>
          <Text style={styles.headerTitle}>SurakshaYatri</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <MaterialIcons name="notifications" style={styles.notificationIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Progress Stepper */}
        <View style={styles.stepperContainer}>
          <View style={styles.stepItem}>
            <View style={styles.stepCircleActive}>
              <Text style={styles.stepNumberActive}>1</Text>
            </View>
            <Text style={styles.stepTextActive}>Personal</Text>
          </View>
          <View style={styles.stepDivider} />
          <View style={styles.stepItem}>
            <View style={styles.stepCircleInactive}>
              <Text style={styles.stepNumberInactive}>2</Text>
            </View>
            <Text style={styles.stepTextInactive}>ID Proof</Text>
          </View>
          <View style={styles.stepDivider} />
          <View style={styles.stepItem}>
            <View style={styles.stepCircleInactive}>
              <Text style={styles.stepNumberInactive}>3</Text>
            </View>
            <Text style={styles.stepTextInactive}>Trip</Text>
          </View>
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          
          {/* Section: Personal Details */}
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="person" style={styles.sectionIcon} />
              <Text style={styles.sectionTitle}>Personal Details</Text>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput style={styles.input} placeholder="e.g. Julianne Smith" placeholderTextColor="rgba(68, 70, 81, 0.5)" />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nationality</Text>
              <TextInput style={styles.input} placeholder="United Kingdom" placeholderTextColor={COLORS.onSurface} />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput style={styles.input} placeholder="julianne@traveler.com" placeholderTextColor="rgba(68, 70, 81, 0.5)" keyboardType="email-address" />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Passport Number</Text>
              <TextInput style={styles.input} placeholder="XXXXXXXXX" placeholderTextColor="rgba(68, 70, 81, 0.5)" />
            </View>
          </View>

          {/* Section: ID Proof Upload */}
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="badge" style={styles.sectionIcon} />
              <Text style={styles.sectionTitle}>Upload ID Proof</Text>
            </View>

            <TouchableOpacity style={styles.uploadArea}>
              <View style={styles.uploadIconContainer}>
                <MaterialIcons name="upload" style={styles.uploadIcon} />
              </View>
              <Text style={styles.uploadTitle}>Drop your passport or ID here</Text>
              <Text style={styles.uploadSubtitle}>Supports JPG, PNG or PDF (Max 5MB)</Text>
              <View style={styles.uploadButton}>
                <Text style={styles.uploadButtonText}>Select File</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Section: Trip Itinerary */}
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="map" style={styles.sectionIcon} />
              <Text style={styles.sectionTitle}>Trip Itinerary</Text>
            </View>

            <View style={styles.rowInputs}>
              <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.label}>Arrival Date</Text>
                <TextInput style={styles.input} placeholder="YYYY-MM-DD" placeholderTextColor="rgba(68, 70, 81, 0.5)" />
              </View>
              <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.label}>Departure Date</Text>
                <TextInput style={styles.input} placeholder="YYYY-MM-DD" placeholderTextColor="rgba(68, 70, 81, 0.5)" />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Planned Locations</Text>
              <View style={styles.tagsContainer}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>New Delhi</Text>
                  <MaterialIcons name="close" style={styles.tagClose} />
                </View>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Jaipur</Text>
                  <MaterialIcons name="close" style={styles.tagClose} />
                </View>
              </View>
              <TextInput style={styles.input} placeholder="Add a city or destination..." placeholderTextColor="rgba(68, 70, 81, 0.5)" />
            </View>
          </View>

        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('MainTabs')}>
          <Text style={styles.saveButtonText}>Save and Continue</Text>
        </TouchableOpacity>

        {/* Secure Connection Badge */}
        <View style={styles.secureBadge}>
          <View style={styles.secureHeader}>
            <MaterialIcons name="security" style={styles.secureIcon} />
            <Text style={styles.secureTitle}>Secure Connection</Text>
          </View>
          <Text style={styles.secureText}>
            Your personal data and travel information are encrypted and only accessible by authorized safety personnel during emergencies.
          </Text>
        </View>
        
        {/* Extra padding at bottom for FAB */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Floating SOS Button */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8} onPress={() => navigation.navigate('MainTabs', { screen: 'SOS' })}>
        <MaterialIcons name="emergency" style={styles.fabIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'rgba(255, 248, 222, 0.9)',
    zIndex: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: COLORS.onPrimaryContainer,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.primary,
  },
  notificationBtn: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationIcon: {
    fontSize: 24,
    color: COLORS.primary,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  stepItem: {
    alignItems: 'center',
    gap: 8,
  },
  stepCircleActive: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberActive: {
    color: COLORS.onPrimary,
    fontWeight: 'bold',
  },
  stepTextActive: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
  },
  stepCircleInactive: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(227, 226, 233, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberInactive: {
    color: COLORS.onSurfaceVariant,
    fontWeight: 'bold',
  },
  stepTextInactive: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.onSurfaceVariant,
  },
  stepDivider: {
    flex: 1,
    height: 2,
    backgroundColor: COLORS.secondaryContainer,
    marginTop: 15,
    marginHorizontal: 8,
  },
  formContainer: {
    gap: 24,
    marginBottom: 24,
  },
  sectionCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(170, 196, 245, 0.3)',
    shadowColor: 'rgba(140, 169, 255, 0.15)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  sectionIcon: {
    fontSize: 24,
    color: COLORS.primary,
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.primary,
  },
  inputGroup: {
    marginBottom: 16,
  },
  rowInputs: {
    flexDirection: 'row',
    gap: 16,
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.onSurfaceVariant,
    marginBottom: 8,
    marginLeft: 8,
  },
  input: {
    backgroundColor: COLORS.inputBg,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
    fontFamily: 'Inter',
    fontSize: 16,
    color: COLORS.onSurface,
  },
  uploadArea: {
    borderWidth: 2,
    borderColor: 'rgba(170, 196, 245, 0.5)',
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    backgroundColor: 'rgba(253, 248, 230, 0.5)',
  },
  uploadIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.secondaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  uploadIcon: {
    fontSize: 24,
    color: COLORS.primary,
  },
  uploadTitle: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.onSurface,
    marginBottom: 4,
  },
  uploadSubtitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: COLORS.onSurfaceVariant,
    marginBottom: 24,
  },
  uploadButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
  uploadButtonText: {
    color: COLORS.onPrimary,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  tag: {
    backgroundColor: COLORS.secondaryContainer,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tagText: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: COLORS.onSecondaryContainer,
    fontWeight: '500',
  },
  tagClose: {
    fontSize: 14,
    color: COLORS.onSecondaryContainer,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: 'rgba(60, 90, 171, 0.2)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 4,
  },
  saveButtonText: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.onPrimary,
  },
  secureBadge: {
    backgroundColor: 'rgba(60, 90, 171, 0.05)',
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(60, 90, 171, 0.1)',
  },
  secureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  secureIcon: {
    fontSize: 16,
    color: COLORS.primary,
  },
  secureTitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
  secureText: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    lineHeight: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 64,
    height: 64,
    backgroundColor: COLORS.error,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(186, 26, 26, 0.4)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 8,
    zIndex: 100,
  },
  fabIcon: {
    fontSize: 28,
    color: COLORS.onError,
  },
});
