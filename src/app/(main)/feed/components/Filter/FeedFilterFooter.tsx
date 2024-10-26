import { Button } from '@/components/Button';
import { BottomSheet } from '@/components/Overlay';

import { useFeedFilterContext } from './FeedFilterProvider';

export default function FeedFilterFooter({ onClose }: { onClose: () => void }) {
  const { reset, setFilterResult } = useFeedFilterContext();

  const handleClickApplyButton = () => {
    setFilterResult();
    onClose();
  };

  return (
    <BottomSheet.Footer className="space-x-2">
      <Button variant="outlined" onClick={reset} className="max-w-[104px]">
        초기화
      </Button>
      <Button onClick={handleClickApplyButton}>필터 적용</Button>
    </BottomSheet.Footer>
  );
}
