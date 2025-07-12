declare module 'reactour' {
  import { ReactNode } from 'react';

  export interface TourStep {
    selector: string;
    content: ReactNode;
    position?: 'top' | 'right' | 'bottom' | 'left' | 'center';
    action?: () => void;
    style?: React.CSSProperties;
    observe?: string;
  }

  export interface TourProps {
    steps: TourStep[];
    isOpen: boolean;
    onRequestClose: () => void;
    showNavigation?: boolean;
    showNavigationNumber?: boolean;
    showButtons?: boolean;
    showCloseButton?: boolean;
    showBadge?: boolean;
    accentColor?: string;
    inViewThreshold?: number;
    scrollDuration?: number;
    scrollOffset?: number;
    disableInteraction?: boolean;
    disableDotsNavigation?: boolean;
    disableKeyboardNavigation?: boolean;
    className?: string;
    maskClassName?: string;
    highlightedMaskClassName?: string;
    badgeContent?: (current: number, total: number) => ReactNode;
    prevButton?: ReactNode;
    nextButton?: ReactNode;
    closeWithMask?: boolean;
    lastStepNextButton?: ReactNode;
  }

  const Tour: React.FC<TourProps>;
  export default Tour;
} 