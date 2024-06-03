import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Pressable,
    Animated,
    ScrollView,
    PixelRatio,
} from "react-native";
import { useState } from "react";
import React from "react";
import { Icon } from "@rneui/themed";

import ExpandNoteIcon from "../ExpandNoteIcon";
import TextWithHighlight from "../Filter/TextWithHightlight";

import convertCommand from "../../lib/convertDataToImage/convertCommand";
import convertFeature from "../../lib/convertDataToImage/convertFeature";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const normalizeFontSize = (size) => {
    return size / PixelRatio.getFontScale();
};

const MoveContainer = ({ move, highLight }) => {
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
            <View style={styles.mainContainer}>
                <View style={styles.moveContainerMainColumn}>
                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{
                            flexDirection: "column",
                            flexGrow: 1,
                            gap: 4,
                        }}
                    >
                        <TextWithHighlight
                            text={move.name}
                            wantToHighlight={highLight}
                            style={styles.moveContainerName}
                        />
                        <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
                            <Text style={styles.moveListContainerjudge}>{move.hitLevel}</Text>
                            <Text style={styles.moveListContainerjudge}>{move.damage}</Text>
                            {convertFeature(move.feature)}
                        </View>
                        {convertCommand(move.command)}
                    </ScrollView>
                </View>
                <Text style={styles.moveContainerActivateColumn}>{move.startUpFrame}</Text>
                <Text style={styles.moveContainerGuardColumn}>{move.blockFrame}</Text>
                <Text style={styles.moveContainerHitColumn}>{move.hitFrame}</Text>
                <Text style={styles.moveContainerCounterColumn}>{move.counterHitFrame}</Text>
            </View>
            <Pressable onPress={toggleNoteVisibility}>
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
                            <View style={styles.noteContent}>
                                <Icon name="description" color="white" />
                                <View style={styles.noteTextContainer}>
                                    <TextWithHighlight
                                        text={move.notes}
                                        wantToHighlight={highLight}
                                        style={styles.noteText}
                                    />
                                </View>
                            </View>
                        )}
                    </Animated.View>
                )}
                <View style={styles.expandIconContainer}>
                    <ExpandNoteIcon
                        notes={move.notes}
                        isNoteVisible={isNoteVisible}
                        highLight={highLight}
                    />
                </View>
            </Pressable>
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
        height: 90,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    noteContaier: {
        width: windowWidth,
    },
    noteContent: {
        flex: 1,
        marginHorizontal: 10,
        gap: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    noteTextContainer: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: "#202124",
        padding: 10,
    },
    noteText: {
        fontFamily: "Pretendard-Medium",
        color: "white",
    },
    moveContainerMainColumn: {
        flex: 5,
        flexDirection: "column",
    },
    moveContainerName: {
        fontSize: normalizeFontSize(16),
        fontFamily: "Pretendard-Medium",
        color: "white",
    },
    moveListContainerjudge: {
        fontSize: normalizeFontSize(14),
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
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        width: windowWidth * 0.13,
        height: windowWidth * 0.13,
        right: 0,
        bottom: 0,
    },
});

export default MoveContainer;
