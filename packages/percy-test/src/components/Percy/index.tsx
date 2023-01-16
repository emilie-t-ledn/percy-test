import React, {

} from 'react';

import * as S from './styles';

interface Props {
  children: React.ReactNode,
}

export function Percy({
 children
}: Props) {
  return (
    <S.Percy>
      {children}
    </S.Percy>
  );
}
