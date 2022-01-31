import { React, useEffect, useState } from 'react';
import ProgressBar from '../../common-components/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { getDocumentList } from '../../action/action';
import DocumentCard from '../../common-components/DocumentCard';
import FileUploader from '../../common-components/FileUploader';

export default function HomeComponent() {
  const dispatch = useDispatch();
  const [progressVal, setProgressVal] = useState(0);
  const [documentList, setDocumentList] = useState('');

  useEffect(() => {
    dispatch(getDocumentList());
  }, [dispatch]);

  const documentListData = useSelector(
    state => state.getDocumentDetailsReducer && state.getDocumentDetailsReducer.documentDetails,
  );

  const documentFieldArr =
    documentListData &&
    documentListData.length > 0 &&
    documentListData.map(_ => {
      return _.documentField;
    });

  const totalFieldValue =
    documentFieldArr && documentFieldArr.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);

  const getProgressValue = (val, filterData) => {
    setProgressVal(val);
    setDocumentList(filterData && filterData);
  };
  console.log({ documentList });
  const filterDocumentList = documentListData.filter(
    ({ documentName: id1 }) => !documentList.some(({ documentName: id2 }) => id2 === id1),
  );
  console.log({ filterDocumentList });
  return (
    <div className="home-main">
      <div className="document-progress-main">
        <div className="progress-container">
          <div className="progress-text">
            Welcome <span className="document-inline-bold">Micheal</span>, You are just
            <span className="field-value">{progressVal} fields</span> away
          </div>
          <div className="document-inline-bold">
            {progressVal}/{totalFieldValue} fields
          </div>
        </div>
        <ProgressBar progressVal={progressVal} />
      </div>

      <div className="document-section">
        <div className="required-document-section">
          <div className="document-text-header">REQUIRED DOCUMENTS</div>
          <div className="document-text-content">Documents listed below are need to be fill URLA Form</div>

          {filterDocumentList &&
            filterDocumentList.length > 0 &&
            filterDocumentList.map((_, index) => {
              return (
                <DocumentCard documentName={_.documentName} documentkey={index} documentFields={_.documentField} />
              );
            })}
        </div>
        <div className="document-upload-section">
          <div className="document-text-header">UPLOAD DOCUMENTS</div>
          <div className="document-text-content">Documents uploaded will be listed below</div>

          <FileUploader data={documentListData} getProgressValue={getProgressValue} />
        </div>
      </div>
    </div>
  );
}
