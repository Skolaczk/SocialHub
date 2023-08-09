'use client';

import { useState } from 'react';
import { createPost } from '@/services';

export const CreatePostsModal = () => {
  const [file, setFile] = useState<FileList | null>();

  const create = async () => {
    if (file) {
      const data = await createPost({ content: 'hey', image: file[0] });
      console.log(data);
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 p-20 bg-primary -translate-y-1/2 -translate-x-1/2">
      <h1>Create post</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files)}
        accept="image/png, image/jpeg"
      />
      <button onClick={create}>click</button>
    </div>
  );
};
