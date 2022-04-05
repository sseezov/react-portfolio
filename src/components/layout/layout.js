import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/sidebar'
import './layout.scss'

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;body&gt;
          <br />
          <span span className="bottom-tag-html">
            &lt;/html&gt;
          </span>
        </span>
      </div>
    </div>
  )
}

export default Layout
