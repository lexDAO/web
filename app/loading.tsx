import CircuitBoardPattern from '@/components/ui/patterns/circuit-board'

export default function Loading() {
  return (
    <div className="relative w-screen h-screen">
      <CircuitBoardPattern
        className="absolute top-0 right-0 bottom-0 left-0 w-screen h-screen bg-transparent/5 z-20"
        fill="#00FA9A"
        fillOpacity={'10%'}
      />
    </div>
  )
}
