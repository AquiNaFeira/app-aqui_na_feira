
import { Star } from "lucide-react-native"
import { s } from "./style"
import { View, Text } from "react-native"
import { colors } from "@/styles/colors"

type Avaliacao = {
    nota: number,
    comentario: string
}

type Props = {
    avaliacoes: Avaliacao[]
}

export default function BancoAvaliacoes({avaliacoes}: Props){
    return(
        <View style={s.containerComments}>
            <Text style={s.textRating}>Avaliações</Text>
            {
                avaliacoes.map((avaliacoes, index) => (
                    <View
                    key={index}
                    style={s.comment}
                    >
                        <View style={s.rowStars}>
                            {
                                [1, 2, 3, 4, 5].map((i) => (
                                    <Star
                                    key={i}
                                    size={20}
                                    color={colors.terracota.base}
                                    fill={i <= avaliacoes.nota ? colors.terracota.base : "transparent" }
                                    />
                                ))
                            }
                        </View>
                        <Text style={s.textComment}>{avaliacoes.comentario}</Text>
                    </View>
                ))
            }
        </View>
    )
}