import { useContext, Suspense } from 'react';
import ProtectedRoute from '@/ProtectedRoute';
import Profile from '@/pages/Profile';
import NotFound from '@/pages/NotFound';

import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import Landing from "@/pages/Landing";
import { SelectedPage } from "@/shared/types";
import { AuthContext } from '@/AuthProviderManager';

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void;
};

export const AppRoutes = ({ selectedPage, setSelectedPage }: Props) => {
  const { userToken } = useContext(AuthContext);
  console.log('userToken', userToken)
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={
            <Landing selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          }/>

          <Route element={<ProtectedRoute isAllowed={!!userToken} />}>
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter >
    </Suspense>
  );
}

export default AppRoutes;
