import React from 'react'


const Amount = (props) => (
          <>
            <p className="you-have-saved">You have saved:</p>
            <div className="amount-wrapper">
              <div className="amount-container"> 
                <div className="money-icon">£{props.value}</div>
              </div>
            </div>
          </>
)

export default Amount;