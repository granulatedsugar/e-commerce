import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#222',
        height: '400px',
        borderRadius: '0px',
      },
}));