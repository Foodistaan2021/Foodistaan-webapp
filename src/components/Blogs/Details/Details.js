import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import spicyburger from '../assets/spicyburger.png'
import BlogInfo from '../BlogInfo/BlogInfo'
import Detailcard from '../DetailCards/Detailcard'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import { database } from '../../../firebase'
import "./details.css"



const Details = () => {


  return (
    <div className="details_Container">
        <div className="detail_image">
            <img src={spicyburger} alt="" />
            
        </div>
        <div className="bottom_cards">
        <Detailcard blog={blog}/>
      </div>
    </div>
  )
}

export default Details