import styled from "styled-components";
import Button from "../../components/ui/Button";

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100vw;
  gap: 75px;
  padding: 5vw 2vw;
`;

export const ImageWrapper = styled.div`
  background-color: #ebebeb;
  max-height: 500px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Image = styled.img`
  background-color: #ebebeb;
  height: 100%;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 40vw;
`;

export const Title = styled.h1`
  margin: 0;
  width: fit-content;
`;

export const StarIcon = styled.img`
  width: 20px;
`;

export const Description = styled.p`
  margin: 0;
  line-height: 160%;
  font-weight: 500;
  color: #555555;
`;

export const Price = styled.h2`
  margin: 0;
`;

export const Divider = styled.hr`
  background-color: #ebebeb;
  width: 100%;
  border: none;
  height: 1px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  width: fit-content;
  margin: 25px 0;
`;

export const Table = styled.div`
  width: 200px;
`;

export const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TableValue = styled.p`
  width: 50px;
  color: #555555;
  margin: 7.5px;
`;

export const TableTag = styled.p`
  font-weight: 600;
  margin: 7.5px;
`;

export const StyledButton = styled(Button)`
  padding: 15px;
  width: 250px;
`;
