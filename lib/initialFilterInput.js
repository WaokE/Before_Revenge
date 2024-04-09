// filterInput 상태의 이니셜 상태를 정의한 파일
// filterInput 상태를 초기화할 때 주로 사용함
const initialFilterInput = {
    feature: {
        HM: false,
        HT: false,
        PC: false,
        TN: false,
    },
    command: [],
    text: "",
    frame: {
        number: "",
        lossOrGain: "UNSELECTED",
        hitOrGuard: "UNSELECTED",
        aboveOrBelow: "UNSELECTED",
    },
    hitLevel: [],
};

export default initialFilterInput;
