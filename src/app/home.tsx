import { Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState, useEffect, useRef } from "react";
import * as Location from "expo-location";

import { api } from "@/services/api";
import BancoBottomSheet, { BancoInfo, BancoBottomSheetHandle } from "@/components/bancoButtonSheet";

const currentLocation = {
  latitude: -8.289224121831664,
  longitude: -35.97192739667799,
};

type BancoCoordenadas = {
  id: string;
  nomeMarca: string;
  endereco: {
    latitude: number;
    longitude: number;
  };
};

export default function Home() {
  const [Coordenadas, setCoordenadas] = useState<BancoCoordenadas[]>([]);
  const [BancoSelecionado, setBancoSelecionado] = useState<BancoInfo | null>(null);
  const [LoadingBanco, setLoadingBanco] = useState(false);

  const bottomSheetRef = useRef<BancoBottomSheetHandle>(null); 

  async function getCurrentLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (granted) {
        await Location.getCurrentPositionAsync();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCoordenadas() {
    try {
      const { data } = await api.get("/banco/localizacoes");
      if (data && Array.isArray(data.CoordenadasBancos)) {
        setCoordenadas(data.CoordenadasBancos);
      } else {
        Alert.alert("Bancos", "Dados da API em formato inesperado.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Bancos", "Não foi possível coletar as informações dos bancos.");
    }
  }

  async function fetchInfoBancos(id: string) {
    setLoadingBanco(true);
    setBancoSelecionado(null)
    try {
      const { data } = await api.get(`/banco/info-banco/${id}`);
      setBancoSelecionado(data);
      setLoadingBanco(false);
      bottomSheetRef.current?.open();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCoordenadas();
  }, []);

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require("@/assets/location.png")}
        />

        {Coordenadas.map((item) => (
          <Marker
            key={item.id}
            identifier={item.id}
            coordinate={{
              latitude: item.endereco.latitude,
              longitude: item.endereco.longitude,
            }}
            image={require("@/assets/Pin.png")}
            onPress={() => {
              fetchInfoBancos(item.id);
            }}
          />
        ))}
      </MapView>

      <BancoBottomSheet
        ref={bottomSheetRef}
        banco={BancoSelecionado}
        loading={LoadingBanco}
      />
    </>
  );
}