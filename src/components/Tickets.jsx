import React from "react";
import "../css/tickets.css";
import { useState } from "react";

const Tickets = ({ handleSubmit, handleCount, formData }) => {
  // separate states for changing css
  const [round1, setRound1] = useState("no-round");
  const [round2, setRound2] = useState("no-round");
  const [round3, setRound3] = useState("no-round");
  const [round4, setRound4] = useState("no-round");
  const [round5, setRound5] = useState("no-round");
  const [round6, setRound6] = useState("no-round");

  //   separate states for changing checked state of input bar
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);

  const onCheck1 = (e) => {
    console.log(e);
    console.log(e.target.name);

    setCheck1(e.target.checked);
    round1 === "no-round" ? setRound1("round") : setRound1("no-round");
    handleCount(e);
    console.log(check1);
  };
  const onCheck2 = (e) => {
    console.log(e);
    console.log(e.target.name);
    setCheck2(e.target.checked);
    round2 === "no-round" ? setRound2("round") : setRound2("no-round");
    handleCount(e);
    console.log(check2);
  };
  const onCheck3 = (e) => {
    console.log(e);
    console.log(e.target.name);
    setCheck3(e.target.checked);
    console.log(round3);
    round3 === "no-round" ? setRound3("round") : setRound3("no-round");
    handleCount(e);
    console.log(check3);
  };
  const onCheck4 = (e) => {
    console.log(e);
    console.log(e.target.name);
    setCheck4(e.target.checked);
    round4 === "no-round" ? setRound4("round") : setRound4("no-round");
    handleCount(e);
    console.log(check4);
  };
  const onCheck5 = (e) => {
    console.log(e);
    console.log(e.target.name);
    setCheck5(e.target.checked);
    round5 === "no-round" ? setRound5("round") : setRound5("no-round");
    handleCount(e);
    console.log(check5);
  };
  const onCheck6 = (e) => {
    console.log(e);
    console.log(e.target.name);
    setCheck6(e.target.checked);
    round6 === "no-round" ? setRound6("round") : setRound6("no-round");
    handleCount(e);
    console.log(check6);
  };

  const submitTheForm = (e) => {
    console.warn(formData);
    handleSubmit(e);
  };
  //   const handleChange = (e) => {
  //     console.log(e);
  //     console.log(e.target);
  //     ;
  //     // if (e.target.checked) {
  //     //   e.target.checked = false;
  //     // } else {
  //     //   e.target.checked = true;
  //     // }
  //     handleCheck(e);
  //   };

  return (
    <div className="tickets-container">
      <h1 className="ticket-heading">Connect Quest Completed</h1>
      <div className={check1 ? "ticket-card-hover" : "ticket-card"}>
        <div className="top">
          <p>Ticket 1</p>
          <div className="checkbox-container">
            <div
              className={round1}
              onClick={(e) => {
                console.log(e.target);
                console.log("hello");
              }}
            >
              <input
                type="checkbox"
                id="checkbox1"
                checked={check1}
                name="ticket1"
                onChange={onCheck1}
              />
              <label htmlFor="checkbox1"></label>
            </div>
          </div>
        </div>
        <div className="middle">
          <p>
            Connect with your Colleagues! / Find other attendees who match the
            descriptions below:
          </p>
        </div>
        <div className="bottom">
          <ul className="list">
            <li className="ticket1-list-item">
              Someone with a prior career vastly different from procurement.
            </li>
            <li className="ticket1-list-item">
              A colleague sporting their regional color
            </li>
            <li className="ticket1-list-item">
              State Rep who has worked in more than one state
            </li>
            <li className="ticket1-list-item">
              Somone that will share their bucket list
            </li>
          </ul>
        </div>
      </div>
      <div className={check2 ? "ticket-card-hover" : "ticket-card"}>
        <div className="top">
          <p>Ticket 2</p>
          <div className="checkbox-container">
            <div className={round2}>
              <input
                type="checkbox"
                id="checkbox2"
                name="ticket2"
                checked={check2}
                onChange={onCheck2}
              />
              <label htmlFor="checkbox2"></label>
            </div>
          </div>
        </div>
        <div className="middle">
          <p>Something with a jazz theme</p>
        </div>
      </div>
      <div className={check3 ? "ticket-card-hover" : "ticket-card"}>
        <div className="top">
          <p>Ticket 3</p>
          <div className="checkbox-container">
            <div className={round3}>
              <input
                type="checkbox"
                id="checkbox3"
                name="ticket3"
                checked={check3}
                onChange={onCheck3}
              />
              <label htmlFor="checkbox3"></label>
            </div>
          </div>
        </div>
        <div className="middle">
          <p>
            NASPO Cares / Help NASPO give back! Participate in the NASPO Cares
            session and NASPO staff will collect your ticket at the door.
          </p>
        </div>
      </div>
      <div className={check4 ? "ticket-card-hover" : "ticket-card"}>
        <div className="top">
          <p>Ticket 4</p>
          <div className="checkbox-container">
            <div className={round4}>
              <input
                type="checkbox"
                id="checkbox4"
                name="ticket4"
                checked={check4}
                onChange={onCheck4}
              />
              <label htmlFor="checkbox4"></label>
            </div>
          </div>
        </div>
        <div className="middle">
          <p>
            Stories that Stick / Complete your story and post it to the wall.
            NASPO staff will collect your ticket
          </p>
        </div>
      </div>
      <div className={check5 ? "ticket-card-hover" : "ticket-card"}>
        <div className="top">
          <p>Ticket 5</p>
          <div className="checkbox-container">
            <div className={round5}>
              <input
                type="checkbox"
                id="checkbox5"
                name="ticket5"
                checked={check5}
                onChange={onCheck5}
              />
              <label htmlFor="checkbox5"></label>
            </div>
          </div>
        </div>
        <div className="middle">
          <p>
            Share a key takeaway on social media from your learning group / Stop
            by registration to show us your social media post and turn in a
            ticket #REACHORWHATEVERTHEAPPROVEDHASHTAGIS
          </p>
        </div>
      </div>
      <div className={check6 ? "ticket-card-hover" : "ticket-card"}>
        <div className="top">
          <p>Ticket 6</p>
          <div className="checkbox-container">
            <div className={round6}>
              <input
                type="checkbox"
                id="checkbox6"
                name="ticket6"
                checked={check6}
                onChange={onCheck6}
              />
              <label htmlFor="checkbox6"></label>
            </div>
          </div>
        </div>
        <div className="middle">
          <p>
            REACH Out! / Ask a question or engage in conversation during a
            session and NASPO staff will collect your ticket.
          </p>
        </div>
      </div>

      <input
        type="submit"
        value="Submit"
        className="submit-tickets-btn"
        onClick={submitTheForm}
      />
    </div>
  );
};

export default Tickets;
