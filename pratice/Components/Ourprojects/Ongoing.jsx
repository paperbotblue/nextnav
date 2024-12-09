import React,{useState} from 'react'
import Templete from './Templete'
import CardsData from '../admin/CardsData'

const Ongoing = () => {

  const [data ,setData] = useState(CardsData[0].cards)

  return (
    <div>
       <Templete data={data} name='Ongoing Projects'/>
    </div>
  )
}

export default Ongoing
