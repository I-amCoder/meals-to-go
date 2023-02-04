import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
