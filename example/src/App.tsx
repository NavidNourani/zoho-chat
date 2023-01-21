import { useZohoChat, ZohoChat } from '../../src/index';

function App() {
  const { click, ready } = useZohoChat();

  return (
    <>
      <ZohoChat
        widgetCode="79ed575bf537837f71a78c6ebf68b41ca2539fb20ec6b9dcc5e45afb54082da4"
        position="bottomright"
        language="en"
        url="https://salesiq.zoho.eu/widget"
        visible={'show'}
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
