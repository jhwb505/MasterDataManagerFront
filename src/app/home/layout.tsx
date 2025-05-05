

export default function Layout({
  children,
  header,
  side
}: Readonly<{
   children: React.ReactNode,
   header: React.ReactNode,
   side: React.ReactNode
  }>) {
  return (
    <div className="h-screen text-[#0e1f2f]">
      <header className="fixed top-0 left-0 right-0 h-12 bg-[#ffffff]/50 z-50">{header}</header>
      <aside className="fixed top-12 left-0 w-16 h-[calc(100vh-3rem)] bg-[#ffffff] z-40" style={{ boxShadow: '4px 0 6px -2px rgba(0, 0, 0, 0.1)' }}>{side}</aside>
      <main className="fixed left-16 top-12 bottom-1 mb-1 h-[calc(100vh-3rem)] w-[calc(100vw-4rem)] bg-[#ebf2f8] overflow-auto p-2">{children}</main>
    </div>
  )
}