import styled from "styled-components";
import Button from "../../components/ui/Button";

export const Container = styled.div`
  width: 100vw;
  padding: 7.5vh 0;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const Table = styled.div``;

export const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TableValue = styled.p`
  width: 50px;
`;

export const TableTag = styled.p`
  font-weight: 600;
`;

export const StyledButton = styled(Button)`
  padding: 15px;
  margin: 10px 0;
  width: 250px;
`;
