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

const AddAdminForm = ({ handleSubmit, classes, t }) => (
  <form
    className={classes.findItem}
    onSubmit={handleSubmit}
  >
    <FormControl className={classes.formControl}>
      <Typography className={classes.heading}>
        {t('adminHome:email')}
      </Typography>
      <Field
        name="email"
        component={TextInput}
        inputClassName={classes.input}
        type="email"
      />
    </FormControl>
    <Button
      type="submit"
      className={classes.submitButton}
    >
      {t('adminHome:addAdminButton')}
    </Button>
  </form>
);

AddAdminForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate()(
  injectSheet(styles)(AddAdminForm)
);
