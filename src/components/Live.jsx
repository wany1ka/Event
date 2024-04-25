import React, { useEffect } from 'react';
import { useCall, useCallStateHooks, ParticipantView, StreamVideoClient } from '@stream-io/video-react-sdk';
import '@stream-io/video-react-sdk/dist/css/styles.css';

const apiKey = 'mmhfdzb5evj2';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQXNhampfVmVudHJlc3MiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0FzYWpqX1ZlbnRyZXNzIiwiaWF0IjoxNzE0MDM3NjI2LCJleHAiOjE3MTQ2NDI0MzF9.Yhs2xkclKeXjwGTHD2kUam8rKlZXSeVFjjz-9pQq5d0';
const userId = 'Asajj_Ventress';
const callId = 't14o00LNOhB7';

const user = {
  id: userId,
  name: 'Oliver',
  image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
};

const client = new StreamVideoClient({ apiKey, user, token });

const Live = () => {
  const call = useCall();
  const {
    useIsCallLive,
    useLocalParticipant,
    useParticipantCount,
    // ... more hooks
  } = useCallStateHooks();
  const totalParticipants = useParticipantCount();
  const localParticipant = useLocalParticipant();
  const isCallLive = useIsCallLive();

  useEffect(() => {
    const joinCall = async () => {
      try {
        await client.call('livestream', callId).join({ create: true });
      } catch (error) {
        console.error('Error joining call:', error);
      }
    };
    joinCall();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div
        style={{
          alignSelf: 'flex-start',
          color: 'white',
          backgroundColor: 'blue',
          borderRadius: '8px',
          padding: '4px 6px',
        }}
      >
        Live: {totalParticipants}
      </div>
      <div style={{ flex: 1 }}>
        {localParticipant && (
          <ParticipantView
            participant={localParticipant}
            // disables the extra UI elements as such:
            // name, audio, video indicator, etc...
            ParticipantViewUI={null}
          />
        )}
      </div>
      <div style={{ alignSelf: 'center' }}>
        {isCallLive ? (
          <button onClick={() => call?.stopLive()}>Stop Livestream</button>
        ) : (
          <button onClick={() => call?.goLive()}>Start Livestream</button>
        )}
      </div>
    </div>
  );
};

export default Live;