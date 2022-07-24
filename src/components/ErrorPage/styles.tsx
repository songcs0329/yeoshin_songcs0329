import styled from "styled-components"

export const ErrorLayer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0 40px;
  z-index: 990;
  background-color: var(--color-layer);
  > div {
    padding-top: 240px;
  }
  h3 {
    font-weight: 700;
    font-size: 30px;
    color: var(--color-red);
    letter-spacing: 2px;
  }
`
