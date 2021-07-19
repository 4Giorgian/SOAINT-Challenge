import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 300px;
  border-radius: 4px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 15px;
`
export const Img = styled.img`
  width: 100px;
  height: 100px;
`
