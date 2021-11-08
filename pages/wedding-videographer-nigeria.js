import { MDBContainer } from 'mdbreact'
import { Link } from 'react-router-dom'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const WeddingVideos = () => {
  const GalleryImgs = [
    {
      name: 1,
      text: 'Wemimo and Ayotunde',
      nickName: 'wedding videos',
      imgUrl: 'IZfJcZcUOO0',
    },
    {
      name: 2,
      text: 'Adeola and Olabode',
      nickName: 'wedding videos',
      imgUrl: 'rklWfmt9uA4',
    },
    {
      name: 3,
      text: 'Deborah and Marvel',
      nickName: 'wedding videos',
      imgUrl: 'ssV9ESVi9V0',
    },
    {
      name: 4,
      text: '#TEECHI 2020',
      nickName: 'real estate',
      imgUrl: 'Zr51SWDIqyA',
    },
    {
      name: 5,
      text: 'Lanre and Henry',
      nickName: 'wedding videos',
      imgUrl: 'VReT2j2LMSU',
    },
    {
      name: 6,
      text: '#AdaObi',
      nickName: 'real estate',
      imgUrl: 'hDxS_Xb03hE',
    },
  ]
  return (
    <MDBContainer>
      <h1 className='ImgGridTittle'>Wedding Videographer Lagos, Nigeria</h1>
      <div className='VideoGrid lowerVideoGrid'>
        {GalleryImgs.map((GalleryImg, index) => (
          <div key={GalleryImg.name + index} className='video-margin'>
            <LiteYouTubeEmbed
              id={GalleryImg.imgUrl}
              alt={`${GalleryImg.name}`}
              activeClass='lyt-activated' // Default as "lyt-activated", gives control to wrapper once clicked
              iframeClass='' // Default none, gives control to add a class to iframe element itself
              playerClass='lty-playbtn' // Default as "lty-playbtn" to control player button styles
              wrapperClass='yt-lite' // Default as "yt-lite" for the div wrapping the area, it is the most important class and needs extra attention, please refer to LiteYouTubeEmbed.css for a reference.
            />
            <h3 className='gridText'>{GalleryImg.text}</h3>
          </div>
        ))}
      </div>
    </MDBContainer>
  )
}

export default WeddingVideos
