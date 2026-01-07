export type Stream = {
  id: string;
  name: string;
  status: "LIVE" | "OFFLINE";
  viewers?: number;
};

export const fetchStreams = async (): Promise<Stream[]> => {
  const res = await fetch("http://localhost:4000/streams");

  if (!res.ok) {
    throw new Error("Failed to fetch streams");
  }

  const data = await res.json();
  return data.streams;
};
