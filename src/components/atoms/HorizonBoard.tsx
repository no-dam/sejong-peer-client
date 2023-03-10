import { ReactNode } from "react";
import styled from "styled-components";

export default function HorizonBoard({
  itemComponents,
  itemIndex,
  itemWidth = 356,
}: {
  itemComponents: ReactNode[];
  itemIndex: number;
  itemWidth?: number;
}) {
  return (
    <>
      <StyledContainer itemWidth={itemWidth}>
        <StyledWrapper transitionX={itemIndex * itemWidth}>
          {itemComponents.map((component, i) => (
            <StyledQuestionCardWrapper key={(i + 100) * 100}>
              {component}
            </StyledQuestionCardWrapper>
          ))}
        </StyledWrapper>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div<{ itemWidth: number }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: ${({ itemWidth }: { itemWidth: number }) => itemWidth}px;
  margin: 0 auto;
  overflow: hidden;
`;

const StyledWrapper = styled.div<{ transitionX: number }>`
  display: flex;
  align-items: center;
  width: 356px;
  transform: translate(
    ${({ transitionX }: { transitionX: number }) => -transitionX}px
  );
  transition: transform 0.5s;
  transition-delay: 0.1s;
`;

const StyledQuestionCardWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
