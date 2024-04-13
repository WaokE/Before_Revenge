import { View, Text, Pressable, ScrollView, Image, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";

import convertCommand from "../../lib/convertDataToImage/convertCommand";

const FilterChipsContainer = ({ filterInput, setFilterInput, setIsKeyboardOpen }) => {
    return (
        <View style={styles.filterContainer}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <Pressable
                    onPress={() => {
                        setIsKeyboardOpen(true);
                    }}
                >
                    <Icon name="filter-alt" color="gray" size={30} />
                </Pressable>
                <View style={{ flexDirection: "row", gap: 4 }}>
                    {Object.keys(filterInput.feature).some(
                        (key) => filterInput.feature[key] === true
                    ) && (
                        <Pressable
                            onPress={() => {
                                setFilterInput((prev) => ({
                                    ...prev,
                                    feature: { HM: false, HT: false, PC: false, TN: false },
                                }));
                            }}
                        >
                            <View style={styles.showCurrentFilterItem}>
                                {filterInput.feature.HM && (
                                    <Image
                                        source={require("../../assets/FeatureIcon/HMicon.png")}
                                        style={{ width: 20, height: 20 }}
                                    />
                                )}
                                {filterInput.feature.HT && (
                                    <Image
                                        source={require("../../assets/FeatureIcon/HTicon.png")}
                                        style={{ width: 20, height: 20 }}
                                    />
                                )}
                                {filterInput.feature.PC && (
                                    <Image
                                        source={require("../../assets/FeatureIcon/PCicon.png")}
                                        style={{ width: 20, height: 20 }}
                                    />
                                )}
                                {filterInput.feature.TN && (
                                    <Image
                                        source={require("../../assets/FeatureIcon/TNicon.png")}
                                        style={{ width: 20, height: 20 }}
                                    />
                                )}
                                <Icon name="close" size={20} color={"white"} />
                            </View>
                        </Pressable>
                    )}
                    {filterInput.hitLevel.length > 0 && (
                        <Pressable
                            onPress={() => {
                                setFilterInput((prev) => {
                                    return {
                                        ...prev,
                                        hitLevel: [],
                                    };
                                });
                            }}
                        >
                            <View style={styles.showCurrentFilterItem}>
                                <Text style={{ color: "white" }}>
                                    {filterInput.hitLevel.join(" ")}
                                </Text>
                                <Icon name="close" size={20} color={"white"} />
                            </View>
                        </Pressable>
                    )}
                    {(filterInput.frame.hitOrGuard !== "UNSELECTED" ||
                        filterInput.frame.lossOrGain !== "UNSELECTED" ||
                        filterInput.frame.number !== "" ||
                        filterInput.frame.aboveOrBelow !== "UNSELECTED") && (
                        <Pressable
                            onPress={() => {
                                setFilterInput((prev) => ({
                                    ...prev,
                                    frame: {
                                        number: "",
                                        lossOrGain: "UNSELECTED",
                                        hitOrGuard: "UNSELECTED",
                                        aboveOrBelow: "UNSELECTED",
                                    },
                                }));
                            }}
                        >
                            <View style={styles.showCurrentFilterCommand}>
                                {filterInput.frame.hitOrGuard !== "UNSELECTED" && (
                                    <Text style={{ color: "white" }}>
                                        {filterInput.frame.hitOrGuard}
                                    </Text>
                                )}
                                {filterInput.frame.lossOrGain !== "UNSELECTED" && (
                                    <Text style={{ color: "white" }}>
                                        {filterInput.frame.lossOrGain}
                                    </Text>
                                )}
                                {filterInput.frame.number !== "" && (
                                    <Text style={{ color: "white" }}>
                                        {filterInput.frame.number}
                                    </Text>
                                )}
                                {filterInput.frame.aboveOrBelow !== "UNSELECTED" && (
                                    <Text style={{ color: "white" }}>
                                        {filterInput.frame.aboveOrBelow}
                                    </Text>
                                )}
                                <Icon name="close" size={20} color={"white"} />
                            </View>
                        </Pressable>
                    )}
                    {filterInput.command.length > 0 && (
                        <Pressable
                            onPress={() => {
                                setFilterInput((prev) => ({ ...prev, command: [] }));
                            }}
                        >
                            <View style={styles.showCurrentFilterItem}>
                                {filterInput.command.map((item, index) => (
                                    <View key={index}>{convertCommand([item])}</View>
                                ))}
                                <Icon name="close" size={20} color={"white"} />
                            </View>
                        </Pressable>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    filterContainer: {
        backgroundColor: "#202124",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
        borderRadius: 10,
        marginBottom: 10,
        padding: 5,
    },
    showCurrentFilterItem: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#3E3E3E",
        borderRadius: 8,
        padding: 2,
        margin: 2,
    },
    showCurrentFilterCommand: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#3E3E3E",
        borderRadius: 8,
        padding: 2,
        margin: 2,
        gap: 2,
    },
});

export default FilterChipsContainer;
