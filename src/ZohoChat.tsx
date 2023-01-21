import React, { FC, memo, PropsWithChildren, useEffect } from 'react';

type Languages =
  | 'en'
  | 'fr'
  | 'de'
  | 'es'
  | 'nl'
  | 'nb'
  | 'tr'
  | 'ru'
  | 'pt'
  | 'it'
  | 'ko'
  | 'ja'
  | 'da'
  | 'pl'
  | 'ar'
  | 'hu'
  | 'pt_PT'
  | 'zh'
  | 'iw'
  | 'ga'
  | 'ro'
  | 'th'
  | 'sv'
  | 'el'
  | 'cs'
  | 'sk'
  | 'hr'
  | 'hy'
  | 'ka'
  | 'fa_IR'
  | 'bg';

export interface IProps extends PropsWithChildren {
  widgetCode: string;
  url: string;
  onlineIcon?: string;
  offlineIcon?: string;
  language?: Languages;
  position?:
    | 'topright'
    | 'topleft'
    | 'bottomright'
    | 'bottomleft'
    | 'right'
    | 'left';
  visible?: 'hide' | 'show' | number;
}

const ZohoChatComponent: FC<IProps> = ({
  onlineIcon,
  offlineIcon,
  children,
  widgetCode,
  position = 'left',
  visible,
  url,
  language,
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');

    let code = `var $zoho=$zoho || {};
        $zoho.salesiq = $zoho.salesiq || { 
            widgetcode: "${widgetCode}", 
            values:{},
            ready:function(){}
        };

        var d=document;
        s=d.createElement("script");
        s.type="text/javascript";
        s.id = "zsiqscript";
        s.defer = true;
        s.src = "${url}";
        t=d.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(s,t);
        if (!window.zohoReadyEvent){
            window.zohoReadyEvent = new Event('zohoReady');
        }
        
        $zoho.salesiq.ready = function(){
          $zoho.salesiq.floatbutton.position('${position}');
          if (!!'${onlineIcon}'){
            $zoho.salesiq.floatbutton.onlineicon.src('${onlineIcon}');
          }
          if (!!'${offlineIcon}'){
            $zoho.salesiq.floatbutton.offlineicon.src('${offlineIcon}');
          }
          if (!!'${visible}'){
            $zoho.salesiq.floatbutton.visible('${visible}');   
          }
          if (!!'${language}'){
          $zoho.salesiq.language('${language}');
          }
          window.dispatchEvent(window.zohoReadyEvent);
        }
    `;

    script.appendChild(document.createTextNode(code));

    document.body.appendChild(script);
    (window as any).$zoho?.salesiq?.reset?.();
  }, [widgetCode, position, onlineIcon, offlineIcon, visible, url, language]);

  return <>{children}</>;
};

export const ZohoChat = memo(ZohoChatComponent);
