import React from 'react'

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(({ size = 32, ...props }, ref) => {
  return <svg width={size} height={size} ref={ref} {...props} />
})

Icon.displayName = 'Icon'

function StarIcon({ fill = '#BD00FF', ...props }: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 87" {...props}>
      <path
        d="M42.5 0L46.6526 25.3064L61.3739 4.30785L54.1353 28.9099L76.5097 16.3782L59.3134 35.4031L84.9094 33.8203L61.1615 43.5L84.9094 53.1797L59.3134 51.5969L76.5097 70.6218L54.1353 58.0901L61.3739 82.6921L46.6526 61.6936L42.5 87L38.3474 61.6936L23.6261 82.6921L30.8647 58.0901L8.49033 70.6218L25.6866 51.5969L0.0906372 53.1797L23.8385 43.5L0.0906372 33.8203L25.6866 35.4031L8.49033 16.3782L30.8647 28.9099L23.6261 4.30785L38.3474 25.3064L42.5 0Z"
        fill={fill}
      />
    </Icon>
  )
}

export { StarIcon }
