import React from "react";
import { useState } from "react";
import axios from "../Components/utility/axos";
import { toast } from "react-toastify";

function CustomerCreation() {
  //for email
  const [textemail, setTextemail] = useState("");
  const handleChangeemail = (e) => setTextemail(e.target.value);

  //for package
  const [textpack, setTextpack] = useState("");
  const handleChangepack = (e) => setTextpack(e.target.value);
  //for packageid
  const [succes, setSucces] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (textpack === "" || textemail === "") {
      toast.warning("enter something", { theme: "dark" });
    } else {
      //we create user first

      //we get the box id
      let codeuuid = await boxid(textpack);

      //we get the user id

      let cuustid = await custid(textemail);

      affectation(codeuuid, cuustid);

      setSucces(false);
      setTextemail("");
      setTextpack("");
    }
  };

  //get package id
  const boxid = async (tee) => {
    const response = await fetch("/box/ref/" + tee);

    const data = await response.json();

    return data.id;
  };

  //get Customer id

  const custid = async (vv) => {
    const response = await axios.get("/customer/c/" + vv);

    const data = await response.data;
    console.log(data[0]);
    return data[0].id;
  };

  //Affect them
  const affectation = async (bid, cid) => {
    await axios.put("/box/uc/" + bid + "/" + cid);

    setSucces(true);
  };

  return (
    <center>
      <p className="text-5xl mb-16">
        <b>Affect a User to a Package</b>
      </p>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        {succes !== false ? (
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
                <b> Affectation successful </b>
              </span>
            </div>
          </div>
        ) : null}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Customer Mail
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
              Package UUID
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={textpack}
              onChange={handleChangepack}
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
              Affecter
            </button>
          </div>
        </div>
      </form>
    </center>
  );
}

export default CustomerCreation;
