import { createContext } from 'react';

interface ContextProps {
  sidemenuOpen: boolean;
  addToCartModalOpen: boolean;
  stockWarningModalOpen: boolean;
  purchaseModalOpen: boolean;
  copyToastOpen: boolean;
  phoneModalOpen: boolean;
  signinOpen: boolean;

  // methods
  openSidemenu: () => void;
  closeSidemenu: () => void;

  openAddToCartModal: () => void;
  closeAddToCartModal: () => void;

  openStockWarningModal: () => void;
  closeStockWarningModal: () => void;

  showPurchaseModal: (arg: boolean) => void;
  showCopyToast: (arg: boolean) => void;
  showPhoneModal: (arg: boolean) => void;
  showSigninModal: (arg: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
