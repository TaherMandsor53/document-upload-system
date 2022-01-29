import { React } from 'react';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export default function FileUploader() {
  //   const getUploadParams = () => ({ url: 'https://httpbin.org/post' });

  //   const handleSubmit = (files, allFiles) => {
  //     console.log(files.map(f => f.meta));
  //     allFiles.forEach(f => f.remove());
  //   };
  //   const Preview = ({ meta }) => {
  //     const { name, percent, status } = meta;
  //     return (
  //       <span style={{ alignSelf: 'flex-start', margin: '10px 3%', fontFamily: 'Helvetica' }}>
  //         {name}, {Math.round(percent)}%, {status}
  //       </span>
  //     );
  //   };

  return (
    <div className="file-upload-main">
      <div className="file-upload">
        <FileUploadOutlinedIcon />
        <div className="upload-text-header">Drop the required documents</div>
        <div className="upload-text-content">Our Al fills the data for you :)</div>
        <input type="file" className="file-upload-input" accept="*" multiple />
      </div>
      {/* <Dropzone
        getUploadParams={getUploadParams}
        onSubmit={handleSubmit}
        PreviewComponent={Preview}
        inputContent="Drop the required documents"
        disabled={files => files.some(f => ['preparing', 'getting_upload_params', 'uploading'].includes(f.meta.status))}
      /> */}
    </div>
  );
}
