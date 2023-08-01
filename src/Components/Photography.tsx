import '../App.css'
import { TopNav } from './TopNav'
import useProgressiveImg from './ProgressiveImage'
import { ProgressiveImgReturn } from './ProgressiveImage';

const BlurredUpImage = (img1: string, imgSm1: string) => {
  const imgInfo: ProgressiveImgReturn = useProgressiveImg(imgSm1, img1);
  return (
    <img
      src={ imgInfo[0] }
      className='w-100 mb-4'
      style={{
        filter: imgInfo[1].blur ? "blur(20px)" : "none",
        transition: imgInfo[1].blur ? "none" : "filter 0.75s ease-out"
      }}
    />
  );
};

function imageRow(src: string, srcSm: string, alt: string) {
    return (
        BlurredUpImage(src, srcSm)
    )
}

function renderColumns(galleryImages: string[], galleryImagesSm: string[]) {
    return (
        <>
            <div className="col-md-4 col-sm-12 pl-4">
                {images(galleryImages.slice(0, 3), galleryImagesSm)}
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
                {images(galleryImages.slice(3, 6), galleryImagesSm)}
            </div>
            <div className="col-md-4 mb-4 mb-md-0 pr-4">
                {images(galleryImages.slice(-3), galleryImagesSm)}
            </div>
        </>
    )
}

function images(galleryImages: string[], galleryImagesSm: string[]) {
    
    return (
        <>
            {galleryImages.map((img, index) => (
                <div className='blur-load' style={{ backgroundImage: `url(${galleryImagesSm[index]})`  }} key={index}>
                    {imageRow(img, galleryImagesSm[index], 'alt')}
                </div>
            ))}
        </>
    );
}

export default function Photography() {

    let galleryImages: string[] = 
    [
        "https://personal-site-photos-dc.s3.us-east-2.amazonaws.com/img1.jpg",
        "https://personal-site-photos-dc.s3.us-east-2.amazonaws.com/DSC_0348+copy.jpg",
        "https://personal-site-photos-dc.s3.us-east-2.amazonaws.com/DSC_0304-2+.jpg",
        "https://personal-site-photos-dc.s3.us-east-2.amazonaws.com/DSC_0933-2+copy.jpg",
        "https://personal-site-photos-dc.s3.us-east-2.amazonaws.com/DSC_0425+copy.jpg",
        "https://personal-site-photos-dc.s3.us-east-2.amazonaws.com/DSC_0381+copy.jpg",
        "https://personal-site-photos-dc.s3.us-east-2.amazonaws.com/DSC_0314+copy.jpg",
        "https://personal-site-photos-dc.s3.us-east-2.amazonaws.com/DSC_0340+copy.jpg",
        "https://personal-site-photos-dc.s3.us-east-2.amazonaws.com/DSC_0558+copy.jpg"
    ]

    let galleryImagesSm: string[] = 
    [
        "../assets/img1-sm.jpg",
        "../assets/img2-sm.jpg",
        "../assets/img3-sm.jpg",
        "../assets/img4-sm.jpg",
        "../assets/img5-sm.jpg",
        "../assets/img6-sm.jpg",
        "../assets/img7-sm.jpg",
        "../assets/img8-sm.jpg",
        "../assets/img9-sm.jpg"
    ]
    
    return (
        <div className='body-content px-lg-5'>
            <TopNav/>
            <div className="row w3-animate-opacity">
                    {renderColumns(galleryImages, galleryImagesSm)}
            </div>
        </div>
    )
}