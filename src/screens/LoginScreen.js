import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Dimensions, KeyboardAvoidingView, Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const COLORS = {
  background: '#faf8ff',
  primary: '#3c5aab',
  onPrimary: '#ffffff',
  surface: '#ffffff',
  onSurface: '#1a1b21',
  onSurfaceVariant: '#444651',
  outline: '#747682',
  secondaryContainer: '#b3cdfe',
  onSecondaryContainer: '#3d5681',
};

export default function LoginScreen({ navigation }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleSendOtp = () => {
    if (phone.length > 5) setStep(2);
  };

  const handleVerifyOtp = () => {
    // In a real app, verify OTP here.
    // Proceed to Registration.
    navigation.navigate('Registration');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.cardContainer}>
          
          {/* Header section with back button */}
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backBtn}
              onPress={() => {
                if (step === 2) setStep(1);
                else navigation.goBack();
              }}
            >
              <MaterialIcons name="arrow-back" style={styles.backIcon} />
            </TouchableOpacity>
            <View style={styles.logoContainer}>
              <View style={styles.logoCircle} />
              <Text style={styles.appName}>SurakshaYatri</Text>
            </View>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>
              {step === 1 ? 'Welcome Back' : 'Verify Identity'}
            </Text>
            <Text style={styles.subtitle}>
              {step === 1 
                ? 'Enter your mobile number to access your safety dashboard.' 
                : 'Enter the 6-digit biometric access code sent to your device.'}
            </Text>

            {step === 1 ? (
              // Step 1: Phone Input
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Mobile Number</Text>
                <View style={styles.phoneInputWrapper}>
                  {/* Mock Country Code Selector */}
                  <TouchableOpacity style={styles.countrySelector}>
                    <Text style={styles.countryFlag}>🇮🇳</Text>
                    <Text style={styles.countryCode}>+91</Text>
                    <MaterialIcons name="keyboard-arrow-down" style={styles.dropdownIcon} />
                  </TouchableOpacity>
                  <TextInput
                    style={styles.phoneInput}
                    placeholder="Enter your number"
                    placeholderTextColor="rgba(68, 70, 81, 0.5)"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                  />
                </View>

                <TouchableOpacity 
                  style={[styles.primaryBtn, phone.length < 6 && styles.primaryBtnDisabled]}
                  onPress={handleSendOtp}
                  disabled={phone.length < 6}
                >
                  <Text style={styles.primaryBtnText}>Send OTP</Text>
                </TouchableOpacity>

                <View style={styles.divider}>
                  <View style={styles.line} />
                  <Text style={styles.dividerText}>or continue with</Text>
                  <View style={styles.line} />
                </View>

                <TouchableOpacity style={styles.socialBtn}>
                  {/* Google G icon mock */}
                  <Text style={styles.socialIcon}>G</Text>
                  <Text style={styles.socialBtnText}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialBtn}>
                  {/* Apple icon mock */}
                  <Text style={styles.socialIcon}></Text>
                  <Text style={styles.socialBtnText}>Sign in with Apple</Text>
                </TouchableOpacity>
              </View>
            ) : (
              // Step 2: OTP Input
              <View style={styles.inputContainer}>
                <View style={styles.otpGrid}>
                  {otp.map((digit, i) => (
                    <TextInput
                      key={i}
                      style={styles.otpBox}
                      maxLength={1}
                      keyboardType="number-pad"
                      value={digit}
                      onChangeText={(val) => {
                        let newOtp = [...otp];
                        newOtp[i] = val;
                        setOtp(newOtp);
                      }}
                    />
                  ))}
                </View>
                
                <TouchableOpacity 
                  style={styles.primaryBtn}
                  onPress={handleVerifyOtp}
                >
                  <Text style={styles.primaryBtnText}>Verify & Continue</Text>
                </TouchableOpacity>

                <View style={styles.resendContainer}>
                  <Text style={styles.resendText}>Didn't receive the code? </Text>
                  <TouchableOpacity>
                    <Text style={styles.resendLink}>Resend in 00:45</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By continuing, you agree to our <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>.
            </Text>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c5aab', // Base background matching the splash transition
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardContainer: {
    backgroundColor: COLORS.background,
    height: height * 0.85,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  backBtn: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.4)',
    marginRight: 16,
  },
  backIcon: {
    fontSize: 24,
    color: COLORS.onSurface,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.primaryContainer,
  },
  appName: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.onSurface,
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: COLORS.onSurfaceVariant,
    marginBottom: 40,
    lineHeight: 24,
  },
  inputContainer: {
    gap: 16,
  },
  inputLabel: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.onSurfaceVariant,
    marginBottom: 8,
  },
  phoneInputWrapper: {
    flexDirection: 'row',
    gap: 12,
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.4)',
    gap: 8,
  },
  countryFlag: {
    fontSize: 20,
  },
  countryCode: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.onSurface,
  },
  dropdownIcon: {
    fontSize: 20,
    color: COLORS.onSurfaceVariant,
  },
  phoneInput: {
    flex: 1,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.4)',
    fontFamily: 'Inter',
    fontSize: 18,
    color: COLORS.onSurface,
  },
  primaryBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: 'rgba(60, 90, 171, 0.3)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  primaryBtnDisabled: {
    backgroundColor: COLORS.outline,
    shadowOpacity: 0,
    elevation: 0,
  },
  primaryBtnText: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.onPrimary,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(196, 198, 211, 0.4)',
  },
  dividerText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: COLORS.onSurfaceVariant,
    paddingHorizontal: 16,
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surface,
    paddingVertical: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.4)',
    gap: 12,
  },
  socialIcon: {
    fontSize: 20,
    fontWeight: '700',
  },
  socialBtnText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.onSurface,
  },
  otpGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  otpBox: {
    width: 48,
    height: 56,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 211, 0.4)',
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  resendText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: COLORS.onSurfaceVariant,
  },
  resendLink: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
  },
  footer: {
    marginTop: 'auto',
  },
  footerText: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 18,
  },
  linkText: {
    fontWeight: '600',
    color: COLORS.primary,
  },
});
