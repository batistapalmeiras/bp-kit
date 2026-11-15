// React
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
// Local
import {
  Brand,
  BrandMark,
  FormBox,
  FormPanel,
  Page,
} from '../LoginForm/styles';

export interface AuthBrand {
  icon: string;
  iconAlt: string;
}

export interface AuthLayoutProps {
  brand: AuthBrand;
  children?: ReactNode;
}

export function AuthLayout({ brand, children }: AuthLayoutProps) {
  return (
    <Page>
      <Brand>
        <BrandMark>
          <img src={brand.icon} alt={brand.iconAlt} />
        </BrandMark>
      </Brand>

      <FormPanel>
        <FormBox>{children ?? <Outlet />}</FormBox>
      </FormPanel>
    </Page>
  );
}
