const filterMoveList = (data, filterInput) => {
    const result = [];
    data.forEach((section) => {
        const filteredData = section.data.filter((move) => {
            const commandMatches = move.command.join("").includes(filterInput.command.join(""));
            const textMatches =
                move.name.replace(/\s+/g, "").includes(filterInput.text) ||
                move.notes.replace(/\s+/g, "").includes(filterInput.text);
            let frameMatches = true;
            const hitLevelMatches = move.hitLevel.includes(filterInput.hitLevel.join(" "));

            // 유효한 프레임 필터가 있는 경우
            if (
                filterInput.frame.number !== "" &&
                filterInput.frame.lossOrGain !== "UNSELECTED" &&
                !isNaN(filterInput.frame.number)
            ) {
                const frameNumber = parseInt(filterInput.frame.number);

                // 손해/이득 + 숫자만 들어오는 경우 -> 가드/히트 시 관계없이 손해/이득이 숫자랑 일치하는 경우만 리턴
                if (
                    filterInput.frame.hitOrGuard === "UNSELECTED" &&
                    filterInput.frame.aboveOrBelow === "UNSELECTED"
                ) {
                    // 손해 프레임 검색
                    if (filterInput.frame.lossOrGain === "손해가") {
                        frameMatches =
                            -parseInt(move.hitFrame) === frameNumber ||
                            -parseInt(move.blockFrame) === frameNumber;
                    }
                    // 이득 프레임 검색
                    if (filterInput.frame.lossOrGain === "이득이") {
                        frameMatches =
                            parseInt(move.hitFrame) === frameNumber ||
                            parseInt(move.blockFrame) === frameNumber;
                    }
                }
                // 손해/이득 + 숫자 + 이상/이하가 들어오는 경우 -> 가드/히트 시 관계없이 손해/이득이 숫자보다 크거나 작은 경우만 리턴
                else if (filterInput.frame.hitOrGuard === "UNSELECTED") {
                    if (filterInput.frame.aboveOrBelow === "이상") {
                        if (filterInput.frame.lossOrGain === "손해가") {
                            frameMatches =
                                -parseInt(move.hitFrame) >= frameNumber ||
                                -parseInt(move.blockFrame) >= frameNumber;
                        }
                        if (filterInput.frame.lossOrGain === "이득이") {
                            frameMatches =
                                parseInt(move.hitFrame) >= frameNumber ||
                                parseInt(move.blockFrame) >= frameNumber;
                        }
                    }
                    if (filterInput.frame.aboveOrBelow === "이하") {
                        if (filterInput.frame.lossOrGain === "손해가") {
                            frameMatches =
                                -parseInt(move.hitFrame) <= frameNumber ||
                                -parseInt(move.blockFrame) <= frameNumber;
                        }
                        if (filterInput.frame.lossOrGain === "이득이") {
                            frameMatches =
                                parseInt(move.hitFrame) <= frameNumber ||
                                parseInt(move.blockFrame) <= frameNumber;
                        }
                    }
                }
                // 맞히고/막히고 + 손해/이득 + 숫자가 입력된 경우
                else if (filterInput.frame.aboveOrBelow === "UNSELECTED") {
                    if (filterInput.frame.hitOrGuard === "맞히고") {
                        if (filterInput.frame.lossOrGain === "손해가") {
                            frameMatches = -parseInt(move.hitFrame) === frameNumber;
                        }
                        if (filterInput.frame.lossOrGain === "이득이") {
                            frameMatches = parseInt(move.hitFrame) === frameNumber;
                        }
                    }
                    if (filterInput.frame.hitOrGuard === "막히고") {
                        if (filterInput.frame.lossOrGain === "손해가") {
                            frameMatches = -parseInt(move.blockFrame) === frameNumber;
                        }
                        if (filterInput.frame.lossOrGain === "이득이") {
                            frameMatches = parseInt(move.blockFrame) === frameNumber;
                        }
                    }
                }
                // 맞히고/막히고 + 손해/이득 + 숫자 + 이상/이하가 입력된 경우
                else {
                    if (filterInput.frame.hitOrGuard === "맞히고") {
                        if (filterInput.frame.aboveOrBelow === "이상") {
                            if (filterInput.frame.lossOrGain === "손해가") {
                                frameMatches = -parseInt(move.hitFrame) >= frameNumber;
                            }
                            if (filterInput.frame.lossOrGain === "이득이") {
                                frameMatches = parseInt(move.hitFrame) >= frameNumber;
                            }
                        }
                        if (filterInput.frame.aboveOrBelow === "이하") {
                            if (filterInput.frame.lossOrGain === "손해가") {
                                frameMatches = -parseInt(move.hitFrame) <= frameNumber;
                            }
                            if (filterInput.frame.lossOrGain === "이득이") {
                                frameMatches = parseInt(move.hitFrame) <= frameNumber;
                            }
                        }
                    }
                    if (filterInput.frame.hitOrGuard === "막히고") {
                        if (filterInput.frame.aboveOrBelow === "이상") {
                            if (filterInput.frame.lossOrGain === "손해가") {
                                frameMatches = -parseInt(move.blockFrame) >= frameNumber;
                            }
                            if (filterInput.frame.lossOrGain === "이득이") {
                                frameMatches = parseInt(move.blockFrame) >= frameNumber;
                            }
                        }
                        if (filterInput.frame.aboveOrBelow === "이하") {
                            if (filterInput.frame.lossOrGain === "손해가") {
                                frameMatches = -parseInt(move.blockFrame) <= frameNumber;
                            }
                            if (filterInput.frame.lossOrGain === "이득이") {
                                frameMatches = parseInt(move.blockFrame) <= frameNumber;
                            }
                        }
                    }
                }
            }

            // 숫자만 혹은 숫자 + 이상/이하 만 들어온 경우 발동 프레임 기준으로 필터링
            if (
                filterInput.frame.number !== "" &&
                !isNaN(filterInput.frame.number) &&
                filterInput.frame.lossOrGain === "UNSELECTED" &&
                filterInput.frame.hitOrGuard === "UNSELECTED"
            ) {
                if (filterInput.frame.aboveOrBelow === "이상") {
                    frameMatches =
                        parseInt(move.startUpFrame) >= parseInt(filterInput.frame.number);
                }
                if (filterInput.frame.aboveOrBelow === "이하") {
                    frameMatches =
                        parseInt(move.startUpFrame) <= parseInt(filterInput.frame.number);
                }
                if (filterInput.frame.aboveOrBelow === "UNSELECTED") {
                    frameMatches =
                        parseInt(move.startUpFrame) === parseInt(filterInput.frame.number);
                }
            }

            if (!Object.values(filterInput.feature).some(Boolean)) {
                return commandMatches && textMatches && frameMatches && hitLevelMatches;
            } else {
                return (
                    commandMatches &&
                    Object.entries(filterInput.feature).every(([key, value]) =>
                        value ? move.feature.includes(key) : true
                    ) &&
                    textMatches &&
                    frameMatches &&
                    hitLevelMatches
                );
            }
        });

        if (filteredData.length !== 0) {
            result.push({ title: section.title, data: filteredData });
        }
    });

    return result;
};

export default filterMoveList;
