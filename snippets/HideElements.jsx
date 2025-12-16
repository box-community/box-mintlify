export const HideElements = () => {
  return (
    <style>
      {`
        #pagination, .feedback-toolbar {
          display: none !important;
        }

        #header.relative {
          display: none;
        }

        .mdx-content {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
        
        @media (min-width: 1030px) {
          #content-container {
            padding: 0 !important;
          }
        }
      `}
    </style>
  );
};
