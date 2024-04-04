import { View, Text } from "react-native";

const NoFilterResult = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 20 }}>검색 결과가 없습니다.</Text>
        </View>
    );
};

export default NoFilterResult;
