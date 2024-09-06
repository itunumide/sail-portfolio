import Button from "../component/reuseable/Button";
import Input from "../component/reuseable/Input";

import {useState} from "react"

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
   
  const handleSubmit = () => {

    const userInput = {
      name: name,
      email: email,
      message: message,
    };

    console.log("User Input:", userInput);

    setName("");
    setEmail("");
    setMessage("");
  };

  
  return (
    <div className="flex flex-col items-center w-10/12 m-auto  h-3/4 xs:my-10 ">
      <h3 className="font-medium text-3xl m-6 ">Contacts <div className="relative top-2 left-0 right-0 border-t bg-CustomBlue border-customBlue w-40 m-auto"></div></h3>
      <div className="flex justify-around  xs:flex-col xs:w-full md:flex-row  ">
        <div className="xs:w-full md:w-5/12 ">
          <Input
            id="name"
            labelText="Name"
            inputType="text"
            placeholder="John Doe"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          <Input
            id="email"
            labelText="Email Address"
            inputType="email"
            placeholder="example@example.com"
            value={email}
           onChange={(e) =>{setEmail(e.target.value)}}
          />
        </div>
        <div className="flex flex-col  xs:w-full md:w-5/12 md:items-end ">
          <label className="flex flex-col items-start w-full mb-2 font-bold text-sm" htmlFor="message">
            Your message
            <textarea
              className="rounded-md border w-full border-customBlue bg-customGray font-normal  mt-1 p-1"
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message here"
              value={message}
           onChange={(e) =>{setMessage(e.target.value)}}
            ></textarea>
          </label>

          <Button text="Submit" width="w-full" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
