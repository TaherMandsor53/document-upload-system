import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function DocumentCard({ documentName, documentFields, documentkey }) {
  return (
    <div className="document-card-main" key={documentkey}>
      <div className="document-name">{documentName}</div>
      <div className="document-field">{documentFields} fields</div>
      <InfoOutlinedIcon />
    </div>
  );
}
