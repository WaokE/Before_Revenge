import React from "react";
import { View, Text, Button, Modal, Pressable, StyleSheet } from "react-native";

const CharacterSelectModal = (props) => {
    return (
        <Modal visible={props.visible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.characters}>
                        <Text>Char 1</Text>
                        <Text>Char 2</Text>
                        <Text>Char 3</Text>
                    </View>
                    <Button
                        title="Close"
                        onPress={() => {
                            props.setVisible(false);
                        }}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalContent: {
        flexDirection: "column",
        backgroundColor: "purple",
        height: "90%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    characters: {
        flexGrow: 1,
        flexDirection: "column",
    },
});

export default CharacterSelectModal;
