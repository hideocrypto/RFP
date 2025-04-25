import React from 'react';

interface EmbedFormProps {
  src: string;
  title?: string;
  width?: number;
  height?: number;
}

const EmbedForm: React.FC<EmbedFormProps> = ({ 
  src, 
  title = 'Embedded content',
  width = 600,
  height = 450
}) => {
  return (
    <div className="embed-container">
      <iframe
        src={src}
        title={title}
        width={width}
        height={height}
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export default EmbedForm;
