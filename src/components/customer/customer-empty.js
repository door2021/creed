import {
    Box,
} from '@mui/material';

const CustomerEmpty = () => {

    return <Box
        sx={{
            width: '100%',
            height: '30vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '15px',
            fontWeight: '600',
            letterSpacing: '1.0px'
        }}>Create new users...
</Box >
};

export default CustomerEmpty
