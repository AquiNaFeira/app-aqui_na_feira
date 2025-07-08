import { s } from "./style";
import { Home as HomeIcon, Heart, Bell, User } from "lucide-react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; 
import { colors } from "@/styles/theme";

import Home from "@/app/home";
import Perfil from "@/app/perfil";
import Favoritos from "@/app/favorites";
import Notificacao from "@/app/notifications";

const Tabs = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: s.tabBar,
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center"
        }
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={s.tab}>
              {focused ? (
                <LinearGradient
                  colors={['#ff9966', '#ff5e62']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={s.iconFocusedContainer}
                >
                  <HomeIcon size={24} color={colors.white.base}/>
                </LinearGradient>
              ) : (
                <View style={s.iconContainer}>
                  <HomeIcon size={24} color={colors.terracota.base}/>
                </View>
              )}
              <Text style={[s.label, focused && s.focusedLabel]}>Home</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={s.tab}>
              {focused ? (
                <LinearGradient
                  colors={['#ff9966', '#ff5e62']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={s.iconFocusedContainer}
                >
                  <Heart size={24} color={colors.white.base}/>
                </LinearGradient>
              ) : (
                <View style={s.iconContainer}>
                  <Heart size={24} color={colors.terracota.base}/>
                </View>
              )}
              <Text style={[s.label, focused && s.focusedLabel]}>Favoritos</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Notificacao"
        component={Notificacao}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={s.tab}>
              {focused ? (
                <LinearGradient
                  colors={['#ff9966', '#ff5e62']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={s.iconFocusedContainer}
                >
                  <Bell size={24} color={colors.white.base}/>
                </LinearGradient>
              ) : (
                <View style={s.iconContainer}>
                  <Bell size={24} color={colors.terracota.base}/>
                </View>
              )}
              <Text style={[s.label, focused && s.focusedLabel]}>Notificação</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={s.tab}>
              {focused ? (
                <LinearGradient
                  colors={['#ff9966', '#ff5e62']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={s.iconFocusedContainer}
                >
                  <User size={24} color={colors.white.base}/>
                </LinearGradient>
              ) : (
                <View style={s.iconContainer}>
                  <User size={24} color={colors.terracota.base}/>
                </View>
              )}
              <Text style={[s.label, focused && s.focusedLabel]}>Perfil</Text>
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
}