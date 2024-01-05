import { useParams } from 'react-router-dom';

const Album = () => {
  const { albumId } = useParams();

  // fetch album data con albumId
  // fetch tracks con albumId
  return <div>ALBUM {albumId}</div>;
};

export default Album;
