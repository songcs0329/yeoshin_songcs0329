import styled from "styled-components"

export const IssueItemDesc = styled.div`
  position: relative;
  text-align: right;
  .issue_number {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1px;
  }
  .issue_title {
    display: block;
    margin-top: 12px;
    text-align: left;
    font-weight: 500;
    font-size: 20px;
  }
  .issue_info {
    margin-top: 24px;
    padding: 12px;
    background-color: var(--color-gray);
    text-align: left;
    font-size: 0;
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
