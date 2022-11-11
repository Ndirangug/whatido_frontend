import AboutCard from '../components/utils/cards/about/AboutCard';
import ChooseCategorySVG from '../components/utils/svg/ChooseCategorySVG';
import ContactExpertSVG from '../components/utils/svg/ContactExpertSVG';
import FindExpertSVG from '../components/utils/svg/FindExpertSVG';
import RateExpertSVG from '../components/utils/svg/RateExpertSVG';
import { AboutPageContainer } from '../styles/about.styles';

function About() {
  return (
    <AboutPageContainer>
      <AboutCard Svg={ChooseCategorySVG} heading message index />
      <AboutCard Svg={FindExpertSVG} heading message index />
      <AboutCard Svg={ContactExpertSVG} heading message index />
      <AboutCard Svg={RateExpertSVG} heading message index />
    </AboutPageContainer>
  );
}

export default About;
