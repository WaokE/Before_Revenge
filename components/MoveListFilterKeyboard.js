import { Pressable, View, Text, Image, Dimensions, StyleSheet, Modal } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MoveListFilterKeyboard = (props) => {
    return (
        <Modal transparent visible={props.isModalOpen} animationType="slide">
            <Pressable
                onPress={() => {
                    props.setIsModalOpen(false);
                }}
            >
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={{ flexDirection: "row" }}>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/ub.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/ub.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/u.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/u.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/uf.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/uf.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/1.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/1.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/2.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/2.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/uf.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/12.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/uf.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/13.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/b.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/b.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/n.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/n.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/f.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/f.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/3.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/3.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/4.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/4.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/34.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/34.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/24.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/24.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/db.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/db.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/d.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/d.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/df.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/df.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/14.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/14.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/123.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/123.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/124.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/124.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/1234.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/1234.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/FeatureIcon/HMicon.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/FeatureIcon/HMicon.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: (windowWidth * (3 / 7)) / 4,
                                        height: (windowWidth * (3 / 7)) / 4,
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/FeatureIcon/HTicon.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/FeatureIcon/HTicon.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: (windowWidth * (3 / 7)) / 4,
                                        height: (windowWidth * (3 / 7)) / 4,
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/FeatureIcon/PCicon.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/FeatureIcon/PCicon.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: (windowWidth * (3 / 7)) / 4,
                                        height: (windowWidth * (3 / 7)) / 4,
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/FeatureIcon/TNicon.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/FeatureIcon/TNicon.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: (windowWidth * (3 / 7)) / 4,
                                        height: (windowWidth * (3 / 7)) / 4,
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/23.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/23.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/134.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/134.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/234.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/234.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => [
                                        ...prev,
                                        <Image
                                            source={require("../assets/MoveIcon/ws.png")}
                                            style={{
                                                borderWidth: 1,
                                                width: 20,
                                                height: 20,
                                            }}
                                        />,
                                    ]);
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/ws.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: windowWidth / 7,
                                        height: windowWidth / 7,
                                        borderColor: "white",
                                    }}
                                />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        justifyContent: "flex-end",
    },
    row: {
        flexDirection: "col",
        width: windowWidth,
        backgroundColor: "black",
    },
});

export default MoveListFilterKeyboard;
