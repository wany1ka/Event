import { LivestreamLayout, StreamCall, StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';

const apiKey = 'REPLACE_WITH_API_KEY'; // the API key can be found in the "Credentials" section
const token = 'REPLACE_WITH_TOKEN'; // the token can be found in the "Credentials" section
const userId = 'REPLACE_WITH_noisy-disk-9'; // the user id can be found in the "Credentials" section
const callId = 'REPLACE_WITH_CALL_ID'; // the call id can be found in the "Credentials" section

// set up the user object
const user = {
  id: userId,
  name: 'Oliver-Viewer',
  image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver-Viewer',
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('livestream', callId);

// make sure the viewer doesn't accidentally publish audio or video
call.camera.disable();
call.microphone.disable();

call.join();

export const MyViewerApp = () => {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <LivestreamLayout showParticipantCount={true} showDuration={true} showLiveBadge={true} />
      </StreamCall>
    </StreamVideo>
  );
};
