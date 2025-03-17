import SectionCard from './SectionCard'; // Adjust path accordingly
import { PhotoData } from "../Data/PhotoData";
import { VideoData } from "../Data/PhotoData";
const Section = () => {
    return (
        <div className="flex flex-col space-y-8">
            {/* PhotoSection for PhotoData */}
            <SectionCard PhotoData={PhotoData} title={'Photo Portfolio'} width={`57vh`}/>

            {/* PhotoSection for VideoData with class 'min-h-[100vh]' and full width */}
            <SectionCard PhotoData={VideoData} title={'Videography Portfolio'} width={`80vh`} className="min-h-[100vh] w-full" />
        </div>
    );
};

export default Section;