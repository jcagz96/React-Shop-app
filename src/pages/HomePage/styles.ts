import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 80px;

  
  .items-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    list-style: none;
  }
  
  .items-grid li {
    background: #f5f5f5;
    border: 1px solid #000;
    border-radius: 8px;
    padding: 32px 24px 16px;
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  
    text-align: center;
  
    cursor: pointer;
  }
  
  .items-grid li span {
    flex: 1;
    margin-top: 12px;
  
    display: flex;
    align-items: center;
    color: var(--title-color)
  }
  
  .items-grid li.selected {
    background: #E1FAEC;
    border: 2px solid #34CB79;
  }


`;
