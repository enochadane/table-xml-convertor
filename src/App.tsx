// import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserTable from "./components/UserTable";

const userData = [
  {
    name: "Aryan",
    age: 35,
    hobbies: ["cricket", "chess"],
  },
  {
    name: "Steve",
    age: 25,
    hobbies: ["reading", "driving"],
  },
  {
    name: "Ron",
    age: 28,
    hobbies: [],
  },
  {
    name: "Ted",
    age: 62,
    hobbies: ["running"],
  },
];

function App() {
  // const [isConverted, setIsConverted] = useState(false);

  const convertToXml = () => {
    const xmlData = `
      <USERDATA>
        ${userData
          .map((user) => {
            const hobbiesString = user.hobbies.join(", ");
            return `
            <USER name="${user.name}">
              <NAME>${user.name}</NAME>
              <AGE>${user.age}</AGE>
              <HOBBIES>${hobbiesString}</HOBBIES>
            </USER>
          `;
          })
          .join("\n")}
      </USERDATA>
    `;
    const xmlBlob = new Blob([xmlData], { type: "application/xml" });
    const xmlUrl = URL.createObjectURL(xmlBlob);
    const a = document.createElement("a");
    a.href = xmlUrl;
    a.download = "users.xml";
    a.click();
    // setIsConverted(true);

    toast.success("Table successfully converted to XML!", {
      style: {
        backgroundColor: "green",
        color: "white",
        borderRadius: "10px",
        fontFamily: "sans-serif",
        fontSize: "16px",
        padding: "10px",
      },
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="">
      <ToastContainer />
      <UserTable userData={userData} onConvert={convertToXml} />
    </div>
  );
}

export default App;
