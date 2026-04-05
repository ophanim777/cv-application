import { useState } from "react";

export default function GeneralInfo({ data, setData }){
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
}

 return (
    <div>
      <h2>General Info</h2>

      {isEditing ? (
        <>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />
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