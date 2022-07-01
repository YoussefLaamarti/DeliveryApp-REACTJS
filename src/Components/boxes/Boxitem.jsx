import PropTypes from "prop-types";
import checker from "../utility/checker";
import axios from "../utility/axos";
import { toast } from "react-toastify";

import { useState } from "react";

function BoxItem({ box, userid, etat }) {
  const [boxes, setBoxes] = useState([]);
  let idid = userid.id;

  const notify = () =>
    toast.success(" Package Delivered!", {
      position: "top-right",
      autoClose: 5000,
      theme: "dark",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bodyClassName: "dark",
    });

  //affect
  const affectationBoxToDelivery = async (id, id_delibv) => {
    await axios.put("/box/ud/" + id + "/" + id_delibv);
    //reload page
    document.location.reload();
  };

  //affect
  const updatebox = async (stat, id) => {
    await axios.put("/box/us/" + id, {
      status: stat,
    });
    //reload page
    document.location.reload();
  };

  //Affect Box
  const affect = (b) => {
    affectationBoxToDelivery(b, idid);
  };

  //update box
  const update = (b, id) => {
    notify();
    setTimeout(() => {
      updatebox(b, id);
    }, 1000);
  };

  return (
    <div className="card animate__animated  animate__fadeInUp   bg-base-100">
      <div className="flex-row  items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className=" shadow w-14 h-14">
              <img
                src={"https://cdn-icons-png.flaticon.com/512/595/595472.png"}
                alt="Box"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title h-10 mb-4 text-yellow-300">
            <b>{box.package_name}</b>
          </h2>
          <ul className="steps">
            {box.status === "NOT_YET_DELIVERED" ? (
              <>
                <li className="step step-primary text-green-300">
                  <i>
                    <b>NOT YET DELIVERED</b>
                  </i>
                </li>
                <li className="step text-white  ">
                  <i>
                    <b>IN PROGRESS</b>
                  </i>
                </li>
                <li className="step text-white ">
                  <i>
                    <b>DELIVERED</b>
                  </i>
                </li>
              </>
            ) : null}
          </ul>
          <ul className="steps">
            {box.status === "IN_PROGRESS" ? (
              <>
                <li className="step step-primary text-white ">
                  <i>
                    <b>NOT YET DELIVERED</b>
                  </i>
                </li>
                <li className="step step-primary text-green-300">
                  <i>
                    <b>IN PROGRESS</b>
                  </i>
                </li>
                <li className="step text-white">
                  <i>
                    <b>DELIVERED</b>
                  </i>
                </li>
              </>
            ) : null}
          </ul>
          <ul className="steps">
            {box.status === "DELIVERED" ? (
              <>
                <li className="step step-primary text-white">
                  <i>
                    <b>NOT YET DELIVERED</b>
                  </i>
                </li>
                <li className="step step-primary text-white">
                  <i>
                    <b>IN PROGRESS</b>
                  </i>
                </li>
                <li className="step step-primary text-green-300">
                  <i>
                    <b>DELIVERED</b>
                  </i>
                </li>
              </>
            ) : null}
          </ul>
          <b>
            <h1 className="  text-red-300 mt-10 ">{"UUID : "}</h1>
          </b>
          <b>
            <h1 className="   text-white h-10">{box.code}</h1>
          </b>
          <b>
            <h1 className="  text-blue-300  ">{"CITY : "}</h1>
          </b>
          <b>
            <h1 className="   text-white h-10">{box.city}</h1>
          </b>
          <b>
            <h1 className="  text-blue-300 ">{"STREET : "}</h1>
          </b>
          <b>
            <h1 className="   text-white h-10">{box.street}</h1>
          </b>
          <b>
            <h1 className="  text-blue-300 ">{"ZIPCODE : "}</h1>
          </b>
          <b>
            <h1 className="   text-white h-10">{box.zipcode}</h1>
          </b>
          {box.status === "DELIVERED" ? (
            <>
              <b>
                <h1 className="  text-red-300  ">{"Delivered on  : "}</h1>
              </b>
              <b>
                <h1 className="   text-white h-16">
                  {new Date(box.date).toDateString()}
                </h1>
              </b>
            </>
          ) : null}

          {checker() == "DELIVERY_MAN" && etat == "a" ? (
            <div>
              <button
                onClick={() => affect(box.id)}
                className="btn btn-success mr-2"
              >
                AFFECT
              </button>
            </div>
          ) : null}
          {checker() == "DELIVERY_MAN" && !etat ? <div></div> : null}

          {checker() == "DELIVERY_MAN" && etat == "d" ? (
            <div>
              <button
                onClick={() => update("2", box.id)}
                className="btn btn-error mr-2"
              >
                DELIVER
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

BoxItem.propTypes = {
  box: PropTypes.object.isRequired,
  userid: PropTypes.object.isRequired,
  etat: PropTypes.object.isRequired,
};

export default BoxItem;

//onClick={() => update('2' , box.id)}
