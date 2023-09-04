import { useEffect, useState } from 'react';
import { СompletenessStyle } from './СompletenessStyle';
import { data } from '../../../mock';

const Сompleteness: React.FC<{ questionNumber: number }> = ({
  questionNumber,
}) => {
  const [completeness, setCompleteness] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      setCompleteness((questionNumber / data.length) * 100);
      return;
    }
    setCompleteness(0);
  }, [questionNumber]);

  return (
    <СompletenessStyle completeness={completeness}>
      <div className="completeness__base">
        <div className="completeness__line" />
      </div>
    </СompletenessStyle>
  );
};

export default Сompleteness;
