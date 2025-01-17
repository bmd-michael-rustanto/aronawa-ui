import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import { IColorpicker } from './Colorpicker.types';

export const ColorpickerStyled = styled.div({
  width: '100%',
  '& .sketch-picker': {
    border: '0 !important',
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.12) !important',
    borderRadius: '5px !important',
    marginTop: 8,
  },
});

export const ColorpickerInput = styled.div({
  position: 'relative',
  width: '100%',
  backgroundColor: Color.light,
  padding: '4px 8px',
  fontSize: 14,
  borderRadius: Radius.blunt,
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'all 0.3s',
  lineHeight: 1.5,
  color: Color.font.ink,
  cursor: 'pointer',
  height: 32,
  border: `1px solid ${Color.slate[500]}`,
  '&:focus': {
    borderColor: Color.primary.default,
    boxShadow: `0 0 0 2px ${Color.primary.default}33`,
  },
  '&::placeholder': {
    color: Color.slate[500],
  },
});

export const ColorpickerBackground = styled.div<IColorpicker>(({ color }) => ({
  width: '100%',
  height: '100%',
  borderRadius: Radius.blunt,
  background: color,
  border: `1px solid ${Color.slate[500]}`,
}));

export const ColorpickerPopover = styled.div({
  position: 'absolute',
  zIndex: '2',
});

export const ColorpickerCover = styled.div({
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
});
