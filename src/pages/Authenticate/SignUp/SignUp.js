import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import injectSheet from 'react-jss';
import styles from './styles';
import Typography from 'material-ui/Typography';
import { FormControl } from 'material-ui/Form';
import { translate } from 'react-i18next';

import TextInput from 'components/Forms/TextInput';
import Button from 'material-ui/Button';

const SignUp = ({ handleSubmit, classes, t }) => (
  <form
    className={classes.signUp}
    onSubmit={handleSubmit}
  >
    <FormControl className={classes.formControl}>
      <Typography className={classes.heading}>
        {t('auth:email')}
      </Typography>
      <Field
        name="email"
        component={TextInput}
        inputClassName={classes.input}
        type="email"
      />
    </FormControl>
    <FormControl className={classes.formControl}>
      <Typography className={classes.heading}>
        {t('auth:name')}
      </Typography>
      <Field
        name="name"
        component={TextInput}
        inputClassName={classes.input}
        type="text"
      />
    </FormControl>
    <FormControl className={classes.formControl}>
      <Typography className={classes.heading}>
        {t('auth:password')}
      </Typography>
      <Field
        name="password"
        component={TextInput}
        inputClassName={classes.input}
        type="password"
      />
    </FormControl>
    <Button
      type="submit"
      className={classes.submitButton}
    >
      {t('auth:signUp')}
    </Button>
  </form>
);

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate()(
  injectSheet(styles)(SignUp)
);
