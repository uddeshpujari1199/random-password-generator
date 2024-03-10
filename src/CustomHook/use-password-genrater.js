import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setEorrorMessage] = useState("");

  const generatePassword = (checkboxData, length) => {
    let charset = "",
      genreatedPassword = "";

    const selectedOption = checkboxData.filter((checkbox) => checkbox.state);

    if(selectedOption.length==0){
        setEorrorMessage('Select At Least One Option.');
        setPassword('');
        return
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Latter":
          charset += "ABCDEFGHIJKLMNOPQRSTWXYZ";
          break;
        case "Include Lowercase Latter":
          charset += "abcdefghijklmnopqrstwxyz";
          break;
        case "Include Numbers":
          charset += "1234567890";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*";
          break;
        default:
          break;
      }
    });
    for(let i=0;i<length;i++){
         const randomIndex=Math.floor(Math.random()*charset.length)
         genreatedPassword+=charset[randomIndex];
    }
    setPassword(genreatedPassword);
    setEorrorMessage("");
  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
