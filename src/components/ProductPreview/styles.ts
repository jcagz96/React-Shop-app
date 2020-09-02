import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  img{
    height: 240px;
    width: 220px;
    margin-bottom: 40px;
  }

  .options{
    display: flex;
    justify-content: space-evenly;
  }

  .options a{
    margin:50px;
    text-decoration: none;
  }

  .rightInfos{
    display: flex;
    
  }

  .infos{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
  }

  a{
    color: ${(props) => props.theme.colors.primary};
  }
`;
