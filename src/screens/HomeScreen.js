import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Platform, StatusBar
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const COLORS = {
  background: '#faf8ff',
  primary: '#3c5aab',
  primaryContainer: '#8ca9ff',
  onPrimaryContainer: '#173b8a',
  onPrimary: '#ffffff',
  surface: '#ffffff',
  surfaceContainerLow: '#f4f3fa',
  surfaceContainerLowest: '#ffffff',
  onSurface: '#1a1b21',
  onSurfaceVariant: '#444651',
  outline: '#747682',
  outlineVariant: '#c4c6d3',
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  secondary: '#455f8a',
  secondaryContainer: '#b3cdfe',
  onSecondaryContainer: '#3d5681',
  tertiary: '#755b00',
  tertiaryFixed: '#ffdf91',
  onTertiaryFixedVariant: '#594400',
  primaryFixed: '#dbe1ff',
  onPrimaryFixedVariant: '#204291',
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(250, 248, 255, 0.8)" />
      
      {/* Top AppBar */}
      <View style={styles.appBar}>
        <View style={styles.appBarLeft}>
          <View style={styles.avatarBorder}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDug0S2VpuGIeJpM4HPYsyGQlYKfF1O-dtnmMpFodlr4yBcwI13E9IHcI_kdwTREo1U3-xkzdYbb6rLbHYJr5eCSt2kI693EotcEHvEl3e03yIH31Di9FrstruDijTleSChgCwtt4yNFrrFpLj3SAUnGztOcjUlbVCvl27WeURyLYke-ncD5PSBqx70JB-tKSh__-IpWG3I7a-2ckGfIYGb8mB0ixbuv43JxcH-zn2iXgwOYDrFLDc_ivc1uSd7-uaFDH6egSctEX8' }} 
              style={styles.avatar}
            />
          </View>
          <View>
            <Text style={styles.greeting}>Hello, Sarah</Text>
            <Text style={styles.appName}>SurakshaYatri</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <MaterialIcons name="notifications" style={styles.notifIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Tourist ID Card Section */}
        <TouchableOpacity style={styles.idCardContainer} activeOpacity={0.9}>
          <View style={styles.idCard}>
            <View style={styles.idCardDecoration} />
            <View style={styles.idCardContent}>
              <View style={styles.idCardLeft}>
                <Text style={styles.idCardLabel}>OFFICIAL TOURIST ID</Text>
                <View style={styles.idCardDetails}>
                  <Text style={styles.idCardName}>Sarah Jenkins</Text>
                  <Text style={styles.idCardId}>ID: SY-8829-001</Text>
                </View>
                <View style={styles.idCardStatus}>
                  <MaterialIcons name="security" style={styles.idCardStatusIcon} />
                  <Text style={styles.idCardStatusText}>Verified Traveler • India</Text>
                </View>
              </View>
              <View style={styles.qrContainer}>
                <Image 
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwHsFev-1BFJ90-yibac86SXJf_AxAzmDrifUL6SngenWqaDMOwI9kbZLRYbA9rE0VCtTdJIc72unIH9-1sZQHbpQhUFi2sl_tKZ540KJFDWYDrFzzXvn57r-GbiHQ2gnOu1STby2dlUwCRmICWTGS2f2MUHbVcaTMu8jx0PqS7w7rs4DrRMqO_jjDx5SvJOmI-Ri_seOGX5X_oR2oNYjpnxYwCBr4Efjc-WyqNkf3DbV2L6rynTaLgfQYjO8Y72w2HS63tHuGSP0' }}
                  style={styles.qrImage}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Safety Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Safety Score</Text>
            <View style={styles.scoreRow}>
              <Text style={styles.scoreValue}>98</Text>
              <Text style={styles.scoreMax}>/100</Text>
            </View>
            <View style={styles.progressTrack}>
              <View style={[styles.progressBar, { width: '98%' }]} />
            </View>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Current Zone</Text>
            <View style={styles.zoneRow}>
              <View style={styles.zoneDot} />
              <Text style={styles.zoneText}>Safe</Text>
            </View>
            <Text style={styles.zoneLocation}>Green Park, Delhi</Text>
          </View>
        </View>

        {/* Quick Action Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionItem}>
              <View style={[styles.actionIconContainer, { backgroundColor: COLORS.errorContainer }]}>
                <MaterialIcons name="emergency" style={[styles.actionIcon, { color: COLORS.error }]} />
              </View>
              <Text style={styles.actionText}>SOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem}>
              <View style={[styles.actionIconContainer, { backgroundColor: COLORS.secondaryContainer }]}>
                <MaterialIcons name="badge" style={[styles.actionIcon, { color: COLORS.onSecondaryContainer }]} />
              </View>
              <Text style={styles.actionText}>My ID</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem}>
              <View style={[styles.actionIconContainer, { backgroundColor: COLORS.primaryFixed }]}>
                <MaterialIcons name="map" style={[styles.actionIcon, { color: COLORS.onPrimaryFixedVariant }]} />
              </View>
              <Text style={styles.actionText}>Route</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem}>
              <View style={[styles.actionIconContainer, { backgroundColor: COLORS.tertiaryFixed }]}>
                <MaterialIcons name="check-circle" style={[styles.actionIcon, { color: COLORS.onTertiaryFixedVariant }]} />
              </View>
              <Text style={styles.actionText}>Check In</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Interactive Map Preview */}
        <TouchableOpacity style={styles.mapPreviewContainer} activeOpacity={0.9} onPress={() => navigation.navigate('Map')}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATZo2NI69iGRFCY9blEP3JR03oQ0b6TX5BMiz31Q-LqlOGpdjxV1y49p5el8p8p3u0vjNm4fqZK07Jh1I0Z_ptE42n_6dwqmlgQ_EmUaPEo920i_m95Rug7YTjVK6O3jVhag20jnGuFiitpzf234H-zis4BMMJ7Hs5KM5MOUF3Y4NhN-NEflh8JjsMqdM7bgvC5phVUweJ-gEztzAJjc0LfPrWAy7zF2DEtJGXSvbuBnGfiORRIWk-BhXn5xB-mVIGl4kaQTQHUek' }}
            style={styles.mapPreviewImage}
          />
          <View style={styles.mapOverlay} />
          <View style={styles.mapContent}>
            <View>
              <Text style={styles.mapLabel}>Live Location</Text>
              <Text style={styles.mapTitle}>Safdarjung Enclave</Text>
            </View>
            <View style={styles.trackingBadge}>
              <View style={styles.trackingDot} />
              <Text style={styles.trackingText}>Tracking Live</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Bento Section: Alerts & Itinerary */}
        <View style={styles.bentoGrid}>
          <View style={styles.bentoCard}>
            <View style={styles.bentoHeader}>
              <Text style={styles.bentoTitle}>Recent Alerts</Text>
              <TouchableOpacity><Text style={styles.bentoLink}>View All</Text></TouchableOpacity>
            </View>
            <View style={styles.alertList}>
              <View style={[styles.alertItem, { borderLeftColor: COLORS.tertiary }]}>
                <MaterialIcons name="warning" style={[styles.alertIcon, { color: COLORS.tertiary }]} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.alertTitle}>Crowded Event Nearby</Text>
                  <Text style={styles.alertDesc}>Heavy traffic near India Gate until 8 PM.</Text>
                </View>
              </View>
              <View style={[styles.alertItem, { borderLeftColor: COLORS.primary }]}>
                <MaterialIcons name="info" style={[styles.alertIcon, { color: COLORS.primary }]} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.alertTitle}>Weather Update</Text>
                  <Text style={styles.alertDesc}>Light rain expected this evening.</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.bentoCard, { backgroundColor: 'rgba(179, 205, 254, 0.3)', borderColor: 'rgba(69, 95, 138, 0.2)' }]}>
            <View style={styles.bentoHeader}>
              <Text style={styles.bentoTitle}>Today's Plan</Text>
              <MaterialIcons name="calendar-today" style={styles.bentoIconSecondary} />
            </View>
            <View style={styles.timeline}>
              <View style={styles.timelineLine} />
              <View style={styles.timelineItem}>
                <View style={styles.timelineDotActive} />
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTitle}>Visit Lotus Temple</Text>
                  <Text style={styles.timelineDesc}>10:00 AM • Verified Route</Text>
                </View>
              </View>
              <View style={[styles.timelineItem, { opacity: 0.6 }]}>
                <View style={styles.timelineDotInactive} />
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTitle}>Lunch at Hauz Khas</Text>
                  <Text style={styles.timelineDesc}>1:30 PM • 3 nearby safety posts</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* SOS FAB */}
      <TouchableOpacity 
        style={styles.sosFab}
        onPress={() => navigation.navigate('SOS')}
        activeOpacity={0.8}
      >
        <MaterialIcons name="emergency" style={styles.sosFabIcon} />
      </TouchableOpacity>
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
    backgroundColor: 'rgba(250, 248, 255, 0.8)',
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
    borderColor: COLORS.primary,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  greeting: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    fontWeight: '600',
  },
  appName: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
  },
  notifBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    paddingBottom: 24,
  },
  idCardContainer: {
    marginBottom: 32,
  },
  idCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 24,
    padding: 24,
    shadowColor: 'rgba(60, 90, 171, 0.5)',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 1,
    shadowRadius: 25,
    elevation: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  idCardDecoration: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: 'rgba(140, 169, 255, 0.2)',
  },
  idCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 10,
  },
  idCardLeft: {
    flex: 1,
  },
  idCardLabel: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.onPrimary,
    letterSpacing: 1.5,
    opacity: 0.8,
    marginBottom: 16,
  },
  idCardDetails: {
    marginBottom: 16,
  },
  idCardName: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.onPrimary,
  },
  idCardId: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: COLORS.onPrimary,
    opacity: 0.9,
  },
  idCardStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  idCardStatusIcon: {
    fontSize: 18,
    color: COLORS.onPrimary,
  },
  idCardStatusText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: COLORS.onPrimary,
    fontWeight: '500',
  },
  qrContainer: {
    backgroundColor: COLORS.surface,
    padding: 8,
    borderRadius: 12,
  },
  qrImage: {
    width: 80,
    height: 80,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.surfaceContainerLowest,
    padding: 20,
    borderRadius: 16,
    shadowColor: 'rgba(140, 169, 255, 0.15)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.3)',
  },
  statLabel: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: COLORS.onSurfaceVariant,
    fontWeight: '500',
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
    paddingVertical: 8,
  },
  scoreValue: {
    fontFamily: 'Inter',
    fontSize: 36,
    fontWeight: '700',
    color: COLORS.primary,
  },
  scoreMax: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: COLORS.onSurfaceVariant,
    paddingBottom: 4,
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#eeedf4',
    borderRadius: 3,
    marginTop: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 3,
  },
  zoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  zoneDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
  },
  zoneText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  zoneLocation: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    fontWeight: '600',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.onSurface,
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionItem: {
    alignItems: 'center',
    gap: 8,
  },
  actionIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3,
  },
  actionIcon: {
    fontSize: 24,
  },
  actionText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.onSurface,
  },
  mapPreviewContainer: {
    height: 192,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 32,
    position: 'relative',
    shadowColor: 'rgba(140, 169, 255, 0.15)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 4,
  },
  mapPreviewImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(26, 27, 33, 0.3)',
  },
  mapContent: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  mapLabel: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.onPrimary,
    opacity: 0.8,
  },
  mapTitle: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.onPrimary,
  },
  trackingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  trackingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
  trackingText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.onPrimary,
  },
  bentoGrid: {
    gap: 16,
  },
  bentoCard: {
    backgroundColor: COLORS.surfaceContainerLow,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.2)',
  },
  bentoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  bentoTitle: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  bentoLink: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.primary,
  },
  bentoIconSecondary: {
    fontSize: 20,
    color: COLORS.primary,
  },
  alertList: {
    gap: 12,
  },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    backgroundColor: COLORS.surface,
    padding: 12,
    borderRadius: 12,
    borderLeftWidth: 4,
  },
  alertIcon: {
    fontSize: 20,
  },
  alertTitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.onSurface,
    marginBottom: 2,
  },
  alertDesc: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    fontWeight: '600',
  },
  timeline: {
    position: 'relative',
    paddingLeft: 24,
    gap: 24,
  },
  timelineLine: {
    position: 'absolute',
    left: 10,
    top: 8,
    bottom: 8,
    width: 2,
    backgroundColor: 'rgba(69, 95, 138, 0.3)',
  },
  timelineItem: {
    position: 'relative',
  },
  timelineDotActive: {
    position: 'absolute',
    left: -22,
    top: 6,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.secondary,
    borderWidth: 2,
    borderColor: COLORS.surface,
  },
  timelineDotInactive: {
    position: 'absolute',
    left: -22,
    top: 6,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.outline,
    borderWidth: 2,
    borderColor: COLORS.surface,
  },
  timelineContent: {},
  timelineTitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  timelineDesc: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    fontWeight: '600',
  },
  sosFab: {
    position: 'absolute',
    bottom: 96,
    right: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.error,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(186, 26, 26, 0.4)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 8,
    zIndex: 60,
  },
  sosFabIcon: {
    fontSize: 32,
    color: COLORS.onError,
  },
});
