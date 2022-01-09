import styled from "styled-components";
import Button from "../Button/Button";

export interface ConfirmProps {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function Confirm({ title, onCancel, onConfirm }: ConfirmProps) {
  return (
    <ConfirmWrapper>
      <ConfirmInnerContent>
        <ConfirmMessages>
          <ConfirmTitle>{title}</ConfirmTitle>
        </ConfirmMessages>
        <ConfirmButtons>
          <Button variant="danger" label="Não" onClick={onCancel} />
          <Button variant="primary" label="Sim" onClick={onConfirm} />
        </ConfirmButtons>
      </ConfirmInnerContent>
    </ConfirmWrapper>
  );
}

const ConfirmWrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f8fa;
  width: 373px;
`;

const ConfirmInnerContent = styled.div`
  /*   display: flex; */
  /*   gap: 24px;
  color: "#274060"; */
`;

export const ConfirmMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ConfirmButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;

export const ConfirmTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`;
