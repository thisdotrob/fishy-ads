import React from 'react';

import Input from './Input.jsx';
import Button from './Button.jsx';

const NewAdvertPanel = (props) => {
  return (
    <div>
      <form>
        <Input label='Species ' onInput={(val) => props.setSpecies(val)}/>
        <Input label='Price ' onInput={(val) => props.setPrice(val)}/>
        <Button text='Submit advert' onClick={() => props.submitAdvert()}/>
      </form>
    </div>
  );
}

export default NewAdvertPanel;
