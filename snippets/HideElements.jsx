export const HideElements = () => {
  return (
    <style>
      {`
        #pagination, .feedback-toolbar {
          display: none !important;
        }
      `}
    </style>
  );
};
