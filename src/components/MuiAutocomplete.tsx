import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};
const skills = ["HTML", "CSS", "JS", "TypeScript", "React"];
const skillsOption = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState<String | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log(value);
  console.log(skill);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: String | null) => setValue(newValue)}
      />
      <Autocomplete
        options={skillsOption}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
