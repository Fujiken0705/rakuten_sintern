import { useRouter } from 'next/router';
import { useZxing } from 'react-zxing';
import { styled } from 'styled-components';
import { useSetAtom } from 'jotai';
import { flagAtom } from './atom';

const Video = styled.video`
  max-width: 100%;
  /* height: 600px; */
  /* align-items: center;
  justify-content: center; */
  max-height: 60%;
`

const QrReader = ({ setResult, onRequestClose }) => {
  const router = useRouter();
  const setFlag = useSetAtom(flagAtom);
  const handleExit = () => {
    router.push("/point/quiz");
  };

  const { ref } = useZxing({
    onResult(result) {
      setFlag(true)
      setResult(result.getText());
      onRequestClose();
      handleExit()
    },
  });
  

  return <Video ref={ref} />;
};

export default QrReader;