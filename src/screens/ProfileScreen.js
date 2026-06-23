import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const COLORS = {
  background: '#FFF8DE',
  primary: '#3c5aab',
  primaryContainer: '#8ca9ff',
  surface: '#ffffff',
  onSurface: '#1a1b21',
  onSurfaceVariant: '#444651',
  outline: '#747682',
  error: '#ba1a1a',
  secondaryContainer: '#b3cdfe',
  onSecondaryContainer: '#3d5681',
  cardBg: '#FFF2C6',
};

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      {/* Top AppBar */}
      <View style={styles.appBar}>
        <View style={styles.appBarLeft}>
          <View style={styles.avatarBorder}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCISiy2_u1lMJXNtQAMYJnJAgWobkOhMJgL070qzkE_GstwUvmelo7c_hI52FpIBjksi4RBMLO99yanZBkfk3SbtNyFi-vuDdychqcadNW1Auj1jCUmPeoLCKocplJrNsTtBMYNhnqpK8K-dQu7uK9Ju9ixW2tm1rrMxgI7X2eaahx4hFAk26AQX2qPLxm7X3SS3cGIuEhmpo8-SFSgvXYkHCx7uDFzsho0M7zUj_vlGxGlSaMIFHwE0ps1qX1fmGskO4M5j2tP1rM' }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.appName}>SurakshaYatri</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <MaterialIcons name="notifications" style={styles.notifIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileImageWrapper}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyRyw7M8u6fYR9PG4Cj9K4pk1hXnUVmV3x38y3snQLQuffcIjuO_izsHExbL69NUVCFcIcnie59Fux-qsUXp_OnqqJHN4yvOvQaZ-cNpQXHsf2IQgvXYOgpWEHfqw5t0erHv1q5E8fEuYcVWFa5o8KM24RQJ_7hgDk_cDt-Yt3-L9fJADtep204Glsthb-ZlwWv7-_xT0tRKpAEUAZkQM47ybvw5h5nFi4L6D06OE3vB_d6-EKXN8awHXVCQLrbnizlLDaQjqR_No' }}
              style={styles.mainAvatar}
            />
            <TouchableOpacity style={styles.editBtn}>
              <MaterialIcons name="edit" style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Aditi Sharma</Text>
          <Text style={styles.profileSubtitle}>Premium Member since 2023</Text>
        </View>

        {/* Sections */}
        <View style={styles.sectionsContainer}>
          
          {/* Personal Details */}
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionLabel}>PERSONAL DETAILS</Text>
            <View style={styles.premiumCard}>
              <TouchableOpacity style={styles.listItem}>
                <View style={styles.listLeft}>
                  <MaterialIcons name="person" style={styles.listIcon} />
                  <Text style={styles.listText}>Account Information</Text>
                </View>
                <MaterialIcons name="chevron-right" style={styles.chevron} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.listItem}>
                <View style={styles.listLeft}>
                  <MaterialIcons name="security" style={styles.listIcon} />
                  <Text style={styles.listText}>Identity Verification</Text>
                </View>
                <MaterialIcons name="chevron-right" style={styles.chevron} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Safety Network */}
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionLabel}>SAFETY NETWORK</Text>
            <View style={styles.premiumCard}>
              <TouchableOpacity style={styles.listItem}>
                <View style={styles.listLeft}>
                  <MaterialIcons name="group" style={styles.listIcon} />
                  <Text style={styles.listText}>Emergency Contacts</Text>
                </View>
                <View style={styles.listRight}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>3 ACTIVE</Text>
                  </View>
                  <MaterialIcons name="chevron-right" style={styles.chevron} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listItem}>
                <View style={styles.listLeft}>
                  <MaterialIcons name="local-hospital" style={styles.listIcon} />
                  <Text style={styles.listText}>Medical ID</Text>
                </View>
                <MaterialIcons name="chevron-right" style={styles.chevron} />
              </TouchableOpacity>
            </View>
          </View>

          {/* App Settings */}
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionLabel}>APP SETTINGS</Text>
            <View style={styles.premiumCard}>
              <TouchableOpacity style={styles.listItem}>
                <View style={styles.listLeft}>
                  <MaterialIcons name="notifications" style={styles.listIcon} />
                  <Text style={styles.listText}>Alert Preferences</Text>
                </View>
                <MaterialIcons name="chevron-right" style={styles.chevron} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.listItem}>
                <View style={styles.listLeft}>
                  <MaterialIcons name="language" style={styles.listIcon} />
                  <Text style={styles.listText}>Language & Region</Text>
                </View>
                <MaterialIcons name="chevron-right" style={styles.chevron} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Trust & Safety */}
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionLabel}>TRUST & SAFETY</Text>
            <View style={styles.premiumCard}>
              <TouchableOpacity style={styles.listItem}>
                <View style={styles.listLeft}>
                  <MaterialIcons name="policy" style={styles.listIcon} />
                  <Text style={styles.listText}>Privacy Policy</Text>
                </View>
                <MaterialIcons name="chevron-right" style={styles.chevron} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.listItem}>
                <View style={styles.listLeft}>
                  <MaterialIcons name="gavel" style={styles.listIcon} />
                  <Text style={styles.listText}>Terms of Service</Text>
                </View>
                <MaterialIcons name="chevron-right" style={styles.chevron} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Out */}
          <TouchableOpacity style={styles.signOutBtn} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>

        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
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
    zIndex: 50,
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
    backgroundColor: COLORS.primaryContainer,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  appName: {
    fontFamily: 'Inter',
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.primary,
  },
  notifBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifIcon: {
    fontSize: 24,
    color: COLORS.primary,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    alignItems: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImageWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  mainAvatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: '#FFF2C6',
  },
  editBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.primary,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  editIcon: {
    fontSize: 18,
    color: COLORS.onPrimary,
  },
  profileName: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.onSurface,
    marginBottom: 4,
  },
  profileSubtitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: COLORS.outline,
    fontWeight: '500',
  },
  sectionsContainer: {
    width: '100%',
    maxWidth: 500,
    gap: 20,
  },
  sectionBlock: {},
  sectionLabel: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
    letterSpacing: 1,
    marginLeft: 8,
    marginBottom: 12,
  },
  premiumCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 8,
    shadowColor: 'rgba(140, 169, 255, 0.15)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 3,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  listLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  listIcon: {
    fontSize: 24,
    color: COLORS.onSurfaceVariant,
  },
  listText: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: COLORS.onSurface,
    fontWeight: '500',
  },
  listRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  badge: {
    backgroundColor: COLORS.secondaryContainer,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  badgeText: {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.onSecondaryContainer,
  },
  chevron: {
    fontSize: 24,
    color: COLORS.outline,
  },
  signOutBtn: {
    paddingVertical: 16,
    marginTop: 16,
    alignItems: 'center',
  },
  signOutText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.error,
  },
});
