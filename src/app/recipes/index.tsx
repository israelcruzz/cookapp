import { View, Text } from "react-native-reanimated/lib/typescript/Animated";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList } from "react-native";
import { Recipe } from "@/components/recipe";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />
      </View>

      <Text style={styles.title}>Ingredientes</Text>

      <FlatList
        data={["1"]}
        keyExtractor={(item) => item}
        renderItem={() => {
          return <Recipe
            recipe={{
              name: "Omelete",
              image:
                "https://comidinhasdochef.com/wp-content/uploads/2022/01/Omelete-Sauda%CC%81vel00.jpg",
              minutes: 5,
            }}
          />;
        }}
      />
    </View>
  );
}
