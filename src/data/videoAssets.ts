type VideoAsset = {
  poster?: string;
  desktop: { mp4: string };
  duration: number;
};

export const videoAssets = {
  heroMain: {
    poster: undefined,
    desktop: {
      mp4: "/videos/featuredVideo.mp4",
    },
    duration: 14,
  },
} satisfies Record<string, VideoAsset>;