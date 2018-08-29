import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { translate } from 'react-i18next';

const TextInput = ({
  t,
  autoComplete,
  input,
  meta: {
   touched,
   error,
  },
  ...rest,
}) => (
    <TextField
      error={Boolean(touched && error)}
      {...input}
      {...rest}
      inputProps={{
        autoComplete,
      }}
      helperText={touched ? t(error) : ''}
    />
  );

TextInput.propTypes = {
  autoComplete: PropTypes.string,
  input: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

export default translate()(TextInput);
