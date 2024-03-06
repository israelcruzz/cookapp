import { View, Text } from "react-native";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Button } from "../button";

interface SelectedProps {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
}

export default function Selected({
  quantity,
  onClear,
  onSearch,
}: SelectedProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onClear}
          color={theme.colors.gray_400}
        />
      </View>

      <Button title="Encontrar" onPress={onSearch} />
    </View>
  );
}
