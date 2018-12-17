import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

export const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
  typography: {
    fontFamily: '"Gotham SSm", "Helvetica", "Arial", sans-serif',
    textTransform: "none",
  },
  buttonIcon: {
    margin: 0,
  },
  selectedButton: {
    display: 'block!important',
    width: '100%',
    borderRadius: '13px!important',
  },
  selectedButtonTitle: {
    color: theme.button.primaryColor,
    fontSize: theme.button.primaryFontSize,
    fontWeight: 600,
    paddingTop: '0.8rem',
    paddingBottom: '0.8rem',
    lineHeight: 1.3,
    textTransform: 'none',
  },
  wizardSettingHeaderTitle: {
    whiteSpace: 'nowrap'
  },
  wizardSettingHeaderButton: {
    display: 'block!important',
    borderRadius: '4px!important',
    marginLeft: '5px',
    marginRight: '5px'
  },
  wizardSettingHeaderButtonsGroupGridItem: {
    display: 'inherit'
  },
  wizardSettingHeaderText: {
    color: theme.button.primaryColor,
    fontWeight: 400,
    textTransform: 'none'
  },
  wizardSettingSubTitle: {
    fontSize: '1.45rem',
    fontWeight: 600,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.87)'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 190,
    width: '100%'
  },
  flatPrimary: {
    color: theme.palette.white.main,
  },
  grow: {
    flexGrow: 1,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  groupMenuItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  },
  input: {
    display: 'none',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuitem: {
    color: theme.palette.white.main
  },
  menuItemText: {
    color: theme.palette.white.main,
    fontSize: '1rem',
    fontWeight: 'bold',
    paddingTop: '3px',
    textTransform: 'none',
  },
  topbarMenuItem: {
    display: 'inline-block'
  },
  avatarImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  avatarMenuItemText: {
    color: theme.palette.white.main,
    fontSize: '1rem',
    fontWeight: 400,
    paddingLeft: '7px'
  },
  optionMenuItem: {
    backgroundColor: 'rgba(0, 0, 0, 0)!important',
    paddingLeft: '40px',
  },
  paper: {
    height: 140,
    width: 100,
  },
  paperContent: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paperDescription: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  slide: {
    padding: 10,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  descriptionUl: {
    paddingInlineStart: '15px',
  },
  olParentheses: {
    counterReset: 'list',
    paddingInlineStart: '0px',
    '& > li': {
      listStyle: 'none',
      '&:before': {
        textAlign: 'center',
        content: `counter(list) ") "`,
        counterIncrement: 'list',
        paddingRight: '0.5rem'
      }
    },
  },
  auditionTableTitle: {
    color: theme.palette.black.main,
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: '1.46429em',
  },
  auditionTableContentText: {
    color: theme.palette.black.main,
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1em',
  },
  descriptionText: {
    color: '#2a3134',
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: '"Gotham SSm", "Helvetica", "Arial", sans-serif',
    lineHeight: '1.46429em',
  },
  descriptionStrongRed: {
    color: theme.palette.red.main,
    display: 'inline',
    fontSize: '1rem',
    fontWeight: 600,
    fontFamily: '"Gotham SSm", "Helvetica", "Arial", sans-serif',
    lineHeight: '1.46429em',
  },
  descriptionItalicRed: {
    color: theme.palette.red.main,
    display: 'inline',
    fontSize: '1rem',
    fontWeight: 600,
    fontStyle: 'italic',
    fontFamily: '"Gotham SSm", "Helvetica", "Arial", sans-serif',
    lineHeight: '1.46429em',
  },
  h4: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '2.125rem',
    fontFamily: '"Gotham SSm", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.17,
    letterSpacing: '0.00735em',
    marginBlockStart: '1.33em',
    marginBlockEnd: '1.33em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  },
  h5: {
    display: 'block',
    fontSize: '0.83em',
    marginBlockStart: '1.67em',
    marginBlockEnd: '1.67em',
    marginInlineEtart: '0px',
    marginInlineEnd: '0px',
    fontWeight: 'bold',
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  footerMenuItemText: {
    color: theme.palette.white.main,
    fontWeight: 'bold',
    textTransform: 'none',
    display: 'inline-block'
  },
  footerDescriptionText: {
    color: '#212529',
    textTransform: 'none',
    paddingBottom: '10px'
  },
  underlineText: {
    textDecoration: 'underline',
    display: 'inline',
    fontSize: '1rem'
  },
  boldText: {
    fontWeight: 600,
    display: 'inline',
    fontSize: '1rem',
    fontFamily: '"Gotham SSm", "Helvetica", "Arial", sans-serif',
    lineHeight: '1.46429em',
  },
  boldUnderlineText: {
    fontWeight: 600,
    textDecoration: 'underline',
    display: 'inline',
    fontSize: '1rem',
    lineHeight: '1.46429em',
  },
  italicText: {
    fontStyle: 'italic',
  },
  centerText: {
    textAlign: 'center',
  },
  generalButtonClass: {
    textTransform: 'none',
    borderRadius: 0,
    fontWeight: 'bold',
    fontSize: '1.15rem',
    fontFamily: '"Gotham SSm", "Helvetica", "Arial", sans-serif',
  },
  backButtonClass: {
    textTransform: 'none',
  },
  nextButtonClass: {
    textTransform: 'none',
  },
  uploadProgressBar: {
    width: '200px',
    margin: 'auto',
    height: '30px'
  },
  talentFormBackButton: {
    textTransform: 'none',
    borderRadius: '0px',
    primaryColor: theme.palette.white.main,
  },
  talentImportantRegardingButton: {
    display: 'block',
    borderRadius: '5px',
    color: theme.palette.white.main,
    boxShadow: 'none',
    backgroundColor: '#C00',
    '&:hover': {
      backgroundColor: '#ab003c'
    }
  },
  talentImportantRegardingButtonTitle: {
    ontSize: '1rem',
    fontWeight: 600,
    paddingTop: '5px',
    paddingBottom: '5px',
    textTransform: 'none',
    color: theme.palette.black.main,
  },
  talentProfileGuideButtonItem: {
    textAlign: 'center',
    padding: '5px',
    display: 'block!important'
  },
  talentProfileGuideButton: {
    display: 'block',
    borderRadius: '5px'
  },
  talentProfileGuideDownloadButton: {
    borderRadius: '5px'
  },
  talentProfileGuildDownloadCombinationButton: {
    display: 'block',
    borderRadius: '5px',
    color: theme.palette.white.main,
    boxShadow: 'none',
    backgroundColor: '#C00',
    '&:hover': {
      backgroundColor: '#ab003c'
    }
  },
  talentProfileGuideButtonSelected: {
    display: 'block',
    borderRadius: '5px',
    color: theme.palette.white.main,
    boxShadow: 'none',
    backgroundColor: grey[500],
    '&:hover': {
      backgroundColor: grey[600]
    }
  },
  talentProfileGuideButtonTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    paddingTop: '5px',
    paddingBottom: '5px',
    textTransform: 'none',
    color: theme.palette.white.main,
  },
  talentProfileGuideButtonRequiredTitle: {
    fontWeight: 600,
    color: theme.palette.red.light,
    textTransform: 'none'
  },
  talentProfileGuideButtonSubTitle: {
    fontWeight: 100,
    color: theme.palette.white.thin,
    textTransform: 'none'
  },
  talentProfileVideoGreetingImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover'
  },
  talentProfileGeneralInfoNameCol: {
    fontSize: '1rem!important',
    fontWeight: '600!important',
    textAlign: 'left',
    display: 'inherit',
    margin: 'auto'
  },
  talentProfileSpecialInfoNameCol: {
    fontSize: '1rem!important',
    fontWeight: '600!important',
    textAlign: 'center',
    display: 'inherit',
    margin: 'auto'
  },
  talentProfileGeneralInfoName: {
    fontSize: '1rem!important',
    fontWeight: '600!important',
    textAlign: 'left'
  },
  talentProfileGeneralInfoValue: {
    fontSize: '1rem!important',
    fontWeight: '400!important',
    textAlign: 'left'
  },
  talentProfileBioTextValue: {
    fontSize: '1rem!important',
    fontWeight: '400!important',
    textAlign: 'left',
    display: 'contents'
  },
  talentProfileGeneralInfoValueCol: {
    marginTop: 'auto!important',
    marginBottom: 'auto!important'
  },
  talentProfileEditIcon: {
    color: theme.palette.black.main,
    fontSize: '1rem',
    marginBottom: '4px',
    marginRight: '7px',
    '&:hover': {
      color: theme.palette.black.light,
    },
  },
  talentProfileSpecialInfoEditIcon: {
    color: theme.palette.black.main,
    fontSize: '1.15rem',
    marginRight: '7px',
    marginTop: '3px',
    '&:hover': {
      color: theme.palette.black.light,
    },
  },
  talentProfileHeadlineEditIcon: {
    color: theme.palette.black.main,
    fontSize: '1.4rem',
    marginRight: '7px',
    marginTop: '10px',
    '&:hover': {
      color: theme.palette.black.light,
    },
  },
  talentProfileEditIconEmpty: {
    width: '24px'
  },
  talentProfileFileDeleteButton: {
    padding: '0px',
    minWidth: '10px',
    minHeight: '10px',
    width: '20px',
    height: '20px',
    position: 'relative',
    top: '-33px',
    left: '80px',
    fontWeight: 600,
  },
  talentProfileFileDeleteDisable: {
    color: '#FFFFFF',
    borderRadius: '2px',
    background: '#FFFFFF',
    fontWeight: 600,
    position: 'relative',
    top: '-48px',
    left: '192px'
  },
  talentProfileResumeDeleteButton: {
    padding: '0px',
    minWidth: '10px',
    minHeight: '10px',
    width: '20px',
    height: '20px',
    position: 'relative',
    top: '-25px',
    left: '170px',
    fontWeight: 600,
  },
  talentProfilePictureEmpty: {
    width: '20px',
    height: '20px',
  },
  talentAvailabilityCalendarDeleteButton: {
    padding: '0px',
    minWidth: '10px',
    minHeight: '10px',
    width: '20px',
    height: '20px',
    display: 'block',
    fontWeight: 600,
    right: '-300px',
    bottom: '-15px',
    color: theme.palette.white.main,
    backgroundColor: theme.palette.red.main,
    '&:hover': {
      backgroundColor: theme.palette.red.dark,
    },
  },
  talentAvailabilityCalendarDeleteButtonGridItem: {
    textAlign: 'right',
  },
  talentProfilePictureDeleteButton: {
    padding: '0px',
    minWidth: '10px',
    minHeight: '10px',
    width: '20px',
    height: '20px',
    position: 'relative',
    top: '-25px',
    left: '90px',
    fontWeight: 600,
  },
  talentProfileViewTitleText: {
    fontSize: '2rem',
    fontWeight: 600,
    fontFamily: '"Gotham SSm", "Helvetica", "Arial", sans-serif',
    lineHeight: '1.46429em',
  },
  talentProfileViewSubTitleText: {
    fontSize: '1.2rem',
    fontWeight: 600,
    fontFamily: '"Gotham SSm", "Helvetica", "Arial", sans-serif',
    lineHeight: '1.46429em',
  },
  talentProfileViewHeaderTextItem: {
    fontSize: '1rem!important',
    fontWeight: '600!important',
    textAlign: 'center',
    display: 'inherit',
    margin: 'auto',

  },
  talentProfileViewHeaderText: {
    fontSize: '1.4rem',
    fontWeight: 600,
    fontFamily: '"Gotham SSm", "Helvetica", "Arial", sans-serif',
    lineHeight: '1.46429em',
    textAlign: 'center',
    padding: '3px 10px 3px 10px',
    border: `3px solid ${theme.palette.black.main}`
  },
  talentProfileVideoViewModal: {
    width: '60%',
    height: '70%',
    left: '20%',
    top: '15%'
  },
  talentProfileVideoUploadingText: {
    padding: '10px',
    fontSize: '1rem',
    textAlign: 'center',
    top: '-36px',
    position: 'relative',
    fontWeight: '400'
  },
  talentProfileVideoAuditionSubTitleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '10px',
    fontSize: '1.5rem'
  },
  talentProfileVideoAuditionDescriptionText: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '10px',
    fontSize: '1rem'
  },
  talentProfileVideoAuditionUploadersRow: {
    width: '100%'
  },
  talentProfileVideoAuditionInstructionLinkedText: {
    color: '#0366d6',
    textDecoration: 'underline',
    fontSize: '0.85rem',
    textAlign: 'center'
  },
  talentProfileVideoAuditionHelpfulHintTitle: {
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  talentProfileVideoAuditionHelpfulHintContentGrid: {
    border: '4px solid #000000',
    margin: 'auto',
    width: '250px',
    minWidth: '250px'
  },
  talentProfileVideoAuditionHelpfulHintText: {
    textAlign: 'center',
    fontSize: '0.85rem',
    fontWeight: 100,
  },
  talentProfileVideoAuditionHelpfulHintImage: {
    width: '100%',
  },
  talentIntroductionButton: {
    borderRadius: '5px',
    padding: '16px 8px',
    display: 'block'
  },
  talentIntroductionButtonTitle: {
    fontWeight: 100,
    fontSize: '1rem',
    color: theme.palette.white.main,
    textTransform: 'none'
  },
  talentIntroductionButtonSuffixTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    paddingTop: '5px',
    paddingBottom: '5px',
    textTransform: 'none',
    display: 'inline',
    color: theme.palette.white.main,
  },
  clientFormNextButton: {
    textTransform: 'none',
    borderRadius: '0px',
    primaryColor: theme.palette.white.main,
  },
  clientTalentSearchResultPicture: {
    width: '70px',
    height: '70px',
    objectFit: 'cover',
  },
  pictureContainer: {
    display: 'inline-block',
    border: 'solid 3px',
    color: '#000000'
  },
  clientFormSubTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    //fontFamily: '"Gotham SSm", "Helvetica", "Arial", sans-serif',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: '1.46429em',
    marginTop: '0.5rem'
  },
  clientFormBackButton: {
    textTransform: 'none',
    borderRadius: '0px',
    backgroundColor: '#343a40',
    primaryColor: theme.palette.white.main,
  },
  clientFormNextButtonContainerGridItem: {
    textAlign: 'right',
  },
  clientFormNextButton: {
    textTransform: 'none',
    borderRadius: '0px',
    backgroundColor: '#343a40',
    primaryColor: theme.palette.white.main,
  },
  clientFormBackButtonText: {
    color: theme.palette.white.main,
  },
  clientFormNextButtonText: {
    color: theme.palette.white.main
  },
  clientSearchResultTalentHeadlineText: {
    fontWeight: 'bold'
  },
  clientTalentViewHeaderGridItem: {
    textAlign: 'center'
  },
  clientTalentViewHeaderTitleText: {
    border: '2px solid',
    // display: 'inline',
    padding: '5px 10px 5px 10px'
  },
  clientTalentViewMoreInfoButtonGridItemWithoutFullWidth: {
    textAlign: 'center',
  },
  clientTalentViewMoreInfoButtonGridItem: {
    textAlign: 'center',
    paddingLeft: '15%!important',
    paddingRight: '15%!important'
  },
  clientTalentViewMoreInfoButton: {
    backgroundColor: theme.palette.black.main,
    display: 'block',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: theme.palette.black.light,
    },
  },
  clientTalentViewVideoButtonGridItem: {
    textAlign: 'center',
    padding: '5px'
  },
  clientTalentViewVideoButton: {
    backgroundColor: theme.palette.black.main,
    display: 'block',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: theme.palette.black.light
    },
  },
  clientTalentViewVideoButtonText: {
    fontSize: '1rem',
    fontWeight: 600,
    paddingTop: '5px',
    paddingBottom: '5px',
    textTransform: 'none',
    color: theme.palette.white.main
  },
  clientTalentViewVideoButtonStatusText: {
    color: theme.palette.white.thin,
    textTransform: 'none',
  }
});

export const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#28a745'//'#C00'
    },
    green: {
      main: '#28a745'
    },
    teal: {
      main: '#20c997'
    },
    white: {
      main: '#FFFFFF',
      light: grey[100],
      dark: grey[300],
      thin: '#d6d7d8',
      contrastText: '#fff'
    },
    black: {
      main: grey[900],
      thin: grey[600],
      light: grey[600],
    },
    grey: {
      main: grey[900],
      dark: grey[800],
      light: grey[400]
    },
    darkGrey: {
      main: grey[800]
    },
    lightGrey: {
      main: grey[400]
    },
    red: {
      main: '#C00',
      thin: red[400],
      light: red[400],
      dark: red[900]
    }
  },
  typography: {
    fontFamily: '"Gotham SSm", "Helvetica", "Arial", sans-serif',
    textTransform: "none",
    useNextVariants: true
  },
  button: {
    primaryColor: '#FFFFFF',
    primaryFontSize: '1.5rem'
  },
})

export const themeV0 = getMuiTheme({
  palette: {
    primary1Color: '#007bff',
    accent1Color: '#40c741',
  }
});

export default styles;