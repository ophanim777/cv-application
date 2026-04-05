import { useState } from "react";

export default function GeneralInfo({ data, setData }){
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
}
}