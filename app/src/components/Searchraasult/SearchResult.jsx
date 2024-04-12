import React from 'react'
import styled from "styled-components"
import { BASE_URL, Button, Container } from '../../App'

const SearchResult = ({data}) => {
  return (
    <div><FoodCardContainer>
   <Container>
   <FoodCards>
  {data?.map(({name,price,text,image,type})=>(
  <FoodCard key={name}>
    <div className='food-image'>
      <img src={BASE_URL + image } alt="" />
    </div>
    <div className="food-info">
      <div className="info">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
      <Button>${price.toFixed(2)}</Button>
    </div>
  </FoodCard>
  )
  )}
    </FoodCards>
   </Container>
  </FoodCardContainer></div>
  )
}

export default SearchResult
const FoodCardContainer = styled.section`
background-image: url("/bg.png");
min-height: calc(100vh - 210px);
background-repeat: no-repeat;
background-size: cover;

`

const FoodCards = styled.div`
display: flex;
flex-wrap: wrap;
row-gap:32px ;
column-gap: 20px;
justify-content:center;
align-items: center;
padding-top: 80px;
`
const FoodCard = styled.div`
display: flex;

backdrop-filter: blur(8px);
width: 340px;
height: 167px;
border-radius: 10px;
border: 1px solid red;
padding: 8px;
.food-info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 align-items: end;
 h3{
  margin-top: 8px;
  font-size: 16px;
  font-weight: 580;
 }
 p{
  margin-top: 4px;
  font-size: 12px;
 }
 button{
  font-size: 12px;

 }
}


`