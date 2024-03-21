import React from "react";
import { View, Image, Text, Pressable, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const iconSize = windowWidth * 0.3;
const textSize = windowWidth * 0.04;

const CharacterIcon = ({ name, imagePath, onPressIcon }) => {
    return (
        <View style={styles.iconContainer}>
            <Pressable
                android_ripple={{ color: "gray", radius: iconSize * 0.5 }}
                style={({ pressed }) => (pressed ? styles.pressed : null)}
                onPress={() => {
                    console.log(`${name} pressed`);
                    onPressIcon(name);
                }}
            >
                <Image source={imagePath} style={styles.iconImage} />
            </Pressable>
            <Text style={styles.iconText}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "column",
        backgroundColor: "transparent",
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
    pressed: {
        opacity: 0.75,
    },
});

export default CharacterIcon;
