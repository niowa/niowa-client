export default function({ colors }) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    submitButton: {
      backgroundColor: colors.RED,
      maxWidth: '100px',
      borderRadius: '4px',
      color: colors.WHITE,
      fontSize: '15px',
      fontFamily: 'Open Sans, sans-serif',
    },
    notifications: {
      style: {
        NotificationItem: {
          DefaultStyle: {
            margin: '10px 5px 2px 1px'
          },

          success: {
            color: 'green',
            tittle: 'kek',
            message: 'lol',
          },
          error: {
            red: 'red',
          }
        },
      }
    },
  };
}
