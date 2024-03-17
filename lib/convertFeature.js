import { View, Image } from "react-native";

export default function convertFeature(features) {
    const result = [];

    features.forEach((feature) => {
        if (feature === "HM") {
            result.push({ type: "feature", value: require("../assets/FeatureIcon/HMicon.png") });
        }
        if (feature === "HT") {
            result.push({ type: "feature", value: require("../assets/FeatureIcon/HTicon.png") });
        }
        if (feature === "PC") {
            result.push({ type: "feature", value: require("../assets/FeatureIcon/PCicon.png") });
        }
        if (feature === "TN") {
            result.push({ type: "feature", value: require("../assets/FeatureIcon/TNicon.png") });
        }
    });

    return (
        <View style={{ flexDirection: "row" }}>
            {result.map((data, index) => {
                return <Image key={index} source={data.value} style={{ width: 20, height: 20 }} />;
            })}
        </View>
    );
}
