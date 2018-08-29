import i18n from 'config/i18next';
import { get, keys } from 'lodash';

const DELAY = 3;

export const formatNotification = (action) => {
  const responseType = get(action, 'payload.type') || get(action, 'payload.response.error.type');
  const data = get(action, 'payload.data', {});
  const dataMessage = keys(data).map(key => i18n.t(`dataNtf:${key}`, { data: data[key] } ));

  return {
    title: i18n.t(`titleNtf:${responseType.split('.')[0]}`),
    message: i18n.t(`messageNtf:${responseType.replace('.', '_')}`) + dataMessage.join(),
    position: 'tl',
    autoDismiss: DELAY,
  };
};
