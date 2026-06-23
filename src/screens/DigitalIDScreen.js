import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const COLORS = {
  background: '#FFF8DE',
  primary: '#3c5aab',
  primaryContainer: '#8ca9ff',
  onPrimary: '#ffffff',
  surface: '#ffffff',
  surfaceContainerHighest: '#e3e2e9',
  surfaceContainerHigh: '#e8e7ef',
  onSurface: '#1a1b21',
  onSurfaceVariant: '#444651',
  outline: '#747682',
  outlineVariant: '#c4c6d3',
  error: '#ba1a1a',
  cardBg: '#FFF2C6',
};

export default function DigitalIDScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      {/* Top AppBar */}
      <View style={styles.appBar}>
        <View style={styles.appBarLeft}>
          <View style={styles.avatarBorder}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNEkm-ls0s51lMGd7Ns6ARORty5cq8hSO8Bw4oBiXMahJv-y0P2itLIiSBmFwSRr_QwciyCA2u2A-KA1Zg3Sq4lMwqnXjGfsuL2qKAdglLEKF6ej_pOY2l-5-dP-VfR5Np_aEt82iH5w1CQuR6FtzvxCqmdVmkQOAwf9QHG5nD1YDYydZ_OjYJyjlMPgLPjP_W5tqcVhXGRSqOjgUVtF7R5q1vWQh6UDOxUvdV4LVOGuge7YhfJePbtQidR_sOr-tr778KEvkJuso' }}
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
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Verified Tourist Identity</Text>
          <Text style={styles.screenSubtitle}>Present this QR code to local authorities if requested</Text>
        </View>

        {/* ID Card */}
        <View style={styles.idCard}>
          {/* Accent decoration mock */}
          <View style={styles.cardAccent} />
          
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardLabel}>TOURIST ID CARD</Text>
              <Text style={styles.cardName}>ELARA VANCE</Text>
            </View>
            <View style={styles.statusBadge}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>ACTIVE</Text>
            </View>
          </View>

          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA04IfFQiKux9zjCRewEXOZjSsX08FOuD6cha_x4OOuOX6BdEq0IomU7yLhKAOh1mm8VTWZP33h27Ju7Hj-EWDpWPTKYkwCCePtsGfakW2tMXb1HwBTFkX3mHk0naMcRkt4uFHxonRPQ7ACYkGaAajoeucNwKCIaV1njSjJVVQA2iDYEAP3ukkVUmsZv8T2bHQMQhgbEcEwgBSazlqPYYCZ8xpfb_xkxKDUTA9YXgqX4JYhUDhir_WD2UUU_aRjGZ1ipuVDkNhxW6Y' }}
                style={styles.profileImage}
              />
              <View style={styles.verifiedBadge}>
                <MaterialIcons name="check-circle" style={styles.verifiedIcon} />
              </View>
            </View>
            <View style={styles.profileDetails}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Unique ID Number</Text>
                <Text style={styles.detailValueBold}>SY-8829-4401-XP</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Validity Period</Text>
                <Text style={styles.detailValue}>Oct 2023 — Oct 2024</Text>
              </View>
            </View>
          </View>

          {/* QR Code Container */}
          <View style={styles.qrSection}>
            <View style={styles.qrContainer}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9flMwFYgullvLSDjZ8BhnBXaxI5cmpCL2Rt9eszWP1onn3RCSYIlES3V8aJa_knT5bto8FmMfPFBa9qzOnDd-wTMHWDk2mR0gaNjiRk6xtH17taGB1GOY40dpuvHJAsCWj_RrcAuPRpwK2KXgpPUNWRYj2Yz4vIRDDjKgXSGXJb62qPtm4zkHUEoEUuo2pOKwc7jxN5Qam2063wNXApX9hKgo78cXsFck1vjagJNosQduRT5Kon5nSPWUJjb93RYeWc6cHlQPtUE' }}
                style={styles.qrCode}
              />
            </View>
            <Text style={styles.qrLabel}>Scan to verify credentials</Text>
          </View>

          {/* Footer Details */}
          <View style={styles.cardFooter}>
            <View>
              <Text style={styles.detailLabel}>Nationality</Text>
              <Text style={styles.footerValue}>United Kingdom</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.detailLabel}>Passport Ref</Text>
              <Text style={styles.footerValue}>GBR-449102X</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.primaryBtn}>
            <MaterialIcons name="file-download" style={styles.primaryBtnIcon} />
            <Text style={styles.primaryBtnText}>Save Offline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn}>
            <MaterialIcons name="share" style={styles.secondaryBtnIcon} />
            <Text style={styles.secondaryBtnText}>Share to Emergency Contact</Text>
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
    borderWidth: 2,
    borderColor: 'rgba(60, 90, 171, 0.2)',
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
    paddingTop: 32,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    width: '100%',
  },
  screenTitle: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.onSurfaceVariant,
    marginBottom: 4,
  },
  screenSubtitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: COLORS.outline,
    textAlign: 'center',
  },
  idCard: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: COLORS.cardBg,
    borderRadius: 24,
    padding: 32,
    borderWidth: 1,
    borderColor: 'rgba(170, 196, 245, 0.3)',
    shadowColor: 'rgba(140, 169, 255, 0.15)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 5,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 32,
  },
  cardAccent: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 128,
    height: 128,
    backgroundColor: 'rgba(60, 90, 171, 0.05)',
    borderBottomLeftRadius: 128,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 32,
  },
  cardLabel: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 1.5,
    opacity: 0.6,
  },
  cardName: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
    marginTop: 4,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(60, 90, 171, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
  },
  statusText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    marginBottom: 32,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 112,
    height: 112,
    borderRadius: 16,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  verifiedIcon: {
    color: COLORS.primary,
    fontSize: 24,
  },
  profileDetails: {
    flex: 1,
    gap: 16,
  },
  detailItem: {},
  detailLabel: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.outline,
    marginBottom: 4,
  },
  detailValueBold: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.onSurface,
    letterSpacing: 1,
  },
  detailValue: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.onSurface,
  },
  qrSection: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.3)',
  },
  qrContainer: {
    width: 192,
    height: 192,
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 12,
    marginBottom: 16,
  },
  qrCode: {
    width: '100%',
    height: '100%',
  },
  qrLabel: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.outline,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 32,
    paddingTop: 24,
    borderTopWidth: 1,
    borderColor: 'rgba(60, 90, 171, 0.1)',
  },
  footerValue: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.onSurface,
  },
  actionButtons: {
    width: '100%',
    maxWidth: 400,
    gap: 16,
  },
  primaryBtn: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    gap: 8,
  },
  primaryBtnText: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.onPrimary,
  },
  primaryBtnIcon: {
    fontSize: 20,
    color: COLORS.onPrimary,
  },
  secondaryBtn: {
    backgroundColor: COLORS.surfaceContainerHighest,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  secondaryBtnText: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.onSurface,
  },
  secondaryBtnIcon: {
    fontSize: 20,
    color: COLORS.onSurface,
  },
});
