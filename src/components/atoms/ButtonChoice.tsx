import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { color } from "../../styles/palette";

export default function ButtonChoice({
  value,
  onClick,
  disabled,
  isSelected,
  title,
  describe,
  type = "button",
}: {
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  isSelected?: boolean;
  title?: string;
  describe?: ReactNode;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <>
      <StyledButton
        onClick={onClick}
        value={value}
        disabled={disabled}
        isSelected={isSelected}
        type={type}
      >
        {title}
        {describe}
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  font-size: 16px;
  user-select: none;
  width: 160px;
  height: 160px;
  margin: 6px;
  padding: 14px;
  border: 0;
  border-radius: 10px;

  box-shadow: 1px 1px 3px gray;
  ${({ isSelected }: { isSelected?: boolean }) =>
    isSelected
      ? css`
          background-color: ${color.brown};
          color: white;
        `
      : css`
          background-color: white;
        `}
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background-color: ${color.gray6};
    cursor: default;
  }
  & > div {
    font-weight: normal;
    font-size: 12px;
    color: ${({ isSelected }: { isSelected?: boolean }) =>
      isSelected ? color.gray6 : color.gray3};
    margin-top: 4px;
  }
  & span {
    color: ${({ isSelected }: { isSelected?: boolean }) =>
      isSelected ? color.gray5 : color.gray2};
    font-weight: bold;
  }
`;
