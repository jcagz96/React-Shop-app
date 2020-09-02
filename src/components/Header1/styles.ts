import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;

  img{
    height: 80px;
    width: 200px;
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
`;