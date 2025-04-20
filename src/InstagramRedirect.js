import { useEffect } from 'react';

function InstagramRedirect() {
  useEffect(() => {
    window.location.href = "https://www.instagram.com/prayog_sarthi";
  });
  
  return <div>Redirecting to Instagram...</div>;
}

export default InstagramRedirect;