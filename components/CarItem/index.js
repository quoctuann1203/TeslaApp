import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StylesButton from "../StylesButton";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.imageBackground} />
      <View style={styles.carTitle}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StylesButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />

        <StylesButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
