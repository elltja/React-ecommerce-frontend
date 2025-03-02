import styled from "styled-components";
import Button from "../ui/Button";

export const Container = styled.div`
  display: flex;
  gap: 15px;
  width: 400px;
  max-width: 400px;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 15px;
  border: 1px solid var(--border);
  margin: 10px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  background-color: #ebebeb;
  height: 150px;
  min-width: 150px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Image = styled.img`
  background-color: #ebebeb;
  height: 100%;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
`;

export const Title = styled.h2`
  font-size: 0.95rem;
  margin: 0;
  color: var(--foreground);
`;

export const Description = styled.p`
  color: #444444;
  font-size: 0.9rem;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const Price = styled.p`
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  align-items: center;
`;
export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CounterBtn = styled(Button)`
  padding-top: 2px;
  padding-bottom: 2px;
  height: fit-content;
`;

export const DeleteButton = styled(Button)`
  height: 50px;
  width: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: red;
`;

export const TrashIcon = styled.img`
  height: 20px;
  width: 20px;
  object-fit: contain;
  color: red;
  margin-left: 15px;
`;
