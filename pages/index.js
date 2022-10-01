import ReelsCard from '../components/utils/media/ReelsCard';
import { HomePageContainer } from '../styles/home.styles';

export default function Home() {
  return (
    <HomePageContainer>
      <ReelsCard />
      <ReelsCard />
      <ReelsCard />
    </HomePageContainer>
  );
}
