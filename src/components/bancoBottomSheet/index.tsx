import { View, Text } from "react-native";
import { useMemo, forwardRef, useRef, useImperativeHandle } from 'react';
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { MapPinHouse, Clock, Star } from "lucide-react-native";

import { Loading } from "../loading";
import BancoHeader from "./bancoHeader";
import BancoTags from "./bancoTags";
import BancoButtons from "./bancoButtons";
import BancoAvaliacoes from "./bancoAvaliacoes";

import { s } from "./style";
import { colors } from "@/styles/theme";

export type BancoInfo = {
  nomeMarca: string,
  foto: string,
  tipoProdutos: string[],
  horario: string,
  descricao: string,
  mediaNotas: number,
  endereco: {
    rua: string,
    setor: string,
    numero: string,
    latitude: number,
    longitude: number
  },
  feiranteInfo: {
    whatsapp: string,
    facebook: string,
    instagram: string,
  },
  avaliacoes: {
    nota: number,
    comentario: string
  }[]
};

export type BancoBottomSheetHandle = {
  open: () => void;
  close: () => void;
};

export type BancoBottomSheetProps = {
  banco: BancoInfo | null;
  loading: boolean;
  onPressMostrarRota: () => void;
};

const BancoBottomSheet = forwardRef<BancoBottomSheetHandle, BancoBottomSheetProps>(
  ({ banco, loading, onPressMostrarRota }, ref) => {

  const snapPoints = useMemo(() => ["50%", "75%"], []);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  useImperativeHandle(ref, () => ({
    open: () => bottomSheetRef.current?.present(),
    close: () => bottomSheetRef.current?.dismiss(),
  }));

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={1}
      enablePanDownToClose={true}
    >
      {
        loading ? (<Loading />) : (
          <BottomSheetScrollView contentContainerStyle={s.container} keyboardShouldPersistTaps="handled">
            <BancoHeader foto={banco?.foto || null} />
            <BancoTags tipoProdutos={banco?.tipoProdutos || []} />

            <View style={s.containerTitleRating}>
              <Text style={s.title}>{banco?.nomeMarca}</Text>
              <View style={s.ratingContainer}>
                <Star size={16} color={colors.green.base} fill={colors.green.base} />
                <Text style={s.ratingText}>{banco?.mediaNotas}</Text>
              </View>
            </View>


            <Text style={s.description}>{banco?.descricao}</Text>

            <View style={s.rowInfo}>
              <View style={s.InfoItem}>
                <MapPinHouse color={colors.green.base} size={24} />
                <Text style={s.infoText}>
                  {banco?.endereco.rua}, {banco?.endereco.setor}, Nº {banco?.endereco.numero}
                </Text>
              </View>
              <View style={s.InfoItem}>
                <Clock color={colors.green.base} size={24} />
                <Text style={s.infoText}>{banco?.horario}</Text>
              </View>
            </View>

            {
              banco?.avaliacoes && banco.avaliacoes.length > 0 && (
                <BancoAvaliacoes avaliacoes={banco.avaliacoes} />
              )
            }

            <BancoButtons onPressMostrarRota={onPressMostrarRota} />

          </BottomSheetScrollView>
        )
      }
    </BottomSheetModal>
  );
});

export default BancoBottomSheet;