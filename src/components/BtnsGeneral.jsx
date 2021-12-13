import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';


export default function BtnsGeneral() {
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'BREAKFAST', value: '1' },
      { name: 'ALL DAY', value: '2' },
    ];
  
    return (
      <>
      <br/>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? 'outline-success' : 'outline-danger'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
  }
  