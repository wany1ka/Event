export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIwZjU0NjNkNC1hNzcxLTQ1N2YtYTYxYy0xOTBiNjVjNjdjODYiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxMzk0NjUzNSwiZXhwIjoxNzE2NTM4NTM1fQ.VFZRRF5m8Z6F3T9cLZtO7bGWvh99ffDDibLJTQsqynY";

export const createNewRoom = async () => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
  });

  const { roomId } = await res.json();
  return roomId;
};