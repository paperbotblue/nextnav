import React,{useState} from 'react'
import Templete from './Templete'
import CardsData from '../admin/CardsData'

const Completed = () => {
  const [data ,setData] = useState(CardsData[1].cards)

  return (
    <div>
      <Templete data={data} name='Completed Projects'/>
    </div>
  )
}

export default Completed
