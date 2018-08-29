import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import Typography from 'material-ui/Typography';
import { HEADLINE } from 'constants/typography';

import styles from './styles';

const ItemBox = ({
  classes,
  t,
  item,
}) => (
    <div className={classes.item}>
      {
        item ?
          (
            <div>
              <Typography
                className={classes.heading}
                variant={HEADLINE}
              >
                {t('home:description')}
              </Typography>
              <Typography className={classes.data}>
                {item.get('description')}
              </Typography>
              <Typography
                className={classes.heading}
                variant={HEADLINE}
              >
                {t('home:amount')}
              </Typography>
              <Typography className={classes.data}>
                {item.get('amount')}
              </Typography>
            </div>
          )
          :
          (
            <div>
              Item
            </div>
          )
      }

    </div>
  );

ItemBox.propTypes = {
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  item: PropTypes.object,
};

ItemBox.defaultProps = {
  item: null,
};

export default translate()(injectSheet(styles)(ItemBox));
