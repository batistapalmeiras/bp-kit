// React
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
// Local
import {
  Brand,
  BrandMark,
  FormBox,
  FormPanel,
  Motto,
  MottoNote,
  MottoWide,
  MottoWord,
  Page,
} from '../LoginForm/styles';

export interface AuthBrand {
  icon: string;
  iconAlt: string;
  motto?: AuthMotto;
}

export interface AuthMotto {
  words: [string, string, string];
  lead: string;
  closing: string;
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
        {brand.motto && (
          <Motto>
            <MottoNote $end>{brand.motto.lead}</MottoNote>
            <MottoWord>{brand.motto.words[0]}</MottoWord>
            <MottoWide $italic>{brand.motto.words[1]}</MottoWide>
            <MottoWord $end>{brand.motto.words[2]}</MottoWord>
            <MottoNote>{brand.motto.closing}</MottoNote>
          </Motto>
        )}
      </Brand>

      <FormPanel>
        <FormBox>{children ?? <Outlet />}</FormBox>
      </FormPanel>
    </Page>
  );
}
