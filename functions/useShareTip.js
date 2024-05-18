import { useContext } from 'react';
import { UIContext } from '../context/ui';

export const useShareTip = (tip) => {
  const { showCopyToast } = useContext(UIContext);

  if (navigator.share) {
    navigator.share({
      url: `https://ftips.vercel.app/tips/${tip.id}`,
    });
  } else {
    navigator.clipboard.writeText(`https://ftips.vercel.app/tips/${tip.id}`);
    showCopyToast(true);
  }
};
