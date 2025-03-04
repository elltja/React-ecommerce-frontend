import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.h1`
  font-size: 26px;
  margin: 0;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  gap: 20px;
`;
