import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function Shop() {
  const dispatch = useDispatch();
  const {WithdrawMoney,depositeMoney}=bindActionCreators(actionCreators,dispatch);

  // useEffect(()=>{
  //     dispatch(actionCreators.depositeMoney(100))
  // });

  return (
    <div>
      <h2>Deposite/Withdraw Money</h2>
      {/* <button className='btn btn-success' onClick={()=>dispatch(actionCreators.WithdrawMoney(100))}>-</button>
      <p>Updated Balance</p>
      <button className='btn btn-success' onClick={()=>dispatch(actionCreators.depositeMoney(100))}>+</button> */}

      <button
        className="btn btn-success"
        onClick={() => {WithdrawMoney(100)}}
      >
        -
      </button>
      <p>Updated Balance</p>
      <button
        className="btn btn-success"
        onClick={() => {depositeMoney(100)}}
      >
        +
      </button>
    </div>
  );
}
