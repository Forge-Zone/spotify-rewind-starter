interface UserProfile {
  display_name: string;
  images: Array<{ url: string }>;
  email: string;
}

interface TopTracksResponse {
  items: Track[];
  limit: number;
  total: number;
}

interface TopArtistsResponse {
  items: Artist[];
  limit: number;
  total: number;
}

interface RecentlyPlayedResponse {
  items: RecentlyPlayedTrack[];
  limit: number;
  total: number;
}
interface NewDiscover {
  items: Artist[];
  seeds?: {
    afterFilteringSize: number;
    afterRelinkingSize: number;
    href: string | null;
    id: string;
    initialPoolSize: number;
    type: string;
  }[];
  limit?: number;
  total?: number;
  href?: string;
}

interface VideoInsights {
  hello: string;
  topTracks: string;
  topArtists: string;
  recentTracks: string;
  newdiscov: string;
  genres: string;
}

interface Track {
  id: string;
  name: string;
  album: {
    name: string;
    images: { url: string; height: number; width: number }[];
  };
  artists: { id: string; name: string }[];
  duration_ms: number;
  explicit: boolean;
  popularity: number;
  preview_url: string | null;
  uri: string;
}

interface Artist {
  id: string;
  name: string;
  images: { url: string; height: number; width: number }[];
  genres: string[];
  popularity: number;
  followers: {
    total: number;
    href: string | null;
  };
  external_urls: {
    spotify: string;
  };
  uri: string;
  type: string;
  href: string;
}

interface RecentlyPlayedTrack {
  track: {
    id: string;
    name: string;
    album: {
      id: string;
      name: string;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
    };
    artists: Array<{
      id: string;
      name: string;
    }>;
    duration_ms: number;
    external_urls: {
      spotify: string;
    };
  };
  played_at: string;
}
