import React from 'react';
import { InfoOutlined, Close } from '@mui/icons-material';

export default function DocumentCard({ documentName, documentFields, documentkey, showCloseIcon }) {
  return (
    <div className="document-card-main" key={documentkey}>
      <div className="document-name">{documentName}</div>
      <div className="document-field">{documentFields ? documentFields : 0} fields</div>
      {showCloseIcon ? <Close /> : <InfoOutlined />}
    </div>
  );
}
