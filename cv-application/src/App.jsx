import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [general, setGeneral] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

   return (
    <div>
      <h1>CV Application</h1>

      <GeneralInfo data={general} setData={setGeneral} />
      <Education data={education} setData={setEducation} />
      <Experience data={experience} setData={setExperience} />
    </div>
  );

}