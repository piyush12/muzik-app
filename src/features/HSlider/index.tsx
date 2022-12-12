import { LeftIcon, RightIcon } from "@components/Icons";
import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ButtonStyle } from "styles/globalStyledComponents";

interface IProps<T> {
  items: T[];
  slideList: (item: T[]) => React.ReactElement[] | React.ReactElement;
}

const HSlider = <T extends unknown>({
  items,
  slideList,
}: IProps<T>): React.ReactElement => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [totalSlide, setTotalSlide] = useState<number>(0);

  useEffect(() => {
    if (sliderRef.current) {
      let slide = sliderRef.current.clientWidth * sliderIndex;
      if (slide < sliderRef.current.scrollWidth) {
        sliderRef.current.scrollLeft = slide;
      }
    }
  }, [sliderIndex]);

  useEffect(() => {
    if (sliderRef.current) {
      const slides = Math.round(
        sliderRef.current.scrollWidth / sliderRef.current.clientWidth
      );
      setTotalSlide(() => slides);
    }
  }, []);

  const handleNext = () => {
    if (sliderRef.current) {
      setSliderIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      setSliderIndex((prev) => prev - 1);
    }
  };

  return (
    <SliderWrapper>
      {Array.isArray(items) && (
        <ButtonStyle
          onClick={handlePrev}
          disabled={sliderIndex === 0}
          style={{
            position: "absolute",
            left: 0,
            zIndex: 4,
          }}
        >
          <LeftIcon width={30} height={30} />
        </ButtonStyle>
      )}

      <HSliderContainer ref={sliderRef}>{slideList(items)}</HSliderContainer>
      {Array.isArray(items) && (
        <ButtonStyle
          onClick={handleNext}
          disabled={sliderIndex === totalSlide}
          style={{
            position: "absolute",
            right: 0,
            zIndex: 4,
          }}
        >
          <RightIcon width={30} height={30} />
        </ButtonStyle>
      )}
    </SliderWrapper>
  );
};

export default HSlider;

const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HSliderContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;
