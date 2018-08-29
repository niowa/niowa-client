import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import injectSheet from 'react-jss';
import styles from './styles';
import Typography from 'material-ui/Typography';
import { FormControl } from 'material-ui/Form';
import { translate } from 'react-i18next';

import { isEmail, minLength6, required } from 'helpers/generic';

import TextInput from 'components/Forms/TextInput';
import Button from 'material-ui/Button';

const SignIn = ({ handleSubmit, classes, t }) => (
  <form
    className={classes.login}
    onSubmit={handleSubmit}
  >
    <FormControl className={classes.formControl}>
      <Typography className={classes.heading}>
        {t('auth:email')}
      </Typography>
      <Field
        name="email"
        inputClassName={classes.input}
        component={TextInput}
        validate={[required, isEmail]}
        props={{
          type: 'email'
        }}
      />
    </FormControl>
    <FormControl className={classes.formControl}>
      <Typography className={classes.heading}>
        {t('auth:password')}
      </Typography>
      <Field
        name="password"
        inputClassName={classes.input}
        component={TextInput}
        validate={[required, minLength6]}
        type="password"
      />
    </FormControl>
    <Button
      type="submit"
      className={classes.submitButton}
    >
      {t('auth:signIn')}
    </Button>
  </form>
);

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate()(
  injectSheet(styles)(SignIn)
);
