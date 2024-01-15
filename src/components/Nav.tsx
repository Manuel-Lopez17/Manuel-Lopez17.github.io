import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport
} from '@/components/ui/navigation-menu'
import { Button } from "@/components/ui/button";
import { ModeToggle } from './ModeToggle'
import { LangToggle} from "./LangToggle"


export function Nav() {
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <NavigationMenu >
        <NavigationMenuList className={'gap-4'}>
          <NavigationMenuItem>
                  <ModeToggle  />
          </NavigationMenuItem>
          <NavigationMenuItem>
                <LangToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
