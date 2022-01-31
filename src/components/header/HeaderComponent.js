import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

export default function HeaderComponent() {
  return (
    <div className="header-main">
      <div className="form-header">
        <ArrowBackIcon />
        <div className="form-text">URLA FORM</div>
      </div>
      <div className="preview-header">
        <RemoveRedEyeOutlinedIcon />
        <div className="preview-text">PREVIEW</div>
      </div>
    </div>
  );
}
