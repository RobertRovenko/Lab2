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

/* TODO: DEFINE THE CART ITEM COMPONENT HERE */

/* Set labPart variable to 5, to view this part of the lab */
export default function CreatingCustomComponents() {
  //const [cartItem, setcartItem] = useState({ onions: 5, garlic: 3, bread: 1 });
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ marginRight: 50 }}>Milk</Text>
            <Button
              title="-"
              onPress={() =>
                setCounterM((prevCounterM) => {
                  return prevCounterM - 1;
                })
              }
            />
            <Text style={{ ...styles.bodyText }}>{counterM}</Text>
            <Button
              title="+"
              onPress={() =>
                setCounterM((prevCounterM) => {
                  return prevCounterM + 1;
                })
              }
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ marginRight: 50 }}>Bread</Text>
            <Button
              title="-"
              onPress={() =>
                setCounterB((prevCounterB) => {
                  return prevCounterB - 1;
                })
              }
            />
            <Text style={{ ...styles.bodyText }}>{counterB}</Text>
            <Button
              title="+"
              onPress={() =>
                setCounterB((prevCounterB) => {
                  return prevCounterB + 1;
                })
              }
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ marginRight: 50 }}>Eggs</Text>
            <Button
              title="-"
              onPress={() =>
                setCounterE((prevCounterE) => {
                  return prevCounterE - 1;
                })
              }
            />
            <Text style={{ ...styles.bodyText }}>{counterE}</Text>
            <Button
              title="+"
              onPress={() =>
                setCounterE((prevCounterE) => {
                  return prevCounterE + 1;
                })
              }
            />
          </View>
          <Text>
            You have {dict.Bread + dict.Milk + dict.Eggs} items in your cart
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}>Your Task: </Text>
            {"\n\n"}
            1. Create a custom component called CartItem. It should have a text
            that displays the item name, and the amount of items with a button
            to increase and decrease the amount.
            {"\n\n"}
            2. Create three cart item components, one for Milk, bread and eggs
            with initial values of 0. Take a look at the 'shopping cart items'
            image in the assets folder to see what it should look like in the
            end.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Bonus: </Text>Display the total
            number of items in the cart. Think about how you could use a
            dictionary state variable to do this.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
