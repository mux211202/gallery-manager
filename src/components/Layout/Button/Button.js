import './Button.scss'
export default function Button(props) {
  return (
    <button className={`Button ${props.className}`}>{props.children}</button>
  )
}
