export default function ({ colors }) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: '50px 0',
      alignItems: 'center',
    },
    item: {
      minWidth: '250px',
      backgroundColor: colors.WHITE,
      minHeight: '250px',
      padding: '30px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '4px',
      fontFamily: 'Open Sans, sans-serif',
      boxShadow: '0 10px 40px 0 rgba(62, 57, 107, 0.07), 0 2px 9px 0 rgba(62, 57, 107, 0.06)',
    },
    heading: {
      fontSize: '20px',
    },
    data: {
      marginBottom: '20px',
    }
  };
}
