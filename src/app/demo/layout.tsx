import "./demo.css"

export const metadata = {
  title: "Demo - Website Builder Components",
  description: "Component showcase with sunny yellow theme.",
}

// Script to set sunny theme and remove dark class
const themeScript = `
  document.documentElement.setAttribute('data-theme', 'sunny');
  document.documentElement.classList.remove('dark');
`

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      {children}
    </>
  )
}
