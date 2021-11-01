import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const TopSmall = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
`;

const TopMedium = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;

const TopLarge = styled.View`
  margin-top: ${(props) => props.theme.space[4]};
`;

const LeftSmall = styled.View`
  margin-left: ${(props) => props.theme.space[2]};
`;

const LeftMedium = styled.View`
  margin-left: ${(props) => props.theme.space[3]};
`;

const LeftLarge = styled.View`
  margin-left: ${(props) => props.theme.space[4]};
`;
export const Spacer = ({ variant }) => {
  if (variant === "top.medium") {
    return <TopMedium />;
  }
  if (variant === "top.large") {
    return <TopLarge />;
  }
  if (variant === "left.small") {
    return <LeftSmall />;
  }
  if (variant === "left.medium") {
    return <LeftMedium />;
  }
  if (variant === "left.large") {
    return <LeftLarge />;
  }
  return <TopSmall />;
};
