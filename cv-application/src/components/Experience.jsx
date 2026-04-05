import { useState } from "react";

export default function Experience({ data, setData }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }


  return (
    <div>
      <h2>Experience</h2>

      {isEditing ? (
        <>
          <input name="company" placeholder="Company" onChange={handleChange} />
          <input name="position" placeholder="Position" onChange={handleChange} />
          <input name="responsibility" placeholder="Responsibilities" onChange={handleChange} />
          <input name="date" placeholder="Date" onChange={handleChange} />
          <button onClick={() => setIsEditing(false)}>Submit</button>
        </>
      )

}