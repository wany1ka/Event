//This is the Auth token, you will use it to generate a meeting and connect to it
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIwZjU0NjNkNC1hNzcxLTQ1N2YtYTYxYy0xOTBiNjVjNjdjODYiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxMzk0NjUzNSwiZXhwIjoxNzE2NTM4NTM1fQ.VFZRRF5m8Z6F3T9cLZtO7bGWvh99ffDDibLJTQsqynY";
// API call to create a meeting
export const createMeeting = async () => {
  try {
    const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`, // Include the token in the Authorization header
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    
    if (!res.ok) {
      throw new Error("Failed to create meeting");
    }

    // Destructuring the roomId from the response
    const { roomId } = await res.json();
    return roomId;
  } catch (error) {
    console.error("Error creating meeting:", error);
    throw error;
  }
};