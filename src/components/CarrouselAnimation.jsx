import React, { useEffect, useState } from 'react';
import styled, { keyframes }from 'styled-components';

const Body = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  height: ${props => props.height};
  justify-content: center;
  width: 100%;
`;

const keyframeLeft = (props) => (keyframes`
${(() => {
  const { index, quantity, size, length } = props;
  if (index < quantity) {
  return `
    0% {
      ${(() => {if (index == 1) {
        return `transform: scale(${(quantity -index) * size})  translateX(0);
        font-weight: 500;
        opacity: 1;
        z-index: ${length - index};`;
      } else {
        return `transform: scale(${(quantity -index) * size}  translateX(${(index - 1) * -50}px);
        opacity: ${index * 0.05};
        z-index: ${length - index};`;
      }})()}
    }
    100% {
      transform: scale(${((quantity - index) - 1) * size})  translateX(${index * -50}px);
      opacity: ${index * 0.05};
       z-index: ${length - index};
    }`
  } else if (props.index == (props.length - 1)) {
  return `
    0% {
      transform: scale((${(quantity - index + 1) * size})  translateX(${(quantity - 1) * -43}px);
    }
    100% {
      transform: scale(0)  translateX(0);
    }
  `;
} else {
  return  `
    0% {
      transform: scale(0)  translateX(0);
    }
    100% {
      transform: scale(10)  translateX(0);
    }
`};
})()
}
`);

const keyframeRight = (props) => keyframes`
${(() => {
  const { index, quantity, size, length } = props;
  if (index < quantity) {
  return `
    0% {
      ${(() => {
        if (index == 1) {
        return `
          transform: scale(${(quantity - index - 1) * size})  translateX(50px);
          opacity: ${index * 0.05};
          z-index: ${length - index};`;
        } else {
          if (index == (quantity - 1)) {
            return `
              transform: scale(${(quantity - index - 1) * size})  translateX(${(index - 1) * -50}px);
              opacity: ${index * 0.05};
              z-index: ${length - index};`;
          } else {
            return `
              transform: scale(${(quantity - index - 1) * size})  translateX(${index * 50}px);
              opacity: ${index * 0.05};
              z-index: ${length - index};`;
          }
        }
      })()}
    }
    100% {
      ${(() => {
        if (index == 1) { 
        return `
          font-weight: 500;
          opacity: 1;
          transform: scale(${(quantity - index) * size})  translateX(${(index - 1) * 50}px);
          z-index: ${length - index};`;
      } else {
        return `
          opacity: (${index * 0.05});
          transform: scale(${(quantity - index) * size})  translateX(${(index - 1) * 50}px);
          z-index: ${length - index};`;
      }})()}
    }`
  } else if (index == (length - 1)) {
  return `
    0% {
      transform: scale((${(quantity - index + 1) * size})  translateX(${(quantity - 1) * -43}px);
    }
    100% {
      transform: scale(0)  translateX(0);
    }
  `;
  } else {
    return  `
      0% {
        transform: scale(10)  translateX(0);
      }
      100% {
        transform: scale(0)  translateX(0);
      }`
    }
  })()}
`;

const keyframePLeft = (props) => (keyframes`
@keyframes p-Effect-left-#${(props) => props.index} {
  0% {
    ${(props) => {
      if (props.index == 1) {
        return 'opacity: 1;';
      } else {
        return 'opacity: 0;';
      }
    }
  }
  100% {
    opacity: 0;
  }
}

@keyframes p-Effect-right-#${(props) => props.index} {
  0% {
    opacity: 0;
  }
  100% {
    ${(props) => {
      if (props.index == 1) {
        return 'opacity: 1;';
      } else {
        return 'opacity: 0;';
      }
    }}
    }
  }
`);

const CarouselItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 50%;
  height: 20px;
  width: 200px;
  animation: ${(props) => props.className.includes('right') ? keyframeRight(props) : keyframeLeft(props)} 1s infinite both;
  &.shadow-left-#${(props) => props.index} {
    animation: ${(props) => keyframeLeft(props)} 1s infinite both;
  }
  &.shadow-right-#${(props) => props.index} {
    animation: ${(props) => keyframeRight(props)} 1s infinite both;
  }

`;
 

export default function CarouselAnimation({ data }) {
  const [indexG, setIndex] = useState(0);
  const [object, setObject] = useState({});
  let indexGlobal = 0;

  const quantifyShow = data.length;
  useEffect(
    () => {
      const id = setInterval(() => {
        if(indexGlobal >= data.length - 1) {
          indexGlobal = 0;
        } else {
          indexGlobal += 1;
        }
        setIndex(indexGlobal);
      }, 1500);
      return () => {
        clearInterval(id);
      };
    },
    [] // empty dependency array
  );

  useEffect(() => {
    const newObject = data.reduce((acc, _value, index, array) => {
      return {...acc, [index]: (indexG + index >= array.length ? (indexG + index) - (array.length) : indexG + index)};
  } ,{});
  setObject(newObject);
  }, [indexG]);

  const classesAnimation = {};

  for(let i = 0; i < quantifyShow; i += 1) {
    classesAnimation[i] = (i <= (quantifyShow / 2)
      ? `shadow-right-${Math.floor(quantifyShow / 2) - i + 1}`
      : `shadow-left-${i - Math.floor(quantifyShow / 2)}`
    )
  }

  const carouselShowing = (arr) => {
    return arr.map((children, index) => {
      const classActual = classesAnimation[object[index]] || 'shadow';
      return (
        <CarouselItem
          className={`carousel-item ${classActual}`}
          key={ index }
          index={ (index + 1) }
          size={ 0.50 }
          length={ arr.length }
          quantity={ arr.length / 2 }
        >
          {children}
        </CarouselItem>
      );
    });
  };

  return <Body className="carousel-animation-body" height={'200px'}>{carouselShowing(data)}</Body>
};
