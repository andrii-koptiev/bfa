import { Backdrop, Box, Fade, Modal } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  content: JSX.Element | null;
  icon?: JSX.Element | null;
};

const ModalCommon: FC<Props> = ({
  isOpen,
  onClose,
  content = null,
  icon = null,
}) => {
  const { palette, zIndex, shape } = useTheme();

  const style = {
    contentContainer: {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 'max-content',
      height: 'max-content',
      bgcolor: 'background.paper',
      border: '1px solid' + palette.divider,
      borderRadius: `${shape.borderRadius}px`,
      boxShadow: 24,
      p: 4,
    },
    modal: {
      backdropFilter: 'blur(8px)',
      backgroundColor: 'rgba(52, 64, 84, 0.7)',
      zIndex: zIndex.modal,
    },
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      sx={style.modal}
      data-testid='modal-common'
    >
      <Fade in={isOpen}>
        <Box sx={style.contentContainer} data-testid='modal-common-content'>
          {icon}
          {content}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalCommon;
