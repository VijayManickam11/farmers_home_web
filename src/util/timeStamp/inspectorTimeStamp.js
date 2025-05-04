import { useState } from "react";

const useSignatureTimestamps = () => {
  const [inspectorTimestamp, setInspectorTimestamp] = useState("");
  const [technicalManagerTimestamp, setTechnicalManagerTimestamp] = useState("");

  const recordInspectorTimestamp = () => {
    const now = new Date().toISOString();
    setInspectorTimestamp(now);
    return now;
  };

  const recordTechnicalManagerTimestamp = () => {
    const now = new Date().toISOString();
    setTechnicalManagerTimestamp(now);
    return now;
  };

  return {
    inspectorTimestamp,
    technicalManagerTimestamp,
    recordInspectorTimestamp,
    recordTechnicalManagerTimestamp,
  };
};

export default useSignatureTimestamps;
