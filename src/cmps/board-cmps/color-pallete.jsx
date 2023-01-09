import { updateGroup } from '../../store/actions/group.action'
import { useDispatch } from 'react-redux'

export const ColorPallete = ({ setOpenColors, group, boardUpdate }) => {

  const dispatch = useDispatch()

  const colors = [
    '#579bfc', '#a25ddc', '#00c875', '#7f5347', '#ffcb00', '#f00a38'
  ]

  const handleColorChange = (color) => {
    group.style.backgroundColor = color
    group.style.color = color
    dispatch(updateGroup(group))
    boardUpdate()
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
