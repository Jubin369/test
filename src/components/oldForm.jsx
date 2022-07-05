// import React, { useState } from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import Modal from "./Modal";
// import banner from "../images/banner.png";
// import "../css/info.css";
// import "../css/tickets.css";
// import "../css/form.css";
// import "react-toastify/dist/ReactToastify.css";
// import data from "../assets/NASPO DATA.json";

// const initialFormData = {
//   name: "",
//   region: "",
//   tickets: [],
//   points: 0,
// };

// const personData = data.people;

// const Form = () => {
//   // separate states for changing css
//   const [round1, setRound1] = useState("no-round");
//   const [round2, setRound2] = useState("no-round");
//   const [round3, setRound3] = useState("no-round");
//   const [round4, setRound4] = useState("no-round");
//   const [round5, setRound5] = useState("no-round");
//   const [round6, setRound6] = useState("no-round");

//   //   separate states for changing checked state of input bar
//   const [check1, setCheck1] = useState(false);
//   const [check2, setCheck2] = useState(false);
//   const [check3, setCheck3] = useState(false);
//   const [check4, setCheck4] = useState(false);
//   const [check5, setCheck5] = useState(false);
//   const [check6, setCheck6] = useState(false);

//   //   other states
//   const [people, setPeople] = useState(personData);
//   const [page, setPage] = useState(0);
//   const [formData, setFormData] = useState(initialFormData);
//   const [show, setShow] = useState(false);

//   console.log(setPeople);

//   //   notification function
//   const notify = (data) => {
//     toast(data);
//   };
//   //   handles point count
//   const handleCount = (e) => {
//     console.log(e.target);
//     if (e.target.checked === false) {
//       setFormData({
//         ...formData,
//         points: formData.points - 1,
//       });
//       console.log(formData);
//     } else if (e.target.checked === true) {
//       setFormData({
//         ...formData,
//         points: formData.points + 1,
//       });
//       console.log(formData);
//     }
//   };
//   //   shows the modal using the show state for that modal
//   const showModal = () => {
//     setShow(!show);
//   };
//   //   responsible for handling change in the page
//   const changePage = (e) => {
//     e.preventDefault();
//     if (formData.region === "") {
//       notify("Please enter a valid region");
//     } else {
//       setPage(1);
//     }
//   };
//   //   handles submit for the final form
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.points >= 0) {
//       setShow(true);
//     } else {
//       notify("Please select atleast one ticket");
//     }
//   };

//   //   HANDLES NAME CHANGE
//   const handleNameChange = (e) => {
//     console.log(e.target.value);
//     setFormData({
//       ...formData,
//       name: e.target.value,
//     });
//     console.log(e);
//     var newData = {};
//     var newArray;
//     newArray = people.map((person) => {
//       var fullname = person["Full Name"].toLowerCase();
//       var region = person["Region"];
//       var newPerson = {
//         fullname: fullname,
//         region: region,
//       };
//       return newPerson;
//     });
//     newData["people"] = newArray;
//     console.log(newData["people"]);
//     console.log(newData);
//     newData.people.forEach((person) => {
//       if (person.fullname === e.target.value.toLowerCase()) {
//         console.log(
//           e.target.parentElement.parentElement.children[1].children[0]
//         );
//         e.target.parentElement.parentElement.children[1].children[0].value =
//           person.region;
//         handleRegionChange(person.region);
//       }
//     });
//   };

//   //   CHANGES THE REGION
//   const handleRegionChange = (data) => {
//     setFormData({
//       ...formData,
//       region: data,
//     });
//     console.log(formData);
//   };

//   const handleNameKeyDown = (e) => {
//     console.log(e);
//     console.log(e.target);
//   };

//   const onCheck1 = (e) => {
//     console.log(e);
//     var top =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[0];
//     var middle =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[1];
//     var bottom =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[2];
//     var ticketname = top.children[0].innerText;
//     var ticketvalue = middle.children[0].innerText;

//     var listItems = [];

//     if (bottom.children[0].children) {
//       for (const item of bottom.children[0].children) {
//         console.log(item);
//         listItems.push(item.innerText);
//       }
//     }

//     var ticket = {
//       name: ticketname,
//       value: ticketvalue,
//       items: listItems,
//     };

//     var tickets = formData.tickets;

//     if (tickets.includes(ticket)) {
//       var i = tickets.indexOf(ticket);
//       tickets.splice(i);
//       setFormData({
//         ...formData,
//         tickets: tickets,
//       });
//       console.log(formData);
//     } else {
//       tickets.push(ticket);
//       setFormData({
//         ...formData,
//         tickets: tickets,
//       });
//     }

//     setCheck1(e.target.checked);
//     round1 === "no-round" ? setRound1("round") : setRound1("no-round");
//     handleCount(e);
//     setFormData({
//       ...formData,
//       ticket1: e.target.value,
//     });
//     console.log(check1);
//   };
//   const onCheck2 = (e) => {
//     var top =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[0];
//     var middle =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[1];
//     var bottom =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[2];
//     var ticketname = top.children[0].innerText;
//     var ticketvalue = middle.children[0].innerText;

//     var listItems = [];

//     if (bottom !== undefined) {
//       for (const item of bottom.children[0].children) {
//         console.log(item);
//         listItems.push(item.innerText);
//       }
//     }

//     var ticket = {
//       name: ticketname,
//       value: ticketvalue,
//       items: listItems,
//     };

//     var tickets = formData.tickets;

//     if (tickets.includes(ticket)) {
//       var i = tickets.indexOf(ticket);
//       tickets.splice(i);
//       setFormData({
//         ...formData,
//         tickets: tickets,
//       });
//       console.log(formData);
//     } else {
//       tickets.push(ticket);
//       setFormData({
//         ...formData,
//         tickets: tickets,
//       });
//     }

//     setCheck2(e.target.checked);
//     round2 === "no-round" ? setRound2("round") : setRound2("no-round");
//     handleCount(e);
//     console.log(check2);
//   };
//   const onCheck3 = (e) => {
//     var top =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[0];
//     var middle =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[1];
//     var bottom =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[2];
//     var ticketname = top.children[0].innerText;
//     var ticketvalue = middle.children[0].innerText;

//     var listItems = [];

//     if (bottom !== undefined) {
//       for (const item of bottom.children[0].children) {
//         console.log(item);
//         listItems.push(item.innerText);
//       }
//     }

//     var ticket = {
//       name: ticketname,
//       value: ticketvalue,
//       items: listItems,
//     };

//     var tickets = formData.tickets;

//     if (tickets.includes(ticket)) {
//       var i = tickets.indexOf(ticket);
//       tickets.splice(i);
//       setFormData({
//         ...formData,
//         tickets: tickets,
//       });
//       console.log(formData);
//     } else {
//       tickets.push(ticket);
//       setFormData({
//         ...formData,
//         tickets: tickets,
//       });
//     }

//     setCheck3(e.target.checked);
//     console.log(round3);
//     round3 === "no-round" ? setRound3("round") : setRound3("no-round");
//     handleCount(e);
//     console.log(check3);
//   };
//   const onCheck4 = (e) => {
//     var top =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[0];
//     var middle =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[1];
//     var bottom =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[2];
//     var ticketname = top.children[0].innerText;
//     var ticketvalue = middle.children[0].innerText;

//     var listItems = [];

//     if (bottom !== undefined) {
//       for (const item of bottom.children[0].children) {
//         console.log(item);
//         listItems.push(item.innerText);
//       }
//     }

//     var ticket = {
//       name: ticketname,
//       value: ticketvalue,
//       items: listItems,
//     };

//     var tickets = formData.tickets;

//     if (tickets.includes(ticket)) {
//       var i = tickets.indexOf(ticket);
//       tickets.splice(i);
//       setFormData({
//         ...formData,
//         tickets: tickets,
//       });
//       console.log(formData);
//     } else {
//       tickets.push(ticket);
//       setFormData({
//         ...formData,
//         tickets: tickets,
//       });
//     }

//     setCheck4(e.target.checked);
//     round4 === "no-round" ? setRound4("round") : setRound4("no-round");
//     handleCount(e);
//     console.log(check4);
//   };
//   const onCheck5 = (e) => {
//     var top =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[0];
//     var middle =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[1];
//     var bottom =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[2];
//     var ticketname = top.children[0].innerText;
//     var ticketvalue = middle.children[0].innerText;

//     var listItems = [];

//     if (bottom !== undefined) {
//       for (const item of bottom.children[0].children) {
//         console.log(item);
//         listItems.push(item.innerText);
//       }
//     }

//     var ticket = {
//       name: ticketname,
//       value: ticketvalue,
//       items: listItems,
//     };

//     var tickets = formData.tickets;

//     if (tickets.includes(ticket)) {
//       var i = tickets.indexOf(ticket);
//       tickets.splice(i);
//       setFormData({
//         ...formData,
//         tickets: tickets,
//       });
//       console.log(formData);
//     } else {
//       tickets.push(ticket);
//       setFormData({
//         ...formData,
//         tickets: tickets,
//       });
//     }

//     setCheck5(e.target.checked);
//     round5 === "no-round" ? setRound5("round") : setRound5("no-round");
//     handleCount(e);
//     console.log(check5);
//   };
//   const onCheck6 = (e) => {
//     var top =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[0];
//     var middle =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[1];
//     var bottom =
//       e.target.parentElement.parentElement.parentElement.parentElement
//         .children[2];
//     var ticketname = top.children[0].innerText;
//     var ticketvalue = middle.children[0].innerText;

//     var listItems = [];

//     if (bottom !== undefined) {
//       for (const item of bottom.children[0].children) {
//         console.log(item);
//         listItems.push(item.innerText);
//       }
//     }

//     var ticket = {
//       name: ticketname,
//       value: ticketvalue,
//       items: listItems,
//     };

//     var tickets = formData.tickets;

//     if (tickets.includes(ticket)) {
//       var i = tickets.indexOf(ticket);
//       tickets.splice(i);
//       setFormData({
//         ...formData,
//         tickets: tickets,
//       });
//       console.log(formData);
//     } else {
//       tickets.push(ticket);
//       setFormData({
//         ...formData,
//         tickets: tickets,
//       });
//     }

//     setCheck6(e.target.checked);
//     round6 === "no-round" ? setRound6("round") : setRound6("no-round");
//     handleCount(e);
//     console.log(check6);
//   };

//   const submitTheForm = (e) => {
//     console.warn(formData);
//     handleSubmit(e);
//   };
//   //   decides the page to display based on the page state value
//   const pageDisplay = () => {
//     if (page === 0) {
//       return (
//         <>
//           <div className="banner-container">
//             <img src={banner} alt="naspo banner" />
//           </div>
//           <div className="info-container">
//             <form className="info-form">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   placeholder="Name"
//                   className="info-input"
//                   onChange={handleNameChange}
//                   onKeyDown={handleNameKeyDown}
//                 />
//               </div>

//               <div className="form-group region-container">
//                 <input
//                   type="address"
//                   name="region"
//                   id="region"
//                   placeholder="Region"
//                   // value={formData.region}
//                   value={formData.region == null ? "" : formData.region}
//                   className="info-input"
//                   onChange={(e) => {
//                     handleRegionChange(e.target.value);
//                   }}
//                   contentEditable="false"
//                 />
//                 <FaMapMarkerAlt className="map-icon" />
//               </div>
//               <input
//                 type="submit"
//                 value="continue"
//                 id="submit-info-btn"
//                 onClick={changePage}
//               />
//             </form>
//           </div>
//         </>
//       );
//     } else {
//       return (
//         <>
//           <div className="banner-container">
//             <img src={banner} alt="naspo banner" />
//           </div>
//           <div className="tickets-container">
//             <h1 className="ticket-heading">Connect Quest Completed</h1>
//             <div className={check1 ? "ticket-card-hover" : "ticket-card"}>
//               <div className="top">
//                 <p>Ticket 1</p>
//                 <div className="checkbox-container">
//                   <div
//                     className={round1}
//                     onClick={(e) => {
//                       console.log(e.target);
//                       console.log("hello");
//                     }}
//                   >
//                     <input
//                       type="checkbox"
//                       id="checkbox1"
//                       checked={check1}
//                       name="ticket1"
//                       onChange={onCheck1}
//                     />
//                     <label htmlFor="checkbox1"></label>
//                   </div>
//                 </div>
//               </div>
//               <div className="middle">
//                 <p>
//                   Connect with your Colleagues! / Find other attendees who match
//                   the descriptions below:
//                 </p>
//               </div>
//               <div className="bottom">
//                 <ul className="list">
//                   <li className="ticket1-list-item">
//                     Someone with a prior career vastly different from
//                     procurement.
//                   </li>
//                   <li className="ticket1-list-item">
//                     A colleague sporting their regional color
//                   </li>
//                   <li className="ticket1-list-item">
//                     State Rep who has worked in more than one state
//                   </li>
//                   <li className="ticket1-list-item">
//                     Somone that will share their bucket list
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className={check2 ? "ticket-card-hover" : "ticket-card"}>
//               <div className="top">
//                 <p>Ticket 2</p>
//                 <div className="checkbox-container">
//                   <div className={round2}>
//                     <input
//                       type="checkbox"
//                       id="checkbox2"
//                       name="ticket2"
//                       checked={check2}
//                       onChange={onCheck2}
//                     />
//                     <label htmlFor="checkbox2"></label>
//                   </div>
//                 </div>
//               </div>
//               <div className="middle">
//                 <p>Something with a jazz theme</p>
//               </div>
//             </div>
//             <div className={check3 ? "ticket-card-hover" : "ticket-card"}>
//               <div className="top">
//                 <p>Ticket 3</p>
//                 <div className="checkbox-container">
//                   <div className={round3}>
//                     <input
//                       type="checkbox"
//                       id="checkbox3"
//                       name="ticket3"
//                       checked={check3}
//                       onChange={onCheck3}
//                     />
//                     <label htmlFor="checkbox3"></label>
//                   </div>
//                 </div>
//               </div>
//               <div className="middle">
//                 <p>
//                   NASPO Cares / Help NASPO give back! Participate in the NASPO
//                   Cares session and NASPO staff will collect your ticket at the
//                   door.
//                 </p>
//               </div>
//             </div>
//             <div className={check4 ? "ticket-card-hover" : "ticket-card"}>
//               <div className="top">
//                 <p>Ticket 4</p>
//                 <div className="checkbox-container">
//                   <div className={round4}>
//                     <input
//                       type="checkbox"
//                       id="checkbox4"
//                       name="ticket4"
//                       checked={check4}
//                       onChange={onCheck4}
//                     />
//                     <label htmlFor="checkbox4"></label>
//                   </div>
//                 </div>
//               </div>
//               <div className="middle">
//                 <p>
//                   Stories that Stick / Complete your story and post it to the
//                   wall. NASPO staff will collect your ticket
//                 </p>
//               </div>
//             </div>
//             <div className={check5 ? "ticket-card-hover" : "ticket-card"}>
//               <div className="top">
//                 <p>Ticket 5</p>
//                 <div className="checkbox-container">
//                   <div className={round5}>
//                     <input
//                       type="checkbox"
//                       id="checkbox5"
//                       name="ticket5"
//                       checked={check5}
//                       onChange={onCheck5}
//                     />
//                     <label htmlFor="checkbox5"></label>
//                   </div>
//                 </div>
//               </div>
//               <div className="middle">
//                 <p>
//                   Share a key takeaway on social media from your learning group
//                   / Stop by registration to show us your social media post and
//                   turn in a ticket #REACHORWHATEVERTHEAPPROVEDHASHTAGIS
//                 </p>
//               </div>
//             </div>
//             <div className={check6 ? "ticket-card-hover" : "ticket-card"}>
//               <div className="top">
//                 <p>Ticket 6</p>
//                 <div className="checkbox-container">
//                   <div className={round6}>
//                     <input
//                       type="checkbox"
//                       id="checkbox6"
//                       name="ticket6"
//                       checked={check6}
//                       onChange={onCheck6}
//                     />
//                     <label htmlFor="checkbox6"></label>
//                   </div>
//                 </div>
//               </div>
//               <div className="middle">
//                 <p>
//                   REACH Out! / Ask a question or engage in conversation during a
//                   session and NASPO staff will collect your ticket.
//                 </p>
//               </div>
//             </div>

//             <input
//               type="submit"
//               value="Submit"
//               className="submit-tickets-btn"
//               onClick={submitTheForm}
//             />
//           </div>
//         </>
//       );
//     }
//   };

//   //   THE RETURN PORTION OF THIS COMPONENT
//   return (
//     <div className="details-form-container">
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//       <div id="form-body">{pageDisplay()}</div>
//       <Modal onClose={showModal} show={show} formData={formData} />
//     </div>
//   );
// };

// export default Form;
