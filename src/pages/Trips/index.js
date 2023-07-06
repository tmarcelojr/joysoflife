import { Outlet, Link } from "react-router-dom";

export default function Trips() {
  return (
    <>
    <Link to="sequoia">Sequoia</Link>
      <Outlet />
    </>
  )
}
