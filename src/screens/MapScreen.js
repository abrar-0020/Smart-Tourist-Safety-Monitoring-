import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Animated, StatusBar, ScrollView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

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
  outlineVariant: '#c4c6d3',
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onError: '#ffffff',
};

export default function MapScreen() {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      
      {/* Top AppBar (Shared Component) */}
      <View style={styles.appBar}>
        <View style={styles.appBarLeft}>
          <View style={styles.avatarBorder}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxAOO90fKg5ilHOyvrnxoBiCAvjyi3-CZBCOmSsU1h0iWZXTCTJV7FVXRPlEJmz5YjkXXbVBfvdG20dIJzMStNiFo5zG02p5mlYZtT-wroVdvdrxxnxWdOvt9c1WAPTMEs4tL-H9m7CN6k3_sS7v9dBeabq_PSIyPepvtm0PKPmpM2OZQV9AvrhOG1t6b9SqYeo1ozXFdvnDWrbFmWHyhVv9yApVtbogVkRzIdExPrbaOgxfFAi4WriCcQzm6c-try4XFCT2mrRp0' }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.appName}>SurakshaYatri</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <MaterialIcons name="notifications" style={styles.notifIcon} />
        </TouchableOpacity>
      </View>

      {/* Main Map Container */}
      <View style={styles.mapContainer}>
        {/* Interactive Map Background */}
        <Image 
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwqDxEHH14gjVZ1bGLGPrFPLh7ZGg3u2He-Viv0SamRyN9sO2aoHZ7dSTdQMDwAHcd2OEppUBFFn5-8CE8qWAOMT6S6pBg5mra7V3ZolDCmbRX28G14tZBAFzoFNcjuDaBuITQ4a99TSIzwgZdw2qM4pmW3ULwUYHFHje2O2mSQ06McE-Dxozk-1Sfz0pQCtWMl1_55gpNGC5cbT-tdGeCWiSAWSFr8qxHDiyce-e23xfmmdAWSibOuOXKldW0SwcpzTdaffQMrQU' }}
          style={styles.mapImage}
        />
        
        {/* Current Location Indicator */}
        <View style={styles.currentLocation}>
          <View style={styles.locationPulse} />
          <View style={styles.locationDot} />
        </View>
      </View>

      {/* Map Controls (Floating) */}
      <View style={styles.mapControls}>
        <TouchableOpacity style={styles.controlBtn}>
          <MaterialIcons name="add" style={styles.controlIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlBtn}>
          <MaterialIcons name="remove" style={styles.controlIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.controlBtn, { backgroundColor: COLORS.primary, marginTop: 16 }]}>
          <MaterialIcons name="my-location" style={[styles.controlIcon, { color: COLORS.onPrimary }]} />
        </TouchableOpacity>
      </View>

      {/* Legend */}
      <View style={styles.legend}>
        <View style={styles.legendRow}>
          <View style={[styles.legendDot, { backgroundColor: '#4CAF50' }]} />
          <Text style={styles.legendText}>Safe Area</Text>
        </View>
        <View style={styles.legendRow}>
          <View style={[styles.legendDot, { backgroundColor: '#FFC107' }]} />
          <Text style={styles.legendText}>Caution</Text>
        </View>
        <View style={styles.legendRow}>
          <View style={[styles.legendDot, { backgroundColor: '#F44336' }]} />
          <Text style={styles.legendText}>High Risk</Text>
        </View>
      </View>

      {/* Caution Bottom Sheet */}
      <View style={[styles.bottomSheet, bottomSheetVisible ? {} : styles.bottomSheetHidden]}>
        <View style={styles.bottomSheetContent}>
          <TouchableOpacity 
            style={styles.dragHandleContainer}
            onPress={() => setBottomSheetVisible(!bottomSheetVisible)}
          >
            <View style={styles.dragHandle} />
          </TouchableOpacity>
          
          <ScrollView contentContainerStyle={styles.sheetScroll}>
            {/* Warning Header */}
            <View style={styles.warningHeader}>
              <View style={styles.warningIconContainer}>
                <MaterialIcons name="warning" style={styles.warningIcon} />
              </View>
              <View style={styles.warningTextContainer}>
                <Text style={styles.warningTitle}>Caution: Entering High-Risk Area</Text>
                <Text style={styles.warningDesc}>Recent incidents reported within 500m of your path.</Text>
              </View>
            </View>

            {/* Safety Tips Bento Grid */}
            <View style={styles.tipsGrid}>
              <View style={styles.tipCard}>
                <MaterialIcons name="visibility" style={styles.tipIcon} />
                <Text style={styles.tipTitle}>Stay Alert</Text>
                <Text style={styles.tipDesc}>Avoid using your phone while walking.</Text>
              </View>
              <View style={styles.tipCard}>
                <MaterialIcons name="groups" style={styles.tipIcon} />
                <Text style={styles.tipTitle}>Safe Passage</Text>
                <Text style={styles.tipDesc}>Stick to well-lit, populated streets.</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.shareBtn}>
                <Text style={styles.shareBtnText}>Share Live Location</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sosBtn}>
                <MaterialIcons name="emergency" style={styles.sosBtnIcon} />
                <Text style={styles.sosBtnText}>ACTIVATE SOS</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 50,
    backgroundColor: 'rgba(250, 248, 255, 0.8)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 48, // approximate status bar height
    paddingBottom: 16,
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
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
  },
  notifBtn: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifIcon: {
    fontSize: 24,
    color: COLORS.primary,
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  currentLocation: {
    position: 'absolute',
    top: '65%',
    left: '55%',
    width: 24,
    height: 24,
    marginLeft: -12,
    marginTop: -12,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  locationPulse: {
    position: 'absolute',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(60, 90, 171, 0.3)',
  },
  locationDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mapControls: {
    position: 'absolute',
    right: 16,
    top: 120,
    gap: 12,
    zIndex: 30,
  },
  controlBtn: {
    width: 48,
    height: 48,
    backgroundColor: COLORS.surfaceContainerLowest,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  controlIcon: {
    fontSize: 24,
    color: COLORS.onSurface,
  },
  legend: {
    position: 'absolute',
    left: 16,
    top: 120,
    zIndex: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.3)',
    gap: 8,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    fontWeight: '600',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 80, // Above bottom nav
    zIndex: 40,
    paddingHorizontal: 16,
  },
  bottomSheetHidden: {
    transform: [{ translateY: '75%' }],
  },
  bottomSheetContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 40,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.2)',
    overflow: 'hidden',
  },
  dragHandleContainer: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  dragHandle: {
    width: 48,
    height: 6,
    backgroundColor: 'rgba(196, 198, 211, 0.5)',
    borderRadius: 3,
  },
  sheetScroll: {
    padding: 24,
    paddingTop: 8,
  },
  warningHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    marginBottom: 24,
  },
  warningIconContainer: {
    width: 56,
    height: 56,
    backgroundColor: COLORS.errorContainer,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningIcon: {
    fontSize: 32,
    color: COLORS.error,
  },
  warningTextContainer: {
    flex: 1,
  },
  warningTitle: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.error,
    marginBottom: 4,
  },
  warningDesc: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: COLORS.onSurfaceVariant,
  },
  tipsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  tipCard: {
    flex: 1,
    backgroundColor: COLORS.surfaceContainerLow,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.1)',
  },
  tipIcon: {
    fontSize: 24,
    marginBottom: 8,
    color: COLORS.primary,
  },
  tipTitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.onSurface,
    marginBottom: 4,
  },
  tipDesc: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    lineHeight: 16,
  },
  actionButtons: {
    gap: 12,
  },
  shareBtn: {
    width: '100%',
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  shareBtnText: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.onPrimary,
  },
  sosBtn: {
    width: '100%',
    backgroundColor: COLORS.error,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: 'rgba(186, 26, 26, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 4,
  },
  sosBtnIcon: {
    fontSize: 24,
    color: COLORS.onError,
  },
  sosBtnText: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.onError,
  },
});
