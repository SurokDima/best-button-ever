import { FC } from 'react';

export interface BestButtonEverProps {
  disabled?: boolean;
}

export const BestButtonEver: FC<BestButtonEverProps> = ({
  disabled = false,
}) => {
  return (
    <button disabled={disabled}>
      I bet u've never seen such a gorgeous button before
    </button>
  );
};
