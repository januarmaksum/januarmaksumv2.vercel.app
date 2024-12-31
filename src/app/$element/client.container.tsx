interface I_Props {
    children: React.ReactNode
}

export default function CE_Container({ children }: I_Props) {
  return (
    <div className="lg:grid lg:grid-cols-8">
        {children}
    </div>
  )
}
