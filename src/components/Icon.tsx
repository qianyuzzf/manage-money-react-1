import React from 'react';
import classnames from 'classnames';

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  name?: string
} & React.SVGAttributes<SVGElement>

function Icon(props: Props) {
  const {name, children, className, ...rest} = props;
  return (
    <svg className={classnames('icon', className)} {...rest}>
      {name && <use xlinkHref={'#' + name}/>}
    </svg>
  );
}

export default Icon;