'use client';

import { ComponentProps, useRef } from 'react';
import { useRouter } from 'next/navigation';

import { ModalHeader } from '@/components';
import { useMergedClassName, useOnClickOutside } from '@/hooks';

interface IProps {
  heading: 'post' | 'create post' | 'edit profile';
}

export const ModalTemplate = ({
  children,
  className,
  heading,
}: IProps & ComponentProps<'div'>) => {
  const classNameMerged = useMergedClassName('modal', className);
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, router.back);

  return (
    <div className="modal-background">
      <div ref={modalRef} className={classNameMerged}>
        <ModalHeader heading={heading} />
        {children}
      </div>
    </div>
  );
};
