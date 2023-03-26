import React from 'react'
import Link from 'next/link'
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Icons } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
]

export function Header() {
  return (
    <div className="w-full align-center">
      <NavigationMenu
        className={cn(
          'hidden md:flex w-fit fixed top-10 right-5 z-50 rounded-full  border-l-2 border-t-2 border-b-8 border-r-8 border-black shadow-none bg-white',
        )}
        dir="ltr"
        orientation="vertical"
      >
        <NavigationMenuList>
          <ListItem title="Home" href="/" className="rounded-l-full" />
          <ListItem title="Join" href="/join" />
          <ListItem title="Events" href="/events" className="rounded-r-full" />
        </NavigationMenuList>
      </NavigationMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden w-fit fixed top-10 right-5 z-50 rounded-full  border-l-2 border-t-2 border-b-8 border-r-8 border-black shadow-none bg-white">
          <Icons.ellipsis />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="fixed top-5 right-1 z-50   border-l-2 border-t-2 border-b-8 border-r-8 border-black shadow-none bg-white">
          <DropdownMenuItem className="px-5 py-2 transition-colors transition-translate duration-100 hover:ease-in hover:scale-110 hover:text-tertiary-500 focus:text-tertiary-600 focus:ease-out focus:scale-90">
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-5 py-2 transition-colors transition-translate duration-100 hover:ease-in hover:scale-110 hover:text-tertiary-500 focus:text-tertiary-600 focus:ease-out focus:scale-90">
            <Link href="/join">Join</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-5 py-2 transition-colors transition-translate duration-100 hover:ease-in hover:scale-110 hover:text-tertiary-500 focus:text-tertiary-600 focus:ease-out focus:scale-90">
            <Link href="/events">Events</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li className="inline-flex items-center justify-center">
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={props.href || ''}
            className={cn(
              'inline select-none p-3 leading-none no-underline outline-none transition-colors transition-translate duration-100 hover:ease-in hover:scale-110 hover:text-tertiary-500 focus:text-tertiary-600 focus:ease-out focus:scale-90',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-sm leading-snug text-black">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)

ListItem.displayName = 'ListItem'
