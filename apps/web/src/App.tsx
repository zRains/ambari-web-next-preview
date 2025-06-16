import { addTwoNum } from '@ambari-web-next/utils-shared';
import Button from '@ambari-web-next/ui-shared/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="">
      <Button />
      <span className="text-[red]">{addTwoNum(1, 2)}</span>
    </div>
  );
}
