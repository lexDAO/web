import React, { forwardRef } from 'react'

interface AsciiArtProps extends React.HTMLAttributes<HTMLElement> {
  children: string
}

const AsciiArt = forwardRef<HTMLPreElement, AsciiArtProps>(({ children, ...props }, ref) => {
  return (
    <pre ref={ref} {...props}>
      {children}
    </pre>
  )
})

export { AsciiArt }
