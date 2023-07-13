import { Link } from './Link'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Esta es una página de ejemplop para crear un Reacr Router desde cero
      </p>
      <Link to="/about">It a sobre nbosotros</Link>
    </>
  )
}
