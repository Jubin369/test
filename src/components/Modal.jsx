import React from "react";
import "../css/Modal.css";
import "../css/tickets.css";
const Modal = (props) => {
  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };
  if (!props.show) {
    return null;
  } else {
    return (
      <div className="modal-container" style={{ backgroundColor:"#fff"}}>
        <div className="modal-container-body" >
          {/* <div className="card"> */}
            <h2>Form submitted succesfully</h2>
            <p className="modal-name"><span>NAME :&nbsp;</span> { props.fname}</p>
            <p className="modal-region"><span>REGION :&nbsp;</span>{ props.formData.region}</p>
          
            <div className="card-container">
              {props.formData.tickets.map((ticket, index) => {
                return (
                  <div className="card">
                    <h1 className="title">{ticket.name}</h1>
                    <div className="card-two">
                      <div className="box">
                        <div className="box__text">
                          <p className="box__desc">{ticket.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>{props.children}</div>
            <button
              style={{ color: "white",backgroundColor:"red" }}
              className="toggle-button"
              onClick={onClose}
            >
              Close
            </button>
          {/* </div> */}
        </div>
      </div>
    );
  }
};

export default Modal