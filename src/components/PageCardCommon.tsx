import { Box, Card, CardContent, Divider, Typography, useTheme } from "@mui/material";
import { FC, memo, ReactNode } from "react";


type Props = {
  title: string;
  subtitle?: string;
  buttonElement?: ReactNode | null;
  contentElement?: ReactNode | null;
  showDivider?: boolean;
};

const PageCardCommon: FC<Props> = ({
  title,
  subtitle,
  buttonElement = null,
  contentElement = null,
  showDivider = false,
}) => {
  const { palette, transitions } = useTheme();
  const styles = {
    cardContainer: {
      width: '100%',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 32px',
      overflow: 'auto',
      transition: transitions.create(['width'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen,
      }),
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
    },
    headerTitle: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    content: {
      flexGrow: 1,
      display: 'flex',
      paddingBottom: '16px',
      flexDirection: 'column',
      '&:last-child': {
        padding: 0,
      },
    },
    contentElement: {
      flexGrow: 1,
      display: 'flex',
  "flex"exDirection: 'column',
"column"};

  return (
    <Card sx={styles.cardContainer}>
      <CardContent sx={styles.content}>
        <Box sx={styles.headerContainer}>
          <Box sx={styles.headerTitle}>
            <Typography
              variant='h1'
              children={title}
              data-testid='page-card-title'
            />
            {subtitle && (
              <Typography
                variant='subtitle1'
                color={palette.text.secondary}
                children={subtitle}
                data-testid='page-card-subtitle'
              />
            )}
          </Box>
          {buttonElement}
        </Box>
        {showDivider && <Divider />}

        {contentElement && (
          <Box sx={styles.contentElement} data-testid='page-card-content'>
            {contentElement}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default memo(PageCardCommon);