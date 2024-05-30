import { View, Text, Modal, Image, Pressable, StyleSheet } from "react-native";
import { Icon } from "@rneui/base";
import { Linking } from "react-native";

const NeedUpdateModal = ({ onClickClose }) => {
    return (
        <Modal>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>새로운 업데이트가 존재합니다</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            Linking.openURL(
                                "https://play.google.com/store/apps/details?id=com.waoke.TF8&hl=en&gl=US"
                            );
                        }}
                    >
                        <Text style={styles.textStyle}>업데이트</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => onClickClose()}
                    >
                        <Text style={styles.textStyle}>무시하고 진행</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: "#3E3E3E",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});

export default NeedUpdateModal;
