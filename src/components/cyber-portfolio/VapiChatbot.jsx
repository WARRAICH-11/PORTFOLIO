import { useEffect } from 'react';

const VapiChatbot = () => {
  useEffect(() => {
    // Load the Vapi widget script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
    script.async = true;
    script.type = 'text/javascript';
    
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <vapi-widget
      public-key="6502d9b7-e7ca-4fd1-8810-281e74052f86"
      assistant-id="32cfcd75-b97c-402d-a5a6-de1438e20def"
      mode="voice"
      theme="dark"
      base-bg-color="#000000"
      accent-color="#14b8a6"
      cta-button-color="#1e3a8a"
      cta-button-text-color="#ffffff"
      border-radius="large"
      size="full"
      position="bottom-right"
      title="Talk with Agent"
      start-button-text="Start"
      end-button-text="End Call"
      chat-first-message="Hey, how can I help you today?"
      chat-placeholder="Type your message..."
      voice-show-transcript="true"
      consent-required="true"
      consent-title="Terms and Conditions"
      consent-content='By clicking "Agree", and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.'
      consent-storage-key="vapi_widget_consent"
    />
  );
};

export default VapiChatbot;