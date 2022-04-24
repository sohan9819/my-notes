import { toast } from 'react-toastify';

export const notify = (msg, msgType) => {
  switch (msgType) {
    case 'success':
      return toast.success(<h4 className='h4 '>{msg}</h4>, {
        position: 'bottom-center',
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    case 'info':
      return toast.info(<h4 className='h4 '>{msg}</h4>, {
        position: 'bottom-center',
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    case 'error':
      return toast.error(<h4 className='h4 '>{msg}</h4>, {
        position: 'bottom-center',
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    case 'warn':
      return toast.warn(<h4 className='h4 '>{msg}</h4>, {
        position: 'bottom-center',
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

    default:
      break;
  }
};
