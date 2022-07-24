import styled from "styled-components"

export const IssueItemUser = styled.section`
  flex-basis: 15%;
  .img {
    overflow: hidden;
    display: flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-gray);
    border-radius: 50%;
    .none {
      display: block;
      width: 14px;
      height: 14px;
      position: relative;
      transform: rotate(45deg);
      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        background-color: var(--color-white);
        transform: translate(-50%, -50%);
      }
      &:before {
        width: 100%;
        height: 1px;
      }
      &:after {
        width: 1px;
        height: 100%;
      }
    }
  }
  .user_name {
    display: block;
    margin-top: 12px;
    font-weight: 500;
    font-size: 16px;
  }
`

export const IssueItemBalloon = styled.section`
  position: relative;
  flex-basis: 85%;
  padding-left: 24px;
  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 12px;
    border-bottom: 8px solid transparent;
    border-top: 8px solid transparent;
    border-right: 12px solid var(--color-gray);
    border-left: 12px solid transparent;
  }
  > div {
    /* padding-bottom: 16px; */
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    > * {
      display: block;
      padding-left: 16px;
      padding-right: 16px;
      margin-bottom: 24px;
    }
  }
  .issue_number {
    padding-top: 12px;
    padding-bottom: 12px;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 1px;
    background-color: var(--color-gray);
    color: var(--color-white);
  }
  .issue_title {
    font-weight: 500;
    font-size: 20px;
  }
  .issue_info {
    > div {
      display: inline-block;
      vertical-align: middle;
      margin-left: 12px;
      * {
        vertical-align: middle;
        line-height: 1;
        font-size: 16px;
      }
      &:first-child {
        margin-left: 0;
      }
      span {
        margin-left: 8px;
        letter-spacing: 0;
      }
    }
  }
`
