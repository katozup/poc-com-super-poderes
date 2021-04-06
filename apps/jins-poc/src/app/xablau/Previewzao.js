import React from 'react';
import './_Previewzao.scss';

export default function Previewzao({shouldBePage}) {
console.log('2:' , shouldBePage)
  return (      
    <div className="previewzao-eo credicard-theme-default">
      <meta name="viewport" content="width=550px, initial-scale=1.0"></meta>
      preview:
      {shouldBePage}
    </div>
  );
}
