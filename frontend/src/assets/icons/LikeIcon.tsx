interface IProps {
  isLiked: boolean;
}

export const LikeIcon = ({ isLiked }: IProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.82157 13.9839L11.3536 21.0594C11.6409 21.3293 11.7845 21.4642 11.9579 21.4789C11.9859 21.4812 12.0141 21.4812 12.0421 21.4789C12.2155 21.4642 12.3591 21.3293 12.6464 21.0594L20.1784 13.9839C22.2976 11.9931 22.555 8.71715 20.7726 6.41991L20.4375 5.98795C18.3053 3.23979 14.0254 3.70068 12.5272 6.83979C12.3156 7.28321 11.6844 7.28321 11.4728 6.83979C9.97458 3.70068 5.69471 3.2398 3.56252 5.98795L3.22738 6.41991C1.44504 8.71715 1.70238 11.9931 3.82157 13.9839Z"
        strokeWidth="2"
        fill={isLiked ? '#ff3e17' : 'none'}
      />
    </svg>
  );
};
