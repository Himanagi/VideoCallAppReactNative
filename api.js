export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJmM2VhNGRiZi02OWVkLTQ0ZGUtOGRkYi0yNTc2NjRhMjlhZjgiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNjQxMTkzMywiZXhwIjoxODc0MTk5OTMzfQ.uTwYvh7eYPJ8r4TArfLDr9Dmh4e3a4ztHOQyLW8Rrqs';
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};