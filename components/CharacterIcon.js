import React from "react";
import { View, Image, Text, Pressable, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const iconSize = windowWidth * 0.3;
const textSize = windowWidth * 0.04;

const CharacterIcon = ({ name, imagePath }) => {
    return (
        <Pressable>
            <View style={styles.iconContainer}>
                <Image source={imagePath} style={styles.iconImage} />
                <Text style={styles.iconText}>{name}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "column",
        backgroundColor: "#214C5C",
        alignItems: "center",
    },
    iconImage: {
        width: iconSize,
        height: iconSize,
        borderRadius: iconSize / 2,
    },
    iconText: {
        color: "white",
        fontSize: textSize,
        fontWeight: "bold",
    },
});

export default CharacterIcon;
