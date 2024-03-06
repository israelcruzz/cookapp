import { Image, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./style";

interface IngredientProps {
    title: string,
    image: string,
    selected?: boolean
}

export default function Ingredient({ title, image, selected = false, ...rest }: IngredientProps & PressableProps) {
    return (
        <Pressable style={[styles.container, selected && styles.selected]} {...rest} >
            <Image style={styles.image} source={require("@/assets/images/icon.png")}></Image>
            <Text style={styles.title}>Maça</Text>
        </Pressable>
    )
}