import React, { useState } from "react";
import InputField from "./components/InputField";

const App: React.FC = () => {
 type FormValue = string | number | boolean | null;

const [formState, setFormState] = useState<Record<string, FormValue>>({});
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [theme,setTheme] = useState<boolean>(false)

  return (
    <div className={`w-[60%] mx-auto mt-5  p-5 rounded ${theme ?"bg-gray-800":"bg-[#fff]"}`}>
      <h1 className="text-2xl font-bold mb-5 text-gray-600">Component 1: InputField</h1>
      <div className="flex gap-5 items-center mb-5">
        <button className="text-gray-400 dark:text-gray-500 border rounded px-3 py-1" onClick={()=>setTheme(false)}>Light</button>
        <button className="text-gray-400 dark:text-gray-500 border rounded px-3 py-1" onClick={()=>setTheme(true)}>Dark</button>
      </div>
      
      <InputField
        name="username"
        inputType="text"
        label="Username"
        placeholder="Enter a username"
        value={formState.username ?? ""}
        onChange={handleInputChange}
        helperText="This will be your public profile name."
        variant="outlined"
        size="md"
      />
      <br /><br />
      <InputField
        name="password"
        inputType="password"
        label="Password"
        placeholder="Enter the password"
        value={formState.password ?? ""}
        onChange={handleInputChange}
        helperText="This will be your secrate password."
        variant="outlined"
        size="lg"
      />
    </div>
  );
};

export default App;
