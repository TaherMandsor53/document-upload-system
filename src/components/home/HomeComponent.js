import { React, useEffect } from 'react';
import ProgressBar from '../../common-components/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { getDocumentList } from '../../action/action';
import DocumentCard from '../../common-components/DocumentCard';
import FileUploader from '../../common-components/FileUploader';

export default function HomeComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocumentList());
  }, []);

  const documentListData = useSelector(
    state => state.getDocumentDetailsReducer && state.getDocumentDetailsReducer.documentDetails,
  );
  console.log({ documentListData });
  return (
    <div className="home-main">
      <div className="document-progress-main">
        <div className="progress-container">
          <div className="progress-text">
            Welcome <span className="document-inline-bold">Micheal</span>, You are just
            <span className="field-value">114 fields</span> away
          </div>
          <div className="document-inline-bold">56/170 fields</div>
        </div>
        <ProgressBar />
      </div>

      <div className="document-section">
        <div className="required-document-section">
          <div className="document-text-header">REQUIRED DOCUMENTS</div>
          <div className="document-text-content">Documents listed below are need to be fill URLA Form</div>

          {documentListData &&
            documentListData.length > 0 &&
            documentListData.map(_ => {
              return (
                <DocumentCard
                  documentName={_.documentName}
                  documentkey={_.documentId}
                  documentFields={_.documentField}
                />
              );
            })}
        </div>
        <div className="document-upload-section">
          <div className="document-text-header">UPLOAD DOCUMENTS</div>
          <div className="document-text-content">Documents uploaded will be listed below</div>

          <FileUploader />
        </div>
      </div>
    </div>
  );
}
