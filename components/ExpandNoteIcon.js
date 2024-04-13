import { Icon } from "@rneui/themed";

const ExpandNoteIcon = ({ notes, isNoteVisible, highLight }) => {
    if (notes.length === 0) return null;
    return isNoteVisible ? (
        <Icon
            name="keyboard-arrow-up"
            color={notes.includes(highLight) && highLight.length > 0 ? "#e6ac00" : "gray"}
        />
    ) : (
        <Icon
            name="keyboard-arrow-down"
            color={notes.includes(highLight) && highLight.length > 0 ? "#e6ac00" : "gray"}
        />
    );
};

export default ExpandNoteIcon;
