import React from 'react';
import { styled } from '@mui/material/styles';

// Array of video IDs
const videoIds = ['XuFDcZABiDQ', 'XuFDcZABiDQ', 'XuFDcZABiDQ']; // Replace with actual video IDs

// Styled components
const CounsellingPage = styled('div')({
  padding: '16px', // Use theme.spacing(2) for Material-UI v5
});

const VideosContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px', // Adjust spacing between videos
});

const VideoContainer = styled('div')({
  position: 'relative',
  paddingBottom: '56.25%', // 16:9 aspect ratio
  height: 0,
  overflow: 'hidden',
  width: 'calc(100% - 16px)', // Adjust width to fit three videos per row with padding
  marginBottom: '16px', // Bottom margin for spacing
  '&:nth-child(3n)': {
    marginRight: 0, // Remove right margin for the last video in each row
  },
});

const Iframe = styled('iframe')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '25%',
  height: '25%',
});

function Counselling() {
  return (
    <CounsellingPage>
      <h1>Counselling Videos</h1>
      <VideosContainer>
        {videoIds.map((videoId, index) => (
          <VideoContainer key={index}>
            <Iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></Iframe>
          </VideoContainer>
        ))}
      </VideosContainer>
    </CounsellingPage>
  );
}

export default Counselling;


