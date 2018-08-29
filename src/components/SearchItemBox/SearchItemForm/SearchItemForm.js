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

const SearchItemForm = ({ handleSubmit, classes, t }) => (
  <form
    className={classes.findItem}
    onSubmit={handleSubmit}
  >
    <FormControl className={classes.formControl}>
      <Typography className={classes.heading}>
        {t('home:itemId')}
      </Typography>
      <Field
        name="itemId"
        component={TextInput}
        inputClassName={classes.input}
        type="number"
      />
    </FormControl>
    <Button
      type="submit"
      className={classes.submitButton}
    >
      {t('home:findItemButton')}
    </Button>
  </form>
);

SearchItemForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate()(
  injectSheet(styles)(SearchItemForm)
);
