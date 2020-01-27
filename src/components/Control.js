import * as React from 'react';
import AddButton from './AddButton';

const Controls = (props) => {
  return (
    <div className="buttons-container">
      <AddButton onAddCiggie={props.onAddCiggie} />
    </div>
  )
}

export default Controls;