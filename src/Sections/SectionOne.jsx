import Formulario from "../Form/Form";
import eth_lemon from '../assets/eth_lemon.avif';
import btc_lemon from '../assets/btc_lemon.avif';
import lemon_bubble from '../assets/lemon_bubble.avif';
import lemon_bubble2 from '../assets/lemon_bubble2.avif';
import './SectionOne.css';


export default function SectionOne() {
    return (
        <div className='page1'>
          <h1>REGISTER</h1>
          <Formulario/>
          <div className='pngsContainer'>
            <img src={eth_lemon} alt='eth_lemon' id='bub1'/>
            <img src={btc_lemon} alt='btc_lemon' id='bub2'/>
            <img src={lemon_bubble} alt='lemon_bubble' id='bub3'/>
            <img src={lemon_bubble2} alt='lemon_bubble2' id='bub4'/>
            <img src={btc_lemon} alt='btc_lemon' id='bub5'/>
            <img src={eth_lemon} alt='eth_lemon' id='bub6'/>
            <img src={lemon_bubble} alt='lemon_bubble' id='bub7'/>
            <img src={lemon_bubble2} alt='lemon_bubble2' id='bub8'/>
            <img src={lemon_bubble} alt='lemon_bubble' id='bub9'/>
            <img src={lemon_bubble2} alt='lemon_bubble2' id='bub10'/>
          </div>
        </div>  
    )
}