import { View, Image } from "react-native"
import { colors } from "@/styles/theme"
import { s } from "./style"
import Button from "../button"
import { Heart } from "lucide-react-native"

type Props = {
    foto: string | null
}

export default function BancoHeader({ foto }: Props){
    return (
        <View style={{ position: "relative" }}>
            <Image
            source={{uri: foto ?? ""}}
            style={s.imageContainer}
            resizeMode="cover"
            />

            <Button icon={<Heart size={28} color={colors.white.base}/>} circle 
            style={{
            position: "absolute",
            bottom: -8,
            right: 18,
            }}/>

        </View>
    )
}