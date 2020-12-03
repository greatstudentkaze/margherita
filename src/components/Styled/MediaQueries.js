const size = {
  'max-lg-width': '1440px',
  'max-md-width': '1087px',
  'max-sm-width': '767px',
  'max-xs-width': '479px',
  'max-xxs-width': '320px',
};

export const device = {
  'laptop': `(max-width: ${size['max-lg-width']})`,
  'tablet': `(max-width: ${size['max-md-width']})`,
  'mobileL': `(max-width: ${size['max-sm-width']})`,
  'mobileM': `(max-width: ${size['max-xs-width']})`,
  'mobileS': `(max-width: ${size['max-xxs-width']})`,
};
