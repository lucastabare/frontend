import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink, type SxProps, type Theme } from '@mui/material';

type BaseProps = {
  title: string;
  fontSize?: number | string;
  underline?: 'none' | 'hover' | 'always';
  sx?: SxProps<Theme>;
  'aria-current'?: 'page' | false;
};

type InternalProps = BaseProps & {
  to: string;
  href?: never;
  target?: never;
  rel?: never;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type ExternalProps = BaseProps & {
  href: string;
  to?: never;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type ActionProps = BaseProps & {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  to?: never;
  href?: never;
  target?: never;
  rel?: never;
};

type Props = InternalProps | ExternalProps | ActionProps;

export default function ALink(props: Props) {

  const commonStyles = {
    color: '#3483FA',
    fontWeight: 500,
    cursor: 'pointer',
    '&:hover': { textDecoration: 'underline' },
    ...props.sx,
  };

  if ('href' in props) {
    const { href, title, fontSize, underline = 'none', target, rel, onClick, ...rest } = props;

    const safeRel = target === '_blank' ? rel ?? 'noopener noreferrer' : rel;

    return (
      <MUILink
        component="a"
        href={href}
        underline={underline}
        target={target}
        rel={safeRel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        sx={{ fontSize, ...commonStyles }}
        {...rest}
      >
        {title}
      </MUILink>
    );
  }

  if ('to' in props) {
    const { to, title, fontSize, underline = 'none', onClick, ...rest } = props;

    return (
      <MUILink
        component={RouterLink}
        to={to}
        underline={underline}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        sx={{ fontSize, ...commonStyles }}
        {...rest}
      >
        {title}
      </MUILink>
    );
  }

  const { title, fontSize, underline = 'none', onClick, ...rest } = props as ActionProps;

  return (
    <MUILink
      component="button"
      type="button"
      underline={underline}
      onClick={onClick}
      sx={{
        fontSize,
        ...commonStyles,
        background: 'none',
        border: 0,
        p: 0,
      }}
      {...rest}
    >
      {title}
    </MUILink>
  );
}
