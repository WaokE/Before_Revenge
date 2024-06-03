// 프레임워크 API
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Dimensions,
    TextInput,
    Pressable,
    Alert,
} from "react-native";
import { Icon } from "@rneui/themed";
import { useState } from "react";
import * as MailComposer from "expo-mail-composer";

// 컴포넌트
import navigateCharacterMoveScreen from "../lib/navigateCharacterMoveScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// 캐릭터 이미지 경로를 담은 객체, require 메서드에는 동적으로 경로를 전달할 수 없으므로 사전에 정의하여 사용
const CharacterImagePaths = {
    니나: require("../assets/CharacterImage/Nina-Williams.png"),
    "데빌 진": require("../assets/CharacterImage/Devil-Jin.png"),
    드라구노프: require("../assets/CharacterImage/Sergei-Dragunov.png"),
    라스: require("../assets/CharacterImage/Lars-Alexandersson.png"),
    레오: require("../assets/CharacterImage/Leo.png"),
    레이나: require("../assets/CharacterImage/Reina.png"),
    레이븐: require("../assets/CharacterImage/Raven.png"),
    로우: require("../assets/CharacterImage/Marshall-Law.png"),
    리로이: require("../assets/CharacterImage/Leroy-Smith.png"),
    리리: require("../assets/CharacterImage/Lili.png"),
    "리 차오랑": require("../assets/CharacterImage/Lee.png"),
    브라이언: require("../assets/CharacterImage/Bryan-Fury.png"),
    빅터: require("../assets/CharacterImage/Victor-Chevalier.png"),
    샤오유: require("../assets/CharacterImage/Ling-Xiaoyu.png"),
    샤힌: require("../assets/CharacterImage/Shaheen.png"),
    스티브: require("../assets/CharacterImage/Steve-Fox.png"),
    아스카: require("../assets/CharacterImage/Asuka.png"),
    아주세나: require("../assets/CharacterImage/Azucena.png"),
    알리사: require("../assets/CharacterImage/Alisa.png"),
    요시미츠: require("../assets/CharacterImage/Yoshimitsu.png"),
    자피나: require("../assets/CharacterImage/Zafina.png"),
    "잭-8": require("../assets/CharacterImage/Jack-8.png"),
    준: require("../assets/CharacterImage/Jun-Kazama.png"),
    진: require("../assets/CharacterImage/Jin.png"),
    카즈야: require("../assets/CharacterImage/Kazuya-Mishima.png"),
    쿠마: require("../assets/CharacterImage/Kuma.png"),
    클라우디오: require("../assets/CharacterImage/Claudio-Serafino.png"),
    킹: require("../assets/CharacterImage/King.png"),
    판다: require("../assets/CharacterImage/Panda.png"),
    "펭 웨이": require("../assets/CharacterImage/Feng-Wei.png"),
    폴: require("../assets/CharacterImage/Paul-Phoenix.png"),
    화랑: require("../assets/CharacterImage/Hwoarang.png"),
    에디: require("../assets/CharacterImage/Eddy-Gordo.png"),
};

const sendEmail = () => {
    MailComposer.composeAsync({
        recipients: ["waoke.dev@gmail.com"],
        subject: "TF8 문의사항",
        body: "정보의 오류/누락, 있었으면 하는 기능, 건의사항 등을 자유롭게 작성해주세요.",
    }).catch((error) => {
        Alert.alert("메일 전송에 실패했습니다.", error.message);
    });
};

const SelectCharacterScreen = ({ navigation }) => {
    const [searchInput, setSearchInput] = useState("");
    const handleIconPress = (characterName) => {
        navigation.navigate(navigateCharacterMoveScreen(characterName));
    };

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View
                style={{
                    height: 50,
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginHorizontal: 10,
                }}
            >
                <View>
                    <Icon name="menu" color="#3E3E3E" size={30} />
                </View>
                <Image source={require("../assets/banner.png")} style={styles.bannerImage} />
                <Pressable
                    onPress={() => {
                        console.log("email pressed");
                        sendEmail();
                    }}
                >
                    <Icon name="email" color="gray" size={30} />
                </Pressable>
            </View>
            <View style={styles.searchInputContainer}>
                <Icon name="search" color="#6B6B6B" size={20} />
                <TextInput
                    placeholder="캐릭터 검색"
                    placeholderTextColor={"#6B6B6B"}
                    a
                    style={styles.searchInput}
                    onChangeText={(text) => setSearchInput(text)}
                />
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                {Object.keys(CharacterImagePaths).map((characterName, index) => {
                    if (searchInput.length > 0 && !characterName.includes(searchInput)) {
                        return null;
                    }
                    return (
                        <Pressable
                            android_ripple={{ color: "gray" }}
                            onPress={() => {
                                console.log(`${characterName} pressed`);
                                handleIconPress(characterName);
                            }}
                            key={characterName}
                        >
                            <View
                                style={
                                    index === 0
                                        ? styles.characterContentContainerIndexZero
                                        : styles.characterContentContainer
                                }
                            >
                                <View style={styles.characterImageContainer}>
                                    <Image
                                        source={CharacterImagePaths[characterName]}
                                        style={styles.characterImage}
                                    />
                                </View>
                                <Text style={styles.characterName}>{characterName}</Text>
                                <View style={styles.arrowIconContainer}>
                                    <Icon name="arrow-forward-ios" color="#6B6B6B" size={20} />
                                </View>
                            </View>
                        </Pressable>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screenContainer: { flex: 1, backgroundColor: "#3E3E3E" },
    bannerText: { color: "white", fontSize: 25, textAlign: "center", padding: 10 },
    searchInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#202124",
        padding: 8,
        marginHorizontal: 10,
        marginBottom: 10,
        gap: 10,
        borderRadius: 5,
    },
    bannerImage: {
        height: 50,
        width: 50,
        resizeMode: "contain",
    },
    searchInput: { color: "white", flex: 1 },
    scrollViewContainer: {
        backgroundColor: "#363636",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    characterContentContainerIndexZero: {
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#6B6B6B",
    },
    characterContentContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#6B6B6B",
    },
    characterImageContainer: { backgroundColor: "#202124", margin: 10, borderRadius: 10 },
    characterImage: {
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
        borderRadius: windowWidth * 0.15 * 0.25,
    },
    characterName: { color: "white", marginLeft: 6, fontFamily: "Pretendard-Bold" },
    arrowIconContainer: {
        flex: 1,
        alignItems: "flex-end",
        marginRight: 10,
    },
});

export default SelectCharacterScreen;
