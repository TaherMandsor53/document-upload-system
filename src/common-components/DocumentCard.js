import React from 'react';
import { InfoOutlined } from '@mui/icons-material';

export default function DocumentCard({ documentName, documentFields, documentkey }) {
  return (
    <div className="document-card-main" key={documentkey}>
      <div className="document-name">{documentName}</div>
      <div className="document-field">{documentFields ? documentFields : 0} fields</div>
      <InfoOutlined />
    </div>
  );
}
