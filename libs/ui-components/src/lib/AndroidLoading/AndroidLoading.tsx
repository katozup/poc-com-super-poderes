import React from 'react';

import './_AndroidLoading.scss';

export function AndroidLoading() {
  return (
    <img
      className='android-loading'
      src='/shared-assets/img/android-loading.gif'
      alt='Carregando'
    />
  );
}

export default AndroidLoading;
