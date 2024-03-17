import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>找不到頁面</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur dicta magni eaque illo at cum a quibusdam sit, labore corrupti maxime ex aliquid quis inventore placeat eius tenetur assumenda?
      </p>
      <p>Go to the <Link to='/'>Home</Link></p>


    </div>
  )
}