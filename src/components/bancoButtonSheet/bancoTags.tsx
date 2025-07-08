
import { s } from "./style"
import { Text, View } from "react-native"

type Props = {
    tipoProdutos: string[] | []
}

export default function BancoTags({ tipoProdutos }: Props){
    return(
        <View style={s.tagsContainer}>
            {tipoProdutos.map((p, index) => (
                <View key={index} style={s.tagStyle}>
                    <Text style={s.tagText}>
                        {p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()}
                    </Text>
                </View>
            ))}
        </View>
    )

}