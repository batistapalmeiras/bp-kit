// React
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
// Local
import {
  Brand,
  BrandMark,
  BrandName,
  BrandQuote,
  BrandSub,
  BrandText,
  FormBox,
  FormPanel,
  Page,
} from '../LoginForm/styles';

export interface AuthBrand {
  icon: string;
  iconAlt: string;
  name: string;
  sub: string;
  quote?: string;
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
        <BrandText>
          <BrandName>{brand.name}</BrandName>
          <BrandSub>{brand.sub}</BrandSub>
        </BrandText>
        {brand.quote && <BrandQuote>{brand.quote}</BrandQuote>}
      </Brand>

      <FormPanel>
        <FormBox>{children ?? <Outlet />}</FormBox>
      </FormPanel>
    </Page>
  );
}
