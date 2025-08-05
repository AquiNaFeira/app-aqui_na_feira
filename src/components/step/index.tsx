import { Text, View } from "react-native";
import { colors } from "@/styles/theme";
import { s } from "./styles";
import { IconProps } from "@tabler/icons-react-native";

type StepProps = {
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
};

export function Steps({ icon: Icon, title, description }: StepProps) {
  return (
    <View style={s.container}>
      {Icon && <Icon size={32} color={colors.green.base} />}
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}