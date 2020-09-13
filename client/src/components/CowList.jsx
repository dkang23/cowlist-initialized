import React from 'react';
import CowEntry from './CowEntry.jsx';

var CowList = (props) => {
  console.log(props.cows);
  return (
    <div>
      <ul>
        {props.cows.map((data) => {
          return <CowEntry clickHandler={props.clickHandler} cow={data} />;
        })}
      </ul>
    </div>
  );
};

export default CowList;
