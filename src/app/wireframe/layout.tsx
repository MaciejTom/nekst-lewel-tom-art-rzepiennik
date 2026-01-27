import "./wireframe.css"

export const metadata = {
  title: "Wireframe — Component Templates",
}

export default function WireframeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
