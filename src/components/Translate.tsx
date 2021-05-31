import { ElementType, FC } from 'react';
import { FormattedMessage } from 'react-intl';

interface TranslateProps {
  tag: ElementType;
  id: string;
  description: string;
}

const Translate: FC<TranslateProps> = ({
  tag,
  id,
  description,
}): JSX.Element => {
  return <FormattedMessage tagName={tag} id={id} description={description} />;
};

export default Translate;
