# Zoho-chat react component

## You can check live Storybook [here](https://63cbc3b26840db4b2305aa99-cgypfldyiy.chromatic.com/?path=/story/zoho-chat-test--default)

## Install:

```bash
  # NPM
  npm install zoho-chat

  # Yarn
  yarn add zoho-chat
```

## Usage:

```JSX
  <ZohoChat
    url={"<Your URL>"}
    widgetCode={"<Your widget code>"}
  />
```

## Input props

```Typescript

interface Props{
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
```

Also you can use your custom component to open chat box, there is a custom hook and you can user it like this:

```JSX
import { useZohoChat, ZohoChat } from 'zoho-chat';

function App() {
  const { click, ready } = useZohoChat();

  return (
    <>
      <ZohoChat
        url={"<Your URL>"}
        widgetCode={"<Your widget code>"}
        visible={'hide'}
      />
      {ready && (
        <button onClick={click}>
          {"It's a custom component => click to Open!"}
        </button>
      )}
    </>
  );
}

export default App;
```
