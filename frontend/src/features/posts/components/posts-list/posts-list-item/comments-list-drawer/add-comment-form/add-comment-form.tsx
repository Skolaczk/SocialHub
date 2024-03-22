import { startTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  addCommentFormSchema,
  defaultValues,
  TAddCommentFormSchema,
} from './validation-schema';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  Icons,
  Input,
  useToast,
} from '@/components';
import { createCommentAction, TComment } from '@/features/posts';
import { TUser } from '@/features/users';

type TAddCommentFormProps = {
  user: TUser;
  postId: number;
  addOptimisticComment: (action: TComment) => void;
};

export const AddCommentForm = ({
  addOptimisticComment,
  user,
  postId,
}: TAddCommentFormProps) => {
  const { toast } = useToast();
  const form = useForm<TAddCommentFormSchema>({
    resolver: zodResolver(addCommentFormSchema),
    defaultValues,
  });

  const onSubmit = async ({ content }: TAddCommentFormSchema) => {
    startTransition(() =>
      addOptimisticComment({
        id: Math.round(Math.random() * 1000),
        createdAt: `${new Date()}`,
        content,
        postId,
        user,
      })
    );
    form.reset();

    const error = await createCommentAction({ content, postId });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Oops! Something went wrong.',
        description: error.message,
      });
    }

    toast({ title: 'Comment added.' });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-row gap-2"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Add comment" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button variant="ghost" size="icon">
          <Icons.sendHorizontal className="text-primary" />
        </Button>
      </form>
    </Form>
  );
};
