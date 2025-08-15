import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Home as HomeIcon, Heart, Bell, User } from 'lucide-react-native';
import { colors } from '@/styles/theme';
import ProtectedRoute from "@/components/ProtectedRoute";


export const s = StyleSheet.create({
  tabBar: {
    height: 70,
    backgroundColor: colors.white.base,
    borderTopWidth: 0,
    elevation: 0,
    shadowColor: 'transparent',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    color: colors.green.base,
    fontFamily: 'Lexend_400Regular',
  },
  focusedLabel: {
    color: colors.green.base,
    fontFamily: 'Lexend_600SemiBold',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFocusedContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function TabLayout() {
  return (
    <ProtectedRoute>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: s.tabBar,
          tabBarItemStyle: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <View style={s.tab}>
                {focused ? (
                  <LinearGradient
                    colors={['#4EAF57', '#285D35']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={s.iconFocusedContainer}
                  >
                    <HomeIcon size={24} color={colors.white.base} />
                  </LinearGradient>
                ) : (
                  <View style={s.iconContainer}>
                    <HomeIcon size={24} color={colors.green.base} />
                  </View>
                )}
                <Text style={[s.label, focused && s.focusedLabel]}>Home</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ focused }) => (
              <View style={s.tab}>
                {focused ? (
                  <LinearGradient
                    colors={['#4EAF57', '#285D35']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={s.iconFocusedContainer}
                  >
                    <Heart size={24} color={colors.white.base} />
                  </LinearGradient>
                ) : (
                  <View style={s.iconContainer}>
                    <Heart size={24} color={colors.green.base} />
                  </View>
                )}
                <Text style={[s.label, focused && s.focusedLabel]}>Favoritos</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            title: 'Notificação',
            tabBarIcon: ({ focused }) => (
              <View style={s.tab}>
                {focused ? (
                  <LinearGradient
                    colors={['#4EAF57', '#285D35']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={s.iconFocusedContainer}
                  >
                    <Bell size={24} color={colors.white.base} />
                  </LinearGradient>
                ) : (
                  <View style={s.iconContainer}>
                    <Bell size={24} color={colors.green.base} />
                  </View>
                )}
                <Text style={[s.label, focused && s.focusedLabel]}>Notificação</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="perfil"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ focused }) => (
              <View style={s.tab}>
                {focused ? (
                  <LinearGradient
                    colors={['#4EAF57', '#285D35']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={s.iconFocusedContainer}
                  >
                    <User size={24} color={colors.white.base} />
                  </LinearGradient>
                ) : (
                  <View style={s.iconContainer}>
                    <User size={24} color={colors.green.base} />
                  </View>
                )}
                <Text style={[s.label, focused && s.focusedLabel]}>Perfil</Text>
              </View>
            ),
          }}
        />
      </Tabs>
    </ProtectedRoute>
  );
}
