import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar
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
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onErrorContainer: '#93000a',
  secondary: '#455f8a',
  secondaryContainer: '#b3cdfe',
  onSecondaryContainer: '#3d5681',
};

export default function TimelineScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
      {/* Top AppBar */}
      <View style={styles.appBar}>
        <View style={styles.appBarLeft}>
          <View style={styles.avatarBorder}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_dEOV7oyPEbFWWXkHI8vq6W9ayUalnXhvDOyl2A11rdJWeYCDIrRkDZHlvOklWC2YGhagFAWiTjKeDGHfff2nP8T7naxrimL9zrMxN5RHibbmMReTBNXiMXeldEInx_e58wWy-Dntu5jt8QLwtyqNfdK77XPGOBiyidOT6Qn9RK6IAMRoxky6VC1Cn206dkt_ty-Qe9isN8T3b-U1jTAhnNbMN0xZIubPokko5TMuTxOJYXc6aKctldnHpwBSjzQ7sRRRb5sNsQw' }}
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
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.screenTitle}>Journey Timeline</Text>
          <Text style={styles.screenSubtitle}>Real-time safety logs for your current trip to Kyoto.</Text>
        </View>

        {/* Timeline Container */}
        <View style={styles.timelineContainer}>
          
          {/* High Risk Alert */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLine} />
            <View style={styles.timelineIconContainer}>
              <View style={[styles.timelineIconCircle, { backgroundColor: COLORS.error }]}>
                <MaterialIcons name="warning" style={styles.timelineIcon} />
              </View>
            </View>
            <View style={styles.timelineContent}>
              <View style={styles.timelineHeader}>
                <Text style={[styles.timelineTitle, { color: COLORS.error }]}>High Risk Area Alert</Text>
                <Text style={styles.timelineTime}>14:22</Text>
              </View>
              <View style={[styles.glassCard, { borderColor: 'rgba(186, 26, 26, 0.3)' }]}>
                <Text style={styles.timelineDesc}>You entered the Gion District outskirts where an active demonstration is reported. Please stay on main streets.</Text>
                <View style={styles.tagsRow}>
                  <View style={[styles.tag, { backgroundColor: COLORS.errorContainer }]}>
                    <Text style={[styles.tagText, { color: COLORS.onErrorContainer }]}>Alert Active</Text>
                  </View>
                  <View style={[styles.tag, { backgroundColor: '#eeedf4' }]}>
                    <Text style={[styles.tagText, { color: COLORS.onSurfaceVariant }]}>View Route</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* SOS Check-in */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLine} />
            <View style={styles.timelineIconContainer}>
              <View style={[styles.timelineIconCircle, { backgroundColor: COLORS.secondary }]}>
                <MaterialIcons name="check-circle" style={styles.timelineIcon} />
              </View>
            </View>
            <View style={styles.timelineContent}>
              <View style={styles.timelineHeader}>
                <Text style={[styles.timelineTitle, { color: COLORS.primary }]}>SOS Check-in Successful</Text>
                <Text style={styles.timelineTime}>12:05</Text>
              </View>
              <View style={styles.solidCard}>
                <Text style={styles.timelineDesc}>Scheduled safety check-in verified by biometric pulse. All emergency contacts notified of your safety status.</Text>
              </View>
            </View>
          </View>

          {/* Map Context Illustration */}
          <TouchableOpacity style={styles.mapCard} activeOpacity={0.9}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9bRM-aHNmUKHgRDovBNvVXbcgJVxtLFaGYM2adFJoyoDvjvcMe4NT1VfWOAWVUv4D1CIeIs_rVNKFL_BqX2rMRkCqWgQaM4hkdIGFepBU6TXLbNg8Z40_KuRzuwRk-qFnKrqBpYONCU9eUGh2_OP7grfkgeASysdFmiDq8ctxCF7iE91x_tboCY4K5602IUKqlgDF1fRvIpyXMCRO74UgC2fYTzgciJZUKjy52UYSm2e9UDugRjvzSEs22KPzkwwcj6tyrHfaVTs' }}
              style={styles.mapImage}
            />
            <View style={styles.mapOverlay} />
            <View style={styles.mapBadge}>
              <Text style={styles.mapBadgeText}>LIVE PATH TRACKING</Text>
            </View>
          </TouchableOpacity>

          {/* Reached Hotel */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLine} />
            <View style={styles.timelineIconContainer}>
              <View style={[styles.timelineIconCircle, { backgroundColor: COLORS.primaryContainer }]}>
                <MaterialIcons name="hotel" style={styles.timelineIcon} />
              </View>
            </View>
            <View style={styles.timelineContent}>
              <View style={styles.timelineHeader}>
                <Text style={styles.timelineTitle}>Reached Hotel</Text>
                <Text style={styles.timelineTime}>09:15</Text>
              </View>
              <View style={styles.solidCard}>
                <Text style={styles.timelineDesc}>Arrival at 'The Ritz-Carlton, Kyoto' confirmed via Geofencing. Safe Zone status activated for this location.</Text>
              </View>
            </View>
          </View>

          {/* Entered Safe Zone */}
          <View style={[styles.timelineItem, { paddingBottom: 0 }]}>
            <View style={styles.timelineIconContainer}>
              <View style={[styles.timelineIconCircle, { backgroundColor: COLORS.secondaryContainer }]}>
                <MaterialIcons name="security" style={[styles.timelineIcon, { color: COLORS.onSecondaryContainer }]} />
              </View>
            </View>
            <View style={styles.timelineContent}>
              <View style={styles.timelineHeader}>
                <Text style={styles.timelineTitle}>Entered Safe Zone</Text>
                <Text style={styles.timelineTime}>08:30</Text>
              </View>
              <View style={styles.solidCard}>
                <Text style={styles.timelineDesc}>You have entered the Kyoto Central Station high-security perimeter. Surveillance coverage is 100% in this area.</Text>
              </View>
            </View>
          </View>

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
  },
  headerSection: {
    marginBottom: 32,
  },
  screenTitle: {
    fontFamily: 'Inter',
    fontSize: 28,
    fontWeight: '600',
    color: COLORS.onSurface,
    marginBottom: 8,
  },
  screenSubtitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: COLORS.onSurfaceVariant,
  },
  timelineContainer: {
    gap: 16,
  },
  timelineItem: {
    flexDirection: 'row',
    position: 'relative',
    paddingBottom: 32,
  },
  timelineLine: {
    position: 'absolute',
    left: 23,
    top: 48,
    bottom: 0,
    width: 2,
    backgroundColor: 'rgba(60, 90, 171, 0.3)',
  },
  timelineIconContainer: {
    width: 48,
    alignItems: 'center',
    marginRight: 16,
  },
  timelineIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  timelineIcon: {
    fontSize: 24,
    color: '#ffffff',
  },
  timelineContent: {
    flex: 1,
    paddingTop: 4,
  },
  timelineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  timelineTitle: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.onSurface,
  },
  timelineTime: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: COLORS.outline,
    fontWeight: '600',
  },
  glassCard: {
    backgroundColor: 'rgba(255, 242, 198, 0.4)',
    borderWidth: 1,
    borderColor: 'rgba(170, 196, 245, 0.3)',
    borderRadius: 16,
    padding: 16,
  },
  solidCard: {
    backgroundColor: COLORS.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.3)',
    borderRadius: 16,
    padding: 16,
  },
  timelineDesc: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: COLORS.onSurfaceVariant,
    lineHeight: 24,
  },
  tagsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  tagText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
  },
  mapCard: {
    height: 192,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 32,
    position: 'relative',
    shadowColor: 'rgba(140, 169, 255, 0.15)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 4,
  },
  mapImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(60, 90, 171, 0.4)',
  },
  mapBadge: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  mapBadgeText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.onPrimary,
  },
});
