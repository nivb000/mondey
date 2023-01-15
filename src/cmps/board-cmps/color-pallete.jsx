import { useDispatch } from 'react-redux'

export const ColorPallete = ({ setOpenColors, group }) => {

  const dispatch = useDispatch()

  const colors = [
    '#579bfc', '#a25ddc', '#00c875', '#7f5347', '#ffcb00', '#f00a38'
  ]

  const handleColorChange = (color) => {
    group.style.backgroundColor = color
    group.style.color = color
    console.log('color changed', group)
    setOpenColors(false)
  }

  return <section className="color-pallete">
    {colors.map(color => <div
      key={color}
      onClick={() => handleColorChange(color)}
      style={{ backgroundColor: color }}>
    </div>)}
  </section>
}
