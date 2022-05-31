import { SvgIcon, SvgIconProps } from '@mui/material'

const EmptyCallIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5.99999 17.3447L7.17703 18.5217L16.8522 8.8466V14.3478H18.5217V5.99999L10.1739 5.99999V7.66955L15.6751 7.66955L5.99999 17.3447Z"
        fill="#EA1A4F"
      />
    </SvgIcon>
  )
}

export default EmptyCallIcon