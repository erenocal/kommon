import React, { useState, useEffect, useCallback } from 'react';
import Input from "@/components/ui/input";

interface RangeSliderProps {
  min: number;
  max: number;
  onChange: (range: [number, number]) => void;
  initialValues?: [number, number];
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, onChange, initialValues = [min, max] }) => {
  const [lowValue, setLowValue] = useState(initialValues[0].toString());
  const [highValue, setHighValue] = useState(initialValues[1].toString());

  const updateValues = useCallback(() => {
    const lowNum = Math.max(min, Math.min(parseInt(lowValue) || min, parseInt(highValue) - 1 || max - 1));
    const highNum = Math.min(max, Math.max(parseInt(highValue) || max, parseInt(lowValue) + 1 || min + 1));
    if (lowNum !== parseInt(lowValue) || highNum !== parseInt(highValue)) {
      onChange([lowNum, highNum]);
    }
  }, [lowValue, highValue, min, max, onChange]);

  useEffect(() => {
    updateValues();
  }, [updateValues]);

  const handleLowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLowValue(e.target.value);
  };

  const handleHighChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHighValue(e.target.value);
  };

  const handleLowBlur = () => {
    const value = Math.max(min, Math.min(parseInt(lowValue) || min, parseInt(highValue) - 1 || max - 1));
    setLowValue(value.toString());
    updateValues();
  };

  const handleHighBlur = () => {
    const value = Math.min(max, Math.max(parseInt(highValue) || max, parseInt(lowValue) + 1 || min + 1));
    setHighValue(value.toString());
    updateValues();
  };

  return (
    <div className="flex items-center space-x-4">
      <Input
        type="number"
        min={min}
        max={max}
        value={lowValue}
        onChange={handleLowChange}
        onBlur={handleLowBlur}
        className="w-20"
      />
      <span>to</span>
      <Input
        type="number"
        min={min}
        max={max}
        value={highValue}
        onChange={handleHighChange}
        onBlur={handleHighBlur}
        className="w-20"
      />
    </div>
  );
};

export default RangeSlider;