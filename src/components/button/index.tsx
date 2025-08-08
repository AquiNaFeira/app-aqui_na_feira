import { TouchableOpacity, TouchableOpacityProps, Text, View, TextStyle, StyleProp, ViewStyle } from "react-native"
import { ReactNode } from "react"

import { s } from "./style"

type Props = TouchableOpacityProps & {
    title?: string;
    icon?: ReactNode;
    circle?: boolean;
    style?: StyleProp<ViewStyle>; 
    textStyle?: StyleProp<TextStyle>;
}

export default function Button({ title, icon, circle = false, style, textStyle, ...rest }: Props){
    return(
        <TouchableOpacity style={[s.container, circle && s.circle, style]} activeOpacity={0.8} {...rest}>
            {icon && <View>{icon}</View>}
            {title && <Text style={[s.title, textStyle]}>{title}</Text>}
        </TouchableOpacity>
    )
}