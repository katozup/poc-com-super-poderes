export default function (enumValue){
  switch (enumValue){
    case 'PAGE': return 'page';
    case 'SECTION': return 'section';
    case 'COMPONENT': return 'component';

    case 'PAGE_LOAD': return 'trackPageLoad';
    case 'CUSTOM_LINK': return 'trackCustomLink';
    
    case 'ON_CLICK': return 'onClick';
    case 'ON_HOVER': return 'onHover';

    default:
      return enumValue 
  }
}
