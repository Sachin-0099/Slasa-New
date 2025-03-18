import VideoSectionCard from './VideoSectionCard';
import { PhotoData, PhotoDescription, VideoDescription } from '../Data/PhotoData';
import { VideoData } from '../Data/PhotoData';
import PhotoSectionCard from './PhotoSectionCard';


const Section = () => {
    return (
        <div className="flex flex-col space-y-8">
            {/* PhotoSection for PhotoData */}
            <PhotoSectionCard PhotoData={PhotoData} title={'Photo Portfolio'} width={`57vh`} Description={PhotoDescription}/>

            {/* PhotoSection for VideoData with class 'min-h-[100vh]' and full width */}
            <VideoSectionCard PhotoData={VideoData} title={'Videography Portfolio'} width={`80vh`} Description={VideoDescription} className="min-h-[100vh] w-full" />
        </div>
    );
};

export default Section;