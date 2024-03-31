<View style={{ flexDirection: "row" }}>
                            {tempFilterInput.feature.HM && (
                                <Image
                                    source={require("../assets/FeatureIcon/HMicon.png")}
                                    style={{ width: 20, height: 20 }}
                                />
                            )}
                            {tempFilterInput.feature.HT && (
                                <Image
                                    source={require("../assets/FeatureIcon/HTicon.png")}
                                    style={{ width: 20, height: 20 }}
                                />
                            )}
                            {tempFilterInput.feature.PC && (
                                <Image
                                    source={require("../assets/FeatureIcon/PCicon.png")}
                                    style={{ width: 20, height: 20 }}
                                />
                            )}
                            {tempFilterInput.feature.TN && (
                                <Image
                                    source={require("../assets/FeatureIcon/TNicon.png")}
                                    style={{ width: 20, height: 20 }}
                                />
                            )}
                            {tempFilterInput.frame.hitOrGuard !== "UNSELECTED" && (
                                <Text style={{ color: "white" }}>
                                    {tempFilterInput.frame.hitOrGuard}
                                </Text>
                            )}
                            {tempFilterInput.frame.lossOrGain !== "UNSELECTED" && (
                                <Text style={{ color: "white" }}>
                                    {tempFilterInput.frame.lossOrGain}
                                </Text>
                            )}
                            {tempFilterInput.frame.number !== "" && (
                                <Text style={{ color: "white" }}>
                                    {tempFilterInput.frame.number}
                                </Text>
                            )}
                            {tempFilterInput.frame.aboveOrBelow !== "UNSELECTED" && (
                                <Text style={{ color: "white" }}>
                                    {tempFilterInput.frame.aboveOrBelow}
                                </Text>
                            )}
                            {tempFilterInput.command.map((item, index) => (
                                <View key={index}>{convertCommand([item])}</View>
                            ))}
                        </View>