module.exports = (theme) => {
  const styles = {
    '.mint-container': {
      'align-content': 'flex-start',
      'display': 'flex',
      'flex-direction': 'column',
      'justify-content': 'space-between',
      'margin-bottom': '20px',
      'margin-left': '0',
      'margin-right': '0',
      'margin-top': '20px',
      'padding-bottom': '20px',
      'padding-top': '0',
      'width': '96%',

      '.left': {
        'align-items': 'center',
        'background-color': theme('colors.grey-243'),
        'border-radius': '6px',
        'display': 'flex',
        'flex-direction': 'column',
        'margin-top': '5%',
        'padding-bottom': '2%',
        'padding-left': '6%',
        'padding-right': '6%',
        'padding-top': '2%',
        'width': '100%',

        '.amount': {
          'color': theme('color.black'),
          'font-family': theme('fontFamily.primary'),
          'font-size': theme('fontSize.20vw'),
          'padding-bottom': '2%',
          'padding-top': '2%',
          'text-align': 'left',
        },
        '.symbol': {
          'color': theme('colors.label-pink'),
          'font-family': theme('fontFamily.primary'),
          'font-size': theme('fontSize.xxl'),
          'font-weight': theme('fontWeight.bolder'),
          'line-height': '4rem',
          'margin-bottom': '5%',
          'margin-left': '0',
          'margin-right': '0',
          'margin-top': '5%',
          'text-align': 'center',
        },
        '.slider-wrapper': {
          'margin-bottom': '5%',
          'margin-left': '0',
          'margin-right': '0',
          'margin-top': '3%',
          'width': '100%',

          '.rc-slider': {
            'position': 'relative',
            'height': '24px',
            'padding': '5px 0',
            'width': '100%',
            'border-radius': '6px',
            'touch-action': 'none',
            'box-sizing': 'border-box',
            '-webkit-tap-highlight-color': theme('colors.grey-204'),
          },
          '.rc-slider-rail': {
            'height': '8px',
            'border-radius': '6px',
            'background-color': theme('colors.grey-204'),
          },
          '.rc-slider-track': {
            'position': 'absolute',
            'left': '0',
            'height': '8px',
            'border-radius': '6px',
            'margin-top': '-8px',
            'background-color': theme('colors.label-pink'),
          },
          '.rc-slider-handle': {
            'position': 'absolute',
            'width': '24px',
            'height': '24px',
            'cursor': ['pointer', '-webkit-grab', 'grab'],
            'margin-top': '-16px',
            'border-radius': '50%',
            'border': `solid 2px ${theme('colors.label-pink')}`,
            'background-color': theme('colors.white'),
            'touch-action': 'pan-x',

            '&:hover': {
              'border-color': theme('colors.label-pink'),
            },
            '&:active': {
              'border-color': theme('colors.label-pink'),
              'box-shadow': `0 0 2px ${theme('colors.label-pink')}`,
              'cursor': 'grabbing',
            },
            '&:focus': {
              'border-color': theme('colors.label-pink'),
              'box-shadow': `0 0 0 1px ${theme('colors.label-pink')}`,
              'outline': 'none',
            },
          },
        },
      },
      '.right': {
        'background-color': theme('colors.grey-243'),
        'border-radius': '6px',
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-between',
        'margin': '0',
        'padding-bottom': '2%',
        'padding-left': '0',
        'padding-right': '0',
        'padding-top': '2%',
        'text-align': 'center',
        'width': '100%',

        '.column': {
          'align-items': 'center',
          'display': 'flex',
          'flex-direction': 'column',
          'justify-content': 'flex-start',
          'margin': '0',
          'padding-bottom': '0',
          'padding-left': '4%',
          'padding-right': '4%',
          'padding-top': '0',
          'text-align': 'center',

          '.title': {
            'color': theme('colors.black'),
            'font-family': theme('fontFamily.primary'),
            'font-size': theme('fontSize.m-xl'),
            'font-weight': theme('fontWeight.bolder'),
            'line-height': '1.25',
            'margin-bottom': '2%',
            'margin-top': '2%',
            'padding-bottom': '2%',
            'padding-left': '0',
            'padding-right': '0',
            'padding-top': '2%',
            'text-align': 'center',
            'width': '100%',
          },

          '.normal': {
            'color': theme('colors.black'),
            'font-family': theme('fontFamily.primary'),
            'font-size': theme('fontSize.sm'),
            'font-weight': theme('fontWeight.normal'),
            'line-height': '1',
            'margin-bottom': '5pc',
            'padding-bottom': '2%',
            'padding-left': '0',
            'padding-right': '0',
            'padding-top': '2%',
            'text-align': 'center',
          },
        },
      },
    },
  };

  styles[`@media (min-width: ${theme('screens.lg')})`] = {
    '.mint-container': {
      'flex-direction': 'row',
      'width': '94%',

      '.left': {
        'margin': '0',
        'min-width': '300px',
        'width': 'auto',

        '.amount': {
          'font-size': theme('fontSize.7vw'),
        },
        '.symbol': {
          'font-size': theme('fontSize.xl'),
          'line-height': '1',
          'margin': '0',
        },
      },
      '.right': {
        'width': 'auto',
        'margin-left': '2%',
        'text-align': 'left',
        'flex-direction': 'row',
        'flex-grow': '1',

        '.column': {
          '&:first-child': {
            'align-items': 'flex-start',
            'max-width': '300px',
            'padding-left': '3%',
            'padding-right': '1%',
            'text-align': 'left',
          },
          '&:nth-child(2)': {
            'flex-grow': '1',
            'padding-left': '2%',
            'padding-right': '3%',
          },
          '.title': {
            'font-size': theme('fontSize.xl'),
            'text-align': 'left',
          },
          '.normal': {
            'margin': '0',
            'text-align': 'left',
          },
        },
      },
    },
  };

  console.log(styles);
  return styles;
};
