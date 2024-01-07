'use client';

import { ComponentProps, useRef } from 'react';
import { useRouter } from 'next/navigation';

import { ModalHeader } from '@/components';
import { useMergedClassName, useOnClickEsc, useOnClickOutside } from '@/hooks';

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

  const goBack = () => router.back();

  useOnClickOutside(modalRef, goBack);

  useOnClickEsc(goBack);

  return (
    <div className="modal-background">
      <div ref={modalRef} className={classNameMerged}>
        <ModalHeader heading={heading} goBack={goBack} />
        {children}
      </div>
    </div>
  );
};
