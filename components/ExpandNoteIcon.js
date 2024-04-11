import { Icon } from "@rneui/themed";

const ExpandNoteIcon = ({ notes, isNoteVisible }) => {
    if (notes.length === 0) return null;
    return isNoteVisible ? (
        <Icon name="keyboard-arrow-up" color="gray" />
    ) : (
        <Icon name="keyboard-arrow-down" color="gray" />
    );
};

export default ExpandNoteIcon;
