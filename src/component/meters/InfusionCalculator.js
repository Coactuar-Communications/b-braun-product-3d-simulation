import React, { useState, useEffect } from 'react';
const InfusionCalculator = () => {
  const [infusionRate, setInfusionRate] = useState('');
  const [volume, setVolume] = useState('');
  const [time, setTime] = useState('');
  useEffect(() => {
    if (infusionRate !== '' && volume !== '') {
      const calculatedTime = volume / infusionRate;
      setTime(formatTime(calculatedTime));
    }
  }, [infusionRate, volume]);
  const formatTime = (timeInHours) => {
    const hours = Math.floor(timeInHours);
    const minutes = Math.round((timeInHours - hours) * 60);
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} h:min`;
  };
  return (
    <div>
      <label>
        Infusion Rate (ml/h):
        <input
          type="number"
          value={infusionRate}
          onChange={(e) => {
            setInfusionRate(parseFloat(e.target.value));
            setTime(''); // Reset the time when infusion rate is changed
          }}
        />
      </label>
      <br />
      <label>
        Volume (ml):
        <input
          type="number"
          value={volume}
          onChange={(e) => {
            setVolume(parseFloat(e.target.value));
            setTime(''); // Reset the time when volume is changed
          }}
        />
      </label>
      <br />
      <p>Calculated Infusion Rate: {infusionRate} ml/h</p>
      <p>Calculated Volume: {volume} ml</p>
      <p>Calculated Time: {time === '' ? 'N/A' : time}</p>
    </div>
  );
};
export default InfusionCalculator;