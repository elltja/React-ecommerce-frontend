import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  gap: 20px;
`;

export const CategoryTitle = styled.h2`
  font-size: 1.2rem;
`;
