import './Button.scss'
export default function Button(props) {
  return (
    <button
    onClick={props.onClick} 
    type={props.type} 
    className={`Button ${props.className}`}>
      {props.children}
    </button>
  )
}
