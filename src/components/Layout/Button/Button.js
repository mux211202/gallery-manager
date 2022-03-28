import './Button.scss'
export default function Button(props) {
  return (
    <button type={props.type} className={`Button ${props.className}`}>{props.children}</button>
  )
}
