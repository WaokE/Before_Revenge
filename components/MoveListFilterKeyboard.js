import { Pressable, View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MoveListFilterKeyboard = ({}) => {
    const [filterInput, setFilterInput] = useState([]);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={{ flexDirection: "row" }}>
                    {filterInput.map((item, index) => item)}
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/ub.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/u.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/uf.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/1.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/2.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/uf.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/uf.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/b.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/n.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/f.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/3.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/4.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/34.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/24.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/db.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/d.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/df.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/14.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/123.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/124.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/MoveIcon/1234.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
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
                                backgroundColor: "pink",
                            }}
                        />
                    </Pressable>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/FeatureIcon/HMicon.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
                                    }}
                                />,
                            ]);
                        }}
                    >
                        <Image
                            source={require("../assets/FeatureIcon/HMicon.png")}
                            style={{
                                borderWidth: 1,
                                width: 150 / 4,
                                height: 150 / 4,
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/FeatureIcon/HTicon.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
                                    }}
                                />,
                            ]);
                        }}
                    >
                        <Image
                            source={require("../assets/FeatureIcon/HTicon.png")}
                            style={{
                                borderWidth: 1,
                                width: 150 / 4,
                                height: 150 / 4,
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/FeatureIcon/PCicon.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
                                    }}
                                />,
                            ]);
                        }}
                    >
                        <Image
                            source={require("../assets/FeatureIcon/PCicon.png")}
                            style={{
                                borderWidth: 1,
                                width: 150 / 4,
                                height: 150 / 4,
                            }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setFilterInput((prev) => [
                                ...prev,
                                <Image
                                    source={require("../assets/FeatureIcon/TNicon.png")}
                                    style={{
                                        borderWidth: 1,
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "pink",
                                    }}
                                />,
                            ]);
                        }}
                    >
                        <Image
                            source={require("../assets/FeatureIcon/TNicon.png")}
                            style={{
                                borderWidth: 1,
                                width: 150 / 4,
                                height: 150 / 4,
                            }}
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        justifyContent: "flex-end",
        backgroundColor: "indigo",
    },
    row: {
        flexDirection: "col",
        height: windowHeight * 0.7,
        width: windowWidth,
        backgroundColor: "blue",
    },
});

export default MoveListFilterKeyboard;
