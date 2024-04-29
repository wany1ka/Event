import React, { useState } from "react";
import { createNewRoom } from "../api";

const WelcomeScreenContainer = ({ setAppData }) => {
  const [meetingId, setMeetingId] = useState("");

  const createClick = async () => {
    const newMeetingId = await createNewRoom();

    setAppData({ mode: "CONFERENCE", meetingId: newMeetingId });
  };
  const hostClick = () => setAppData({ mode: "CONFERENCE", meetingId });
  const viewerClick = () => setAppData({ mode: "VIEWER", meetingId });

  return (
    <div className="">
      <button onClick={createClick} className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none">Create new Meeting</button>
      <p>{"\n\nor\n\n"}</p>
      <input
        className="mt-5 py-2 px-4"
        placeholder="Enter meetingId"
        onChange={(e) => setMeetingId(e.target.value)}
        value={meetingId}
      />
      <p>{"\n\n"}</p>
      <button onClick={hostClick} className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none m-3 my-7">Join As Host</button>
      <button onClick={viewerClick} className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-green-400 focus:outline-none m-3">Join As Viewer</button>
    </div>
  );
};

export default WelcomeScreenContainer;