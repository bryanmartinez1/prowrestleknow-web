import Button from '../Buttons/Button'
import './optionsSlider.css'
import left_chevron from '../../assests/chevron-left.svg'
import right_chevron from '../../assests/chevron-right.svg'

type OptionsSliderProps = {
    options: string[]
}

function OptionsSlider({options}: OptionsSliderProps) {
  const buttonStyle: React.CSSProperties = {
    fontSize: "14px",
    fontFamily: "Lexend",
    margin: 0,
    background: "none",
    border: "none",
    width:'100px'
  };

  return (
    <div className='optionsSlider'>{options.map((option, index) => {
        return <Button key = {index} text = {option} style={buttonStyle}/>
    })}</div>
  )
}

export default OptionsSlider