import styled, { keyframes } from "styled-components"

const EllipsisOne = keyframes`
	0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const EllipsisTwo = keyframes`
	0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`

const EllipsisThree = keyframes`
	0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

export const LoadingEllipsis = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0 40px;
  z-index: 700;
  background-color: var(--color-layer);
  > div {
    width: 100%;
    height: 12px;
    position: relative;
    padding-top: 240px;
  }
  .dot {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--color-white);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    &:nth-child(1) {
      left: 8px;
      animation: ${EllipsisOne} 0.6s infinite;
    }
    &:nth-child(2) {
      left: 8px;
      animation: ${EllipsisTwo} 0.6s infinite;
    }
    &:nth-child(3) {
      left: 32px;
      animation: ${EllipsisTwo} 0.6s infinite;
    }
    &:nth-child(4) {
      left: 56px;
      animation: ${EllipsisThree} 0.6s infinite;
    }
  }
`
