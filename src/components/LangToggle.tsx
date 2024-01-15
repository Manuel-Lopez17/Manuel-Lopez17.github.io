import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getRelativeLocaleUrl } from 'astro:i18n';


export const LangToggle = () => {

  return (
        <DropdownMenu>
        <DropdownMenuTrigger>Lang</DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Langs</DropdownMenuLabel>
            <DropdownMenuItem ><a href={getRelativeLocaleUrl('es')}>ES</a></DropdownMenuItem>
            <DropdownMenuItem ><a href={getRelativeLocaleUrl('en')}>EN</a></DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
  )
}

