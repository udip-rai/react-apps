export type InfoTooltipLabelProps = {
  details: string[];
};

export interface InfoTooltipProps extends InfoTooltipLabelProps {
  children: any;
  isLabelOpen: boolean;
}

export type CustomPopoverProps = {
  children: any;
};

export interface InfoPopoverProps extends CustomPopoverProps {
  details: string[];
}
