import React, { useState } from 'react';
const ControlPanel = () => {
  const [values, setValues] = useState({
    infusionRate: 0,
    volume: 0,
    rate: 0,
    meter: 0,
    millimeter: 0
  });
  const [activeFieldIndex, setActiveFieldIndex] = useState(0);
  const fields = [
    { name: 'infusionRate', label: 'Infusion Rate' },
    { name: 'volume', label: 'Volume' },
    { name: 'rate', label: 'Rate' },
    { name: 'meter', label: 'Meter' },
    { name: 'millimeter', label: 'Millimeter' }
  ];
  const activeField = fields[activeFieldIndex];
  const increaseCount = () => {
    setValues((prevValues) => {
      const currentValue = prevValues[activeField.name];
      if (currentValue === 9) {
        const nextIndex = (activeFieldIndex + 1) % fields.length;
        setActiveFieldIndex(nextIndex);
        const nextField = fields[nextIndex];
        return { ...prevValues, [nextField.name]: 1 };
      } else {
        return { ...prevValues, [activeField.name]: currentValue + 1 };
      }
    });
  };
  const decreaseCount = () => {
    setValues((prevValues) => {
      const currentValue = prevValues[activeField.name];
      if (currentValue === 0) {
        const prevIndex = (activeFieldIndex - 1 + fields.length) % fields.length;
        setActiveFieldIndex(prevIndex);
        const prevField = fields[prevIndex];
        return { ...prevValues, [prevField.name]: 9 };
      } else {
        return { ...prevValues, [activeField.name]: currentValue - 1 };
      }
    });
  };
  const switchField = (direction) => {
    setActiveFieldIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + fields.length) % fields.length;
      return newIndex;
    });
  };
  const handleOkClick = () => {
    console.log(values);
    const displayValues = fields.map((field) => `${field.label}: ${values[field.name]}`);
    setValues({ ...values, displayValues });
  };
  return (
    <div className="control-panel">
      <h2>Control Panel</h2>
      <div className="control-panel__input">
        {fields.map((field) => (
          <label key={field.name}>
            {field.label}:
            <input
              type="number"
              min="0"
              max="9"
              value={values[field.name]}
              readOnly
            />
          </label>
        ))}
      </div>
      <div className="control-panel__buttons">
        <button onClick={decreaseCount}>&#8722;</button>
        <button onClick={increaseCount}>&#43;</button>
        <button onClick={switchField.bind(null, -1)}>&#8592;</button>
        <button onClick={switchField.bind(null, 1)}>&#8594;</button>
        <button onClick={handleOkClick}>OK</button>
      </div>
      <div className="display-screen">
        <h2>Display Screen</h2>
        {values.displayValues && values.displayValues.map((value, index) => (
          <p key={index}>{value}</p>
        ))}
      </div>
    </div>
  );
};
export default ControlPanel;