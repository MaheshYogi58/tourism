import React from 'react'
import SeasonHighlights from './SeasonHighlights'
import { Festival, Season } from '../../utils/ToDo'
import EventsFestivals from './Events & Festivals'

const Dashboard = () => {
  return (
    <div>
  <SeasonHighlights title={"SeasonHighlights"} data={Season}/>
  <EventsFestivals title={"Events & Festivals"} data={Festival}/>
    </div>
  )
}

export default Dashboard
