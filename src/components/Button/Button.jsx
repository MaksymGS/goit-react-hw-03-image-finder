import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return <StyledButton onClick={() => onLoadMore()}>Load more</StyledButton>;
};
