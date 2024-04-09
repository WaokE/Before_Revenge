import { View, Image } from "react-native";

// ["HM", "HT", "PC", "TN"]과 같은 특징을 이미지로 변환하는 함수
export default function convertFeature(features) {
    const result = [];

    features.forEach((feature) => {
        if (feature === "HM") {
            result.push({ type: "feature", value: require("../../assets/FeatureIcon/HMicon.png") });
        }
        if (feature === "HT") {
            result.push({ type: "feature", value: require("../../assets/FeatureIcon/HTicon.png") });
        }
        if (feature === "PC") {
            result.push({ type: "feature", value: require("../../assets/FeatureIcon/PCicon.png") });
        }
        if (feature === "TN") {
            result.push({ type: "feature", value: require("../../assets/FeatureIcon/TNicon.png") });
        }
    });

    if (result.length === 0) return null;

    return (
        <View style={{ flexDirection: "row" }}>
            {result.map((data, index) => {
                return <Image key={index} source={data.value} style={{ width: 15, height: 15 }} />;
            })}
        </View>
    );
}
