'use client';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icons,
  useToast,
} from '@/components';
import { env } from '@/env.mjs';

type TPostsListItemDropdownProps = {
  id: number;
};

export const PostsListItemDropdown = ({ id }: TPostsListItemDropdownProps) => {
  const { toast } = useToast();

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(`${env.NEXT_PUBLIC_APP_URL}posts/${id}`);

    toast({
      title: 'Link copied to clipboard!',
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <Icons.ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={copyLinkToClipboard}>
          <Icons.copy className="mr-2 size-4" />
          <span>Copy link</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
