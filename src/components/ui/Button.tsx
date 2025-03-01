import styled from "styled-components";

const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  border: none;

  ${({ $primary }) =>
    $primary
      ? `
        background-color: var(--primary);
        color: var(--background);

        &:hover {
          background-color: var(--primary-hover);
        }
`
      : `
        background-color: var(--background);
        color: var(--foreground);
        outline: 1px solid #bdbdbd;
        outline-offset: -1px;

        &:hover {
          background-color: #d3d3d3;
        }
`}
`;

export default Button;
