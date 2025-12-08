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
        }
      `}
    </style>
  );
};
