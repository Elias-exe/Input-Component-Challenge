import PropTypes from 'prop-types';
import {
  StyledInput, Container, InputWithIcon, StyledTextArea,
} from './styles';

export default function Input({
  label,
  helperText,
  error,
  disabled,
  startIcon,
  endIcon,
  icon,
  value,
  size,
  fullWidth,
  multiline,
  row,
}) {
  return (
    <Container error={error}>
      <span>{helperText}</span>
      {(startIcon || endIcon) && (
        <InputWithIcon startIcon={startIcon} endIcon={endIcon}>
          <i className="material-icons md-18">{icon}</i>
          <StyledInput placeholder={value} disabled={disabled} size={size} fullWidth={fullWidth} />
        </InputWithIcon>
      )}
      {(!startIcon && !endIcon && !multiline) && (
        <StyledInput placeholder={value} disabled={disabled} size={size} fullWidth={fullWidth} />
      )}
      {multiline && (
        <StyledTextArea placeholder="Placeholder" rows={row} />
      )}

      <label>{label}</label>
    </Container>

  );
}

Input.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  startIcon: PropTypes.bool,
  endIcon: PropTypes.bool,
  icon: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  row: PropTypes.string,
};

Input.defaultProps = {
  label: 'Label',
  helperText: '',
  error: false,
  disabled: false,
  startIcon: false,
  endIcon: false,
  icon: 'face',
  value: 'Placeholder',
  size: 'md',
  fullWidth: false,
  multiline: false,
  row: '1',
};
