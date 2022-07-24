import styled from "styled-components"

export const IssuesListContainer = styled.section`
  padding: 80px 0;
`

export const IssuesListWrapper = styled.div`
  padding: 0 40px;
  > h3 {
    padding-bottom: 12px;
    margin-bottom: 48px;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 1px;
    border-bottom: 1px solid var(--color-gray);
  }
  .issues_list {
    padding: 0 24px;
    > li {
      display: flex;
      margin-top: 36px;
      padding: 24px 12px;
      border-top: 1px solid var(--color-gray);
      border-bottom: 1px solid var(--color-gray);
      &:first-child {
        margin-top: 0;
      }
    }
  }
`
