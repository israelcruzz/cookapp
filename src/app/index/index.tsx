import { View, Text, ScrollView, Alert } from "react-native";
import { style } from "./style";
import Ingredient from "@/components/ingredient";
import { useState } from "react";
import Selected from "@/components/selected";
import { router } from "expo-router";

export default function Index() {
  const [select, setSelect] = useState<string[]>([]);

  function handleToggleSelected(value: string) {
    if (select.includes(value)) {
      return setSelect((select) => select.filter((item) => item !== value));
    }

    setSelect((select) => [...select, value]);
    console.log(select);
  }

  function onClear() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelect([]) },
    ]);
  }

  function onSearch(){
    router.navigate('/recipes/')
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>
        Escolha {"\n"}
        <Text>os produtos</Text>
      </Text>

      <Text style={style.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>

      <ScrollView
        contentContainerStyle={style.ingredient}
        showsVerticalScrollIndicator={false}
      >
        {Array.from({ length: 100 }).map((item, index) => {
          return (
            <Ingredient
              key={index}
              title="Maça"
              image=""
              selected={select.includes(String(index))}
              onPress={() => handleToggleSelected(String(index))}
            />
          );
        })}
      </ScrollView>

      {select.length > 0 && (
        <Selected
          quantity={select.length}
          onClear={onClear}
          onSearch={onSearch}
        />
      )}
    </View>
  );
}
