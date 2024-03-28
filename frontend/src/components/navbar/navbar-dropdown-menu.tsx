'use client';

import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Icons,
} from '@/components/';
import { logoutAction } from '@/features/auth';

export const NavbarDropdownMenu = () => {
  const router = useRouter();
  const { setTheme } = useTheme();

  const logout = async () => {
    await logoutAction();
    router.push('/sign-in');
  };

  return (
    <div className="absolute bottom-8 hidden w-full md:block md:px-3 xl:px-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            type="button"
            className="w-full justify-start gap-4 font-normal"
          >
            <Icons.menu />
            <span className="hidden text-base xl:block">More</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72" align="start">
          <DropdownMenuLabel>Change mode</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setTheme('light')}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            System
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout}>
            <Icons.logOut className="mr-2 size-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
