export const ColorPallete = ({ setOpenColors, group, saveGroupChanges }) => {

  const colors = [
    '#579bfc', '#00c875', '#7f5347', '#ffcb00', '#f00a38',
    '#009688', '#e74c3c', '#3498db', '#ff9800',
    '#9b59b6', '#5a5a5a']

  const handleColorChange = (color) => {
    group.style.backgroundColor = color
    group.style.color = color
    saveGroupChanges(group)
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
