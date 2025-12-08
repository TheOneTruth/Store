// Re-export the existing home page component so / serves the home content
import HomePage from '../App/home/page'

export const metadata = HomePage.metadata || {
  title: 'Inicio',
  description: 'Página principal'
}

export default function Page(){
  return <HomePage />
}
