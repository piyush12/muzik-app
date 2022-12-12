import { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface IVolumeRange {
  min?: number;
  max?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: number;
}

const VolumeRange: FC<IVolumeRange> = ({
  min = 0,
  max = 100,
  onChange,
  value,
}) => {
  return (
    <VolumeRangeHolder>
      <input
        type='range'
        min={min}
        max={max}
        onChange={onChange}
        value={value}
      />
    </VolumeRangeHolder>
  );
};

export default VolumeRange;

const VolumeRangeHolder = styled.div`
  line-height: 0;

  input[type="range"] {
    -webkit-appearance: none;
    height: 7px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background-image: linear-gradient(
      ${(props) => props.theme.primary},
      ${(props) => props.theme.primary}
    );
    background-size: 30% 100%;
    background-repeat: no-repeat;
  }

  /* Input Thumb */
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${(props) => props.theme.primary};
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${(props) => props.theme.primary};
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  input[type="range"]::-ms-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${(props) => props.theme.primary};
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  input[type="range"]::-webkit-slider-thumb:hover {
    background: ${(props) => props.theme.primary};
  }

  input[type="range"]::-moz-range-thumb:hover {
    background: ${(props) => props.theme.primary};
  }

  input[type="range"]::-ms-thumb:hover {
    background: ${(props) => props.theme.primary};
  }

  /* Input Track */
  input[type="range"]::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  input[type="range"]::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  input[type="range"]::-ms-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;
