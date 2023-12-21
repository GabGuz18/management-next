import { Tabs } from "@/components"

export const metadata = {
  title: 'Categorias',
  description: 'Categorias de productos',
}

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Tabs/>
      { children }
    </div>
  )
}