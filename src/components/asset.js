module.exports = (theme) => ({
  '.asset-container': {
    'align-items': 'center',
    'background-color': theme('colors.white'),
    'border-color': theme('colors.grey-230'),
    'border-radius': '6px',
    'border-width': theme('borderWidth.half'),
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'margin-bottom': '5px',
    'width': '100%',

    '.asset-left': {
      'display': 'flex',
      'flex-direction': 'row',
      'align-items': 'center',
    },
    '.asset-available': {
      'align-items': 'center',
      'border-radius': '4px',
      'display': 'flex',
      'flex-direction': 'row',
      'margin-left': '10px',
      'padding': '5px',
      'width': '5rem',

      '.asset-label': {
        'color': theme('colors.white'),
        'font-family': theme('fontfamily.primary'),
        'font-size': theme('fontSize.sm'),
        'margin-left': '5px',
      },
      '.icon': {
        'height': '15px',
        'margin-left': '5px',
      },
    },
    '.asset-amount': {
      'color': theme('colors.black'),
      'font-family': theme('fontfamily.primary'),
      'font-weight': theme('fontWeight.bold'),
      'margin': '5px',
      'padding-bottom': '5px',
      'padding-left': '10px',
      'padding-right': '10px',
      'padding-top': '5px',
      'text-align': 'left',
      'white-space': 'nowrap',
    },
    '.asset-weight': {
      'border-radius': '4px',
      'color': theme('colors.white'),
      'font-family': theme('fontfamily.primary'),
      'font-weight': theme('fontWeight.bold'),
      'margin': '10px',
      'padding-bottom': '5px',
      'padding-left': '10px',
      'padding-right': '10px',
      'padding-top': '5px',
      'text-align': 'left',
    },
  },
});
