export type IsSidebarOpenProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
};

export type CustomIconButtonProps = {
  label: string;
  icon: React.ReactElement;
  color: string;
  left: string | number;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type ChattingDeleteDialogProps = {
  isOpen: boolean;
  cancelRef: any;
  onClose: () => void;
  item?: any;
  msg: string;
  handleDeleteOnClick: any;
};
