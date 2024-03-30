import { Pressable, View, Text, Image, Dimensions, StyleSheet, Modal, Button } from "react-native";

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
                    <View style={styles.content}>
                        <View style={{ backgroundColor: "#e6e6e6" }}>
                            <Button
                                title="필터 초기화"
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            feature: {
                                                HM: false,
                                                HT: false,
                                                PC: false,
                                                TN: false,
                                            },
                                            command: [],
                                            text: "",
                                        };
                                    });
                                }}
                                color="#006666"
                            />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "7"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/ub.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "8"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/u.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "9"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/uf.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "LP"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/1.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "RP"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/2.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "AP"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/12.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "AL"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/13.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "4"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/b.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "N"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/n.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "6"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/f.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "LK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/3.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "RK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/4.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "AK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/34.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "AR"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/24.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "1"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/db.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "2"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/d.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "3"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/df.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "LPRK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/14.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "APLK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/123.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "APRK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/124.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "ALL"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/1234.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            feature: {
                                                ...prev.feature,
                                                HM: !prev.feature.HM,
                                            },
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/FeatureIcon/HMicon.png")}
                                    style={styles.featureButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            feature: {
                                                ...prev.feature,
                                                HT: !prev.feature.HT,
                                            },
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/FeatureIcon/HTicon.png")}
                                    style={styles.featureButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            feature: {
                                                ...prev.feature,
                                                PC: !prev.feature.PC,
                                            },
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/FeatureIcon/PCicon.png")}
                                    style={styles.featureButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            feature: {
                                                ...prev.feature,
                                                TN: !prev.feature.TN,
                                            },
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/FeatureIcon/TNicon.png")}
                                    style={styles.featureButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "RPLK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/23.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "LPAK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/134.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "RPAK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/234.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "WS"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../assets/MoveIcon/ws.png")}
                                    style={styles.commandButton}
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
    content: {
        flexDirection: "col",
        width: windowWidth,
        backgroundColor: "black",
    },
    leverButton: {
        borderWidth: 1,
        width: windowWidth / 7,
        height: windowWidth / 7,
    },
    commandButton: {
        borderWidth: 1,
        width: windowWidth / 7,
        height: windowWidth / 7,
        borderColor: "white",
    },
    featureButton: {
        borderWidth: 1,
        width: (windowWidth * (3 / 7)) / 4,
        height: (windowWidth * (3 / 7)) / 4,
    },
});

export default MoveListFilterKeyboard;
