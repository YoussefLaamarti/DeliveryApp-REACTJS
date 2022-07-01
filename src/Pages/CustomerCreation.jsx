import React from "react";
import { useState } from "react";
import checker from "../Components/utility/checker";
import Forbbiden from "./Forbidden";
import { toast } from "react-toastify";

function CustomerCreation() {
  //for username
  const [textusername, setTextusername] = useState("");
  const handleChangeusername = (e) => setTextusername(e.target.value);

  //for first_name
  const [textfirst, setTextfirst] = useState("");
  const handleChangefirst = (e) => setTextfirst(e.target.value);

  //for last_name
  const [textlast, setTextlast] = useState("");
  const handleChangelast = (e) => setTextlast(e.target.value);

  //for email
  const [textemail, setTextemail] = useState("");
  const handleChangeemail = (e) => setTextemail(e.target.value);

  const [email, setEmail] = useState("");

  //for phone_number
  const [textphone, setTextphone] = useState("");
  const handleChangephone = (e) => setTextphone(e.target.value);

  //for package

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      textusername === "" ||
      textfirst === "" ||
      textlast === "" ||
      textemail === "" ||
      textphone === ""
    ) {
      toast.warning("enter something", { theme: "dark" });
    } else {
      createuser();

      setEmail(textemail);

      setTextusername("");
      setTextfirst("");
      setTextlast("");
      setTextemail("");

      setTextphone("");
    }
  };

  //Create the Customer
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: textusername,
      first_name: textfirst,
      last_name: textlast,
      email: textemail,
      phone_number: textphone,
    }),
  };
  function createuser() {
    fetch("/customer", requestOptions);
  }

  if (checker() !== "SELLER") {
    return <Forbbiden />;
  }
  return (
    <center>
      <p className="text-5xl mb-16">
        <b>Create Customer</b>
      </p>

      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        {email !== "" ? (
          <div className="alert mb-6  alert-success shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                {" "}
                <b> {email} </b>
              </span>
            </div>
          </div>
        ) : null}
        <div className="md:flex  md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              username
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={textusername}
              onChange={handleChangeusername}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              first name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={textfirst}
              onChange={handleChangefirst}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              last name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={textlast}
              onChange={handleChangelast}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={textemail}
              onChange={handleChangeemail}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              phone number
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={textphone}
              onChange={handleChangephone}
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Create Customer
            </button>
          </div>
        </div>
      </form>
    </center>
  );
}

export default CustomerCreation;
