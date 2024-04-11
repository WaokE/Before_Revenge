import { View, Text, StyleSheet, Dimensions, Pressable, Animated } from "react-native";
import { useState } from "react";
import React from "react";

import ExpandNoteIcon from "../ExpandNoteIcon";

import convertCommand from "../../lib/convertDataToImage/convertCommand";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MoveContainer = ({ move }) => {
    const [isNoteVisible, setIsNoteVisible] = useState(false);
    const heightAnim = React.useRef(new Animated.Value(0)).current;

    const toggleNoteVisibility = () => {
        setIsNoteVisible(!isNoteVisible);
        Animated.timing(heightAnim, {
            toValue: isNoteVisible ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    return (
        <View style={styles.moveContainer}>
            <Pressable onPress={toggleNoteVisibility}>
                <View style={styles.mainContainer}>
                    <View style={styles.moveContainerMainColumn}>
                        <Text style={styles.moveContainerName}>{move.name}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.moveListContainerjudge}>{move.hitLevel}</Text>
                            <Text style={styles.moveListContainerjudge}>{move.damage}</Text>
                        </View>
                        {convertCommand(move.command)}
                    </View>
                    <Text style={styles.moveContainerActivateColumn}>{move.startUpFrame}</Text>
                    <Text style={styles.moveContainerGuardColumn}>{move.blockFrame}</Text>
                    <Text style={styles.moveContainerHitColumn}>{move.hitFrame}</Text>
                    <Text style={styles.moveContainerCounterColumn}>{move.counterHitFrame}</Text>
                </View>
            </Pressable>
            {move.notes.length > 0 && (
                <Animated.View
                    style={{
                        ...styles.noteContaier,
                        height: heightAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, windowHeight * 0.1],
                        }),
                    }}
                >
                    {isNoteVisible && move.notes.length > 0 && (
                        <Text style={{ color: "white" }}>{move.notes}</Text>
                    )}
                </Animated.View>
            )}

            <View style={styles.expandIconContainer}>
                <ExpandNoteIcon notes={move.notes} isNoteVisible={isNoteVisible} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    moveContainer: {
        flexDirection: "column",
        borderBottomWidth: 1,
        borderColor: "#8B8B8B",
    },
    mainContainer: {
        width: windowWidth,
        height: windowHeight * 0.12,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    noteContaier: {
        width: windowWidth,
        backgroundColor: "#363636",
        justifyContent: "center",
        alignItems: "center",
    },
    moveContainerMainColumn: {
        flex: 3,
        flexDirection: "column",
    },
    moveContainerName: {
        fontFamily: "Pretendard-Medium",
        color: "white",
    },
    moveListContainerjudge: {
        fontFamily: "Pretendard-Medium",
        color: "#8B8B8B",
    },
    moveContainerActivateColumn: {
        fontFamily: "Pretendard-Bold",
        color: "white",
        flex: 1,
        textAlign: "center",
    },
    moveContainerGuardColumn: {
        fontFamily: "Pretendard-Bold",
        color: "white",
        flex: 1,
        textAlign: "center",
    },
    moveContainerHitColumn: {
        fontFamily: "Pretendard-Bold",
        color: "white",
        flex: 1,
        textAlign: "center",
    },
    moveContainerCounterColumn: {
        fontFamily: "Pretendard-Bold",
        color: "white",
        flex: 1,
        textAlign: "center",
    },
    expandIconContainer: {
        position: "absolute",
        right: windowWidth * 0.5,
        bottom: windowHeight * 0.005,
    },
});

export default MoveContainer;
