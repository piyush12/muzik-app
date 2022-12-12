import Avatar from "@components/Avatar";
import { PlayIcon } from "@components/Icons";
import ListItem from "@components/List/ListItem";
import HSlider from "@features/HSlider";
import { Charts } from "@store/slices/Charts";
import React from "react";
import styled from "styled-components";

interface Props<T> {
  playlist: T[];
  title: string;
  onClick?: (item: T) => void;
}

const SliderContainer = <T extends Charts>({
  playlist,
  title,
  onClick,
}: Props<T>): React.ReactElement => {
  return (
    <SliderContainerStyles>
      <h2>{title}</h2>
      <HSlider
        items={playlist}
        slideList={(items) =>
          items && Array.isArray(items) ? (
            items.map((item) => {
              return (
                <SliderBox key={item.key}>
                  <ListItem
                    primary={item.title}
                    secondary={item.subtitle}
                    direction='column'
                  >
                    <>
                      <Avatar
                        src={
                          item.images?.background ||
                          "https://via.placeholder.com/150"
                        }
                        sx={{
                          width: "220px",
                          height: "220px",
                        }}
                        variant='circle'
                        hoverEffect={true}
                        hoverContent={
                          <PlayButton onClick={() => onClick!(item)}>
                            <PlayIcon />
                          </PlayButton>
                        }
                      />
                    </>
                  </ListItem>
                </SliderBox>
              );
            })
          ) : (
            <h5>{items}</h5>
          )
        }
      />
    </SliderContainerStyles>
  );
};

export default SliderContainer;

const SliderContainerStyles = styled.div`
  padding: 0 20px;
  margin-bottom: 30px;
  margin-top: 30px;

  h2 {
    font-size: 22px;
  }
`;

const SliderBox = styled.div`
  width: 250px;
  flex-shrink: 0;
  position: relative;

  .item-text {
    text-align: center;

    h3 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
  }

  .itemHover {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 3;
    background-image: linear-gradient(0deg, #0b0d0f, rgba(11, 13, 15, 0.35));
    display: none;
  }
  &:hover {
    .itemHover {
      display: block;
    }
  }
`;

const PlayButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
`;
