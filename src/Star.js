import { FaStar } from "react-icons/fa";

function Star({ selected = false, onSelect }) {
    return <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>;
}

export default Star;
