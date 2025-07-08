import { TouchableOpacity, TouchableOpacityProps, Text, View } from "react-native"
import { ReactNode } from "react"

import { s } from "./style"

type Props = TouchableOpacityProps & {
    title?: string,
    icon?: ReactNode,
    circle?: boolean
}

export default function Button({ title, icon, circle = false, style, ...rest }: Props){
    return(
        <TouchableOpacity style={[s.container, circle && s.circle, style]} activeOpacity={0.8} {...rest}>
            {icon && <View>{icon}</View>}
            {title && <Text style={s.title}>{title}</Text>}
        </TouchableOpacity>
    )
}