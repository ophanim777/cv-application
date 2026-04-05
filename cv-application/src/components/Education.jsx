import { useState } from "react";

export default function Education({ data, setData }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

 return (
    <div>
      <h2>Education</h2>

      {isEditing ? (
        <>
          <input name="school" placeholder="School" onChange={handleChange} />
          <input name="study" placeholder="Study" onChange={handleChange} />
          <input name="date" placeholder="Date" onChange={handleChange} />
          <button onClick={() => setIsEditing(false)}>Submit</button>
        </>
      ) : (
        <>
          <p>{data.school}</p>
          <p>{data.study}</p>
          <p>{data.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
