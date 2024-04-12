import { useEffect, useState } from 'react'
import './App.css'
import styled from "styled-components"
import SearchResult from './components/Searchraasult/SearchResult'

export const BASE_URL = "http://localhost:9000"

function App() {
  const [data, setData] = useState(null)
  const [filterdData, setFilterdData] = useState(null)
  const [selectedBtn, setSelectedBtn] = useState("all")

  useEffect(() => {
    const fetchFoodData = async () => {

      try {
        const response = await fetch(BASE_URL)
        const json = await response.json()


        setData(json)
        setFilterdData(json)
      }
      catch (error) {
        console(leoo)
      }
    }
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value

    if (searchValue === "") {
      setFilterdData(null)
    }
    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()))
    setFilterdData(filter)
  }


  const filtererFood = (type) => {
    if (type === "all") {
      setFilterdData(data)
      setSelectedBtn("all")
      return
    }
    const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()))
    setFilterdData(filter)
    setSelectedBtn(type)
  }
  const filterBtns = [

    {
      name: "All",
      type: "all"
    },
    {
      name: "Breakfast",
      type: "Breakfast"
    },
    {
      name: "Lunch",
      type: "Lunch"
    },
    {
      name: "Dinner",
      type: "Dinner"
    }
  ]
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="" />
          </div>
          <div className="search">
            <input onChange={searchFood} type="text" placeholder='search Food...' />
          </div>
        </TopContainer>
        <FilterContainer>
          {
            filterBtns.map((v,i)=>
              <Button key={i} onClick={() => filtererFood(v.type)}>{v.name}</Button>
            )
          }
          
        </FilterContainer>


      </Container>
      <SearchResult data={filterdData} />

    </>
  )
}

export default App
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const TopContainer = styled.section`
min-height:140px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px;
.search input{
  background-color: transparent;
  border: 1px solid red;
  color: white;
  border-radius: 5px;
  outline: none;
  height: 40px;
  font-size: 16px;
padding: 0 10px;
transition:0.5s ease-in-out;

}
.search input:hover{
  transform: rotate(360deg);
}

.logo img{
transition:0.5s ease-in-out;
}
.logo img:hover{
transform: rotate(360deg);
}
@media(0< width < 600px ){
flex-direction: column;}
min-height:90px;
`
const FilterContainer = styled.section`
display: flex;
justify-content:center;
gap: 12px;
padding-bottom: 40px;
`

export const Button = styled.button`
background: #ff4343;
border-radius: 5px;
padding: 10px 17px;
border: none;
color: white;
cursor: pointer;
transition: 0.3s ease-in-out;
&:hover{
background-color:black;
color: red;
transform:rotatex(360deg);
}
`

