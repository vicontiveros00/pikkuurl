import toast from 'react-hot-toast';

export const linkValidator = (url) => {
    try {
        return Boolean(new URL(url));
    } catch (err) {
        return false;
    }
}

export const notifyURL = () => {
    toast.error('URL should start with http(s)...', {
        duration: 8000,
        style: {
            borderRadius: '40px',
            padding: '16px',
            backgroundColor: '#ED5353',
            color: '#fff',
        },
        iconTheme: {
            primary: '#374248',
            secondary: '#FFFAEE',
        }
    })
}

export const notifyTimeout = () => {
    toast.error('Server is on fire or something. You shouldn\'t be seeing this.', {
        duration: 18000,
        style: {
            borderRadius: '40px',
            padding: '16px',
            backgroundColor: '#ED5353',
            color: '#fff'
        },
        iconTheme: {
            primary: '#374248',
            secondary: '#FFFAEE',
        }
    })
}

export const copiedToClipboard = () => {
    toast.success('Link copied to clipboard!', {
        duration: 8000,
        style: {
            borderRadius: '40px',
            padding: '16px',
            backgroundColor: '#408140',
            color: '#fff',   
        },
        iconTheme: {
            primary: '#fff',
            secondary: '#408140',
        }
    })
}