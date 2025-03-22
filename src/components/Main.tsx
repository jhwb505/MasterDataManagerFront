type Props = {
  children: React.ReactNode
}

const Main = ({children}:Props) => {
  return (
    <main className="px-5 py-3">{children}</main>
  )
}

export default Main