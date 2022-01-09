import styled from "styled-components";

export const Wrapper = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  color: #274060;

  span.Description {
    font-size: 12px;
    text-transform: lowercase;
  }

  div {
    color: ${(p) => p.color};
    span.Currency {
      font-size: 18px;
    }
    span.Value {
      font-size: 18px;
      font-weight: 800;
    }
  }
`;
