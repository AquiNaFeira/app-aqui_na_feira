import { StackNavigationProp  } from '@react-navigation/stack';

export type RootStackParamList = {
    Welcome: undefined,
    Login: undefined,
    Register: undefined,
    Home: undefined
}

export type RootStackNavigationProp<T extends keyof RootStackParamList> = StackNavigationProp <RootStackParamList, T>