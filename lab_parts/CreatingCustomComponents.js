import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles } from "../styles";

export default function CreatingCustomComponents() {
  const [counterM, setCounterM] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [counterE, setCounterE] = useState(0);
  dict = { Milk: counterM, Bread: counterB, Eggs: counterE };

  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <Text style={styles.headerText}>Creating Custom Components</Text>

        <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
          <Text style={{ fontWeight: "bold" }}>Shopping Cart</Text>
          <ItemTrack dict="Milk" counter={counterM} setCounter={setCounterM}>
            {}
          </ItemTrack>
          <ItemTrack dict="Bread" counter={counterB} setCounter={setCounterB}>
            {}
          </ItemTrack>
          <ItemTrack dict="Eggs" counter={counterE} setCounter={setCounterE}>
            {}
          </ItemTrack>
          <Text>
            You have {counterM + counterB + counterE} items in your cart
          </Text>
        </View>
        <Text>I DID IT :D </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const ItemTrack = ({ dict, counter, setCounter }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ marginRight: 50 }}>{dict}</Text>
      <Button
        title="-"
        onPress={() =>
          setCounter((prevCounter) => {
            return prevCounter - 1;
          })
        }
      >
        {counter}
      </Button>

      <Text style={{ ...styles.bodyText }}>{counter}</Text>
      <Button
        title="+"
        onPress={() =>
          setCounter((prevCounter) => {
            return prevCounter + 1;
          })
        }
      />
    </View>
  );
};
