import { React, useState } from 'react';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Button, styled } from '@mui/material';
import DocumentCard from './DocumentCard';

export default function FileUploader({ data, getProgressValue }) {
  const [fileNameValArr, setFileNameValArr] = useState([
    {
      documentName: '',
      documentField: 0,
    },
  ]);
  const Input = styled('input')({
    display: 'none',
  });

  const onFileUploadChange = e => {
    const { value } = e.target;
    const splitFileName = value && value.split('\\')[2];
    const fileText = splitFileName.split('.')[0];
    const filterFileName = data && data.length > 0 && data.find(item => item.documentName === fileText);
    const updateFileData = [
      ...fileNameValArr,
      {
        documentName: fileText,
        documentField:
          filterFileName && typeof filterFileName.documentField !== 'undefined'
            ? filterFileName && filterFileName.documentField
            : 0,
      },
    ];
    setFileNameValArr(updateFileData);
  };
  console.log({ fileNameValArr });
  const storeTotalField =
    fileNameValArr &&
    fileNameValArr.length > 0 &&
    fileNameValArr.map(_ => {
      return _.documentField;
    });

  const calculateTotalFields =
    storeTotalField &&
    storeTotalField.length > 0 &&
    storeTotalField.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);

  getProgressValue(calculateTotalFields, fileNameValArr);

  return (
    <>
      <div className="file-upload-main">
        <label htmlFor="contained-button-file">
          <Input
            type="file"
            className="file-upload-input"
            accept="*"
            multiple
            id="contained-button-file"
            onChange={onFileUploadChange}
          />
          <Button variant="outlined" component="div" className="file-upload-btn">
            <FileUploadOutlinedIcon />
            <div className="upload-text-header">Drop the required documents</div>
            <div className="upload-text-content">Our Al fills the data for you :)</div>
          </Button>
        </label>
      </div>
      <div className="file-name-display">
        {fileNameValArr &&
          fileNameValArr.length > 0 &&
          fileNameValArr.map((item, index) => {
            if (item.documentName) {
              return (
                <DocumentCard
                  documentkey={index}
                  showCloseIcon
                  documentName={item.documentName}
                  documentFields={item.documentField}
                />
              );
            } else {
              return null;
            }
          })}
      </div>
    </>
  );
}
