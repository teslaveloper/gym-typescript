import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  isAllowed: boolean,
  redirectPath?: string,
  children?: JSX.Element,
};

const ProtectedRoute = ({
isAllowed,
redirectPath = '/',
children }: Props
) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
